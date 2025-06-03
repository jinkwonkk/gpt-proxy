import { NextRequest, NextResponse } from 'next/server'
import { getSajuPrompt } from 'src/utils/getSajuPrompt'

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

    // 유효성 검사
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

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY || ''}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        top_p: 1,
        frequency_penalty: 0.2,
        presence_penalty: 0.2,
        stream: false
      })
    })

    const result = await response.json()

    console.log('🧠 OpenAI 응답 상태:', response.status)
    console.log('📦 OpenAI 응답 내용:', result)

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/json'
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
