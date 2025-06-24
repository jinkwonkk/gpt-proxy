import { NextRequest, NextResponse } from 'next/server'
import { getProCouplePrompt } from '@/utils/getProCouplePrompt'
import type { PersonInfo, SajuResult } from '@/types/saju'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      ...corsHeaders(),
      'Content-Type': 'application/json',
    },
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { selfInfo, partnerInfo, sajuData, sectionIndex, lang: bodyLang } = body

    if (
      !selfInfo?.name || !selfInfo?.gender || !selfInfo?.birth ||
      !partnerInfo?.name || !partnerInfo?.gender || !partnerInfo?.birth ||
      typeof sectionIndex !== 'number' || sectionIndex < 0 || sectionIndex > 5
    ) {
      return new NextResponse(JSON.stringify({ error: '❌ 필수 데이터 또는 sectionIndex 오류' }), {
        status: 400,
        headers: { ...corsHeaders(), 'Content-Type': 'application/json' },
      })
    }

    // ✅ 안전한 lang 타입 지정
    const supportedLangs = ['ko', 'en', 'ja', 'es'] as const
    type Lang = typeof supportedLangs[number]
    const isSupportedLang = (value: any): value is Lang => supportedLangs.includes(value)
    const lang: Lang = isSupportedLang(bodyLang) ? bodyLang : 'ko'

    const prompt = getProCouplePrompt(selfInfo, partnerInfo, sajuData, sectionIndex, lang)

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
        stream: true,
      }),
    })

    if (!openaiRes.ok || !openaiRes.body) throw new Error('OpenAI 응답 실패')

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        const reader = openaiRes.body!.getReader()
        const decoder = new TextDecoder('utf-8')
        let buffer = ''

        while (true) {
          const { value, done } = await reader.read()
          if (done) break

          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            const trimmed = line.trim()
            if (!trimmed.startsWith('data:')) continue
            const jsonStr = trimmed.replace(/^data:\s*/, '')
            if (jsonStr === '[DONE]') {
              controller.close()
              return
            }

            try {
              const parsed = JSON.parse(jsonStr)
              const content = parsed.choices?.[0]?.delta?.content
              if (content) {
                controller.enqueue(encoder.encode(content))
              }
            } catch (err) {
              console.warn('JSON 파싱 오류:', jsonStr)
            }
          }
        }

        controller.close()
      },
    })

    return new Response(stream, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (err: any) {
    return new NextResponse(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/json',
      },
    })
  }
}
