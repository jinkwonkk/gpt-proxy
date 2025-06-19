import { NextRequest, NextResponse } from 'next/server'
import { getBaseSajuPrompt, getItemSajuPrompt } from '@/utils/getSajuPrompt'

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
    const { userName, gender, birth, saju, selectedItems, lang = 'ko' } = body

    if (
      !userName || !gender ||
      !birth?.year || !birth?.month || !birth?.day ||
      !saju || !Array.isArray(selectedItems)
    ) {
      return new NextResponse(JSON.stringify({ error: '필수 항목 누락' }), {
        status: 400,
        headers: {
          ...corsHeaders(),
          'Content-Type': 'application/json',
        },
      })
    }

    let prompt = ''

    if (selectedItems.length === 0) {
      prompt = getBaseSajuPrompt({ userName, gender, birth, saju, lang })
    } else if (selectedItems.length === 1) {
      prompt = getItemSajuPrompt({
        userName,
        gender,
        birth,
        saju,
        item: selectedItems[0],
        lang,
      })
    } else {
      return new NextResponse(JSON.stringify({ error: '항목은 한 번에 하나만 요청해야 합니다.' }), {
        status: 400,
        headers: {
          ...corsHeaders(),
          'Content-Type': 'application/json',
        },
      })
    }

    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`,
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

    if (!openaiResponse.ok || !openaiResponse.body) {
      throw new Error('OpenAI 응답 오류 또는 body 없음')
    }

    const { readable, writable } = new TransformStream()
    const writer = writable.getWriter()
    const reader = openaiResponse.body.getReader()
    const decoder = new TextDecoder()
    const encoder = new TextEncoder()

    const pump = async () => {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        await writer.write(encoder.encode(chunk))
      }
      writer.close()
    }

    await pump() // ✅ 반드시 기다려야 함

    return new Response(readable, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
        'Transfer-Encoding': 'chunked',
      },
    })
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/json',
      },
    })
  }
}
