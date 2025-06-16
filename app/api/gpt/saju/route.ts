import { NextRequest, NextResponse } from 'next/server'
import { getSajuPrompt } from '@/utils/getSajuPrompt'

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
    console.log("✅ POST /api/gpt/saju 호출됨")

    const body = await req.json()
    const { userName, gender, birth, saju, question, selectedItems } = body

    if (!userName || !gender || !birth || !saju || !selectedItems) {
      return new NextResponse(JSON.stringify({ error: '필수 항목 누락' }), {
        status: 400,
        headers: {
          ...corsHeaders(),
          'Content-Type': 'application/json',
        },
      })
    }

    const prompt = getSajuPrompt({
      userName,
      gender,
      birth,
      saju,
      question,
      selectedItems
    })

    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
        stream: true
      })
    })

    if (!openaiResponse.ok || !openaiResponse.body) {
      throw new Error('OpenAI 응답 오류 또는 body 없음')
    }

    const stream = openaiResponse.body

    return new Response(stream, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Transfer-Encoding': 'chunked',
      }
    })
  } catch (error: any) {
    console.error('❌ 서버 오류:', error)
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/json'
      }
    })
  }
}
