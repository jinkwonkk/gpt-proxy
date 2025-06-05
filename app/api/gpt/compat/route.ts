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
    const selfInfo: PersonInfo = body.selfInfo
    const partnerInfo: PersonInfo = body.partnerInfo
    const sajuData: { self: SajuResult; partner: SajuResult } = body.sajuData
    const sectionPrompt: string = body.sectionPrompt

    const prompt = getProCouplePrompt(selfInfo, partnerInfo, sajuData, sectionPrompt)

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
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

    if (!openaiRes.ok || !openaiRes.body) throw new Error('OpenAI 응답 실패')

    return new Response(openaiRes.body, {
      status: 200,
      headers: {
        ...corsHeaders(),
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Transfer-Encoding': 'chunked',
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
