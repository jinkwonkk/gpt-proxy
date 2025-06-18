import { NextRequest } from 'next/server'
import { getProTodayPrompt } from '@/utils/getProTodayPrompt'
import type { TodayInfo } from '@/types/saju'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

export async function OPTIONS() {
  return new Response(null, {
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
    console.log('[POST /today] 요청 body:', JSON.stringify(body, null, 2))

    const { info, sajuData } = body

    // 필수 정보 누락 검사
    if (
      !info?.name ||
      !info?.gender ||
      !info?.birth?.year ||
      !info?.birth?.month ||
      !info?.birth?.day ||
      typeof info?.birth?.hour !== 'number' ||
      !sajuData?.year ||
      !sajuData?.month ||
      !sajuData?.day ||
      !sajuData?.hour ||
      !sajuData?.elementCounts ||
      !sajuData?.strongElement ||
      !sajuData?.weakElement
    ) {
      return new Response(
        JSON.stringify({
          error: '필수 데이터 누락: info 또는 sajuData의 일부 필드가 존재하지 않습니다.',
        }),
        {
          status: 400,
          headers: {
            ...corsHeaders(),
            'Content-Type': 'application/json',
          },
        }
      )
    }

    const fullInfo: TodayInfo = { ...info, saju: sajuData }
    const lang = info.lang ?? 'ko'
    const prompt = getProTodayPrompt({ ...info, saju: sajuData, lang })

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`,
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
        stream: true,
      }),
    })

    if (!response.body) {
      return new Response(JSON.stringify({ error: 'OpenAI 응답 body가 없습니다.' }), {
        status: 500,
        headers: {
          ...corsHeaders(),
          'Content-Type': 'application/json',
        },
      })
    }

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader()
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
            } catch (e) {
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
  } catch (error: any) {
    console.error('[POST /today] 서버 오류:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/json',
      },
    })
  }
}
