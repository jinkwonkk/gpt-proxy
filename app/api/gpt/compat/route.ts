import { NextRequest, NextResponse } from 'next/server'
import { getProCouplePrompt } from '@/utils/getProCouplePrompt'
import type { PersonInfo, SajuResult } from '@/types/saju'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// CORS 설정
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
    const selfInfo: PersonInfo = body.selfInfo
    const partnerInfo: PersonInfo = body.partnerInfo
    const sajuData: { self: SajuResult; partner: SajuResult } = body.sajuData

    if (!selfInfo || !partnerInfo || !sajuData) {
      return new NextResponse(JSON.stringify({ error: 'Missing required data' }), {
        status: 400,
        headers: {
          ...corsHeaders(),
          'Content-Type': 'application/json',
        },
      })
    }

    const prompt = getProCouplePrompt(selfInfo, partnerInfo, sajuData)

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
        stream: false,
      }),
    })

    const result = await response.json()

    return new NextResponse(JSON.stringify(result), {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'application/json',
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
