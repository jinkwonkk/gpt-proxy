import { promptAliasMap, promptTexts } from '../i18n/promptLabels'

export type PromptInput = {
  userName: string
  gender: string
  birth: { year: number; month: number; day: number; hour?: number }
  saju: any
  item?: string
  lang?: 'ko' | 'en' | 'ja' | 'es'
}

const basePromptTexts: Record<'ko' | 'en' | 'ja' | 'es', string> = {
  ko: `
📌 기본 사주 리포트 (전문가 작성)

당신은 대한민국 최고의 사주 분석 전문가입니다. 아래 사주 명식을 바탕으로 고객의 전체적인 사주팔자를 다음 항목에 따라 논리적으로 분석한 리포트를 작성해주세요. 문단마다 제목을 붙이고, 각 해석은 실제 상담 리포트처럼 자세하고 이해하기 쉽게 구성하세요. 돈을 지불한 고객이 충분히 만족할 수 있어야 합니다.

❗ 반드시 포함해야 할 항목:
1. 전체적인 인생 기운의 흐름 요약
2. 성격 및 기본 성향 분석 (일간 중심)
3. 오행 분포 해석 및 강/약한 요소
4. 인생의 주요 전환점 시기
5. 사주의 강점과 약점
6. 주의할 시기 또는 반복되는 패턴
7. 고객에게 꼭 필요한 조언

❗ '정보 부족', '알 수 없음' 같은 말은 절대 하지 마세요. 사주 명식을 최대한 활용해 유의미한 해석을 해주세요.
`.trim(),

  en: `
📌 Professional Saju Report (Expert Generated)

You are Korea’s top saju interpretation expert. Based on the saju chart below, logically analyze the user's overall destiny in the format of a paid consultation report. Include clear section titles and detailed, easy-to-understand explanations.

❗ Required Sections:
1. Overall life energy flow
2. Personality traits (based on the day stem)
3. Element distribution and strengths/weaknesses
4. Major turning points in life
5. Strengths and weaknesses in the saju
6. Recurring challenges or danger periods
7. Key advice for the user

❗ Never say "not enough information" — use all available saju data for meaningful interpretation.
`.trim(),

  ja: `
📌 基本四柱推命レポート（専門家作成）

あなたは韓国最高の四柱推命専門家です。以下の命式を基に、顧客の全体的な運命を以下の項目に従って論理的に分析し、実際の鑑定レポートのようにわかりやすく詳細に構成してください。支払いをした顧客が満足できる内容にしてください。

❗ 必須項目:
1. 人生全体の運勢の流れ
2. 性格・本質的な傾向（日干を中心に）
3. 五行のバランスと強弱
4. 人生の転換点
5. 命式上の長所と短所
6. 注意が必要な時期やパターン
7. 顧客への重要なアドバイス

❗「情報不足」や「あいまいな判断」とは絶対に言わず、最大限に分析してください。
`.trim(),

  es: `
📌 Informe Básico de Saju (Elaborado por un Experto)

Eres el mejor analista de saju de Corea. Basándote en la carta natal que aparece a continuación, analiza detalladamente la suerte general del cliente. Escribe el informe como si fuera una consulta real, con títulos claros y explicaciones comprensibles.

❗ Secciones obligatorias:
1. Flujo general de la suerte de vida
2. Análisis de la personalidad (basado en el tronco del día)
3. Análisis de los elementos (fuertes/débiles)
4. Momentos clave de cambio en la vida
5. Fortalezas y debilidades del saju
6. Patrones repetitivos o épocas peligrosas
7. Consejo práctico para el cliente

❗ No digas “falta información”. Usa lo que haya para ofrecer un análisis significativo.
`.trim(),
}

function getBaseInfo(input: PromptInput) {
  const { userName, gender, birth, saju } = input
  const currentYear = new Date().getFullYear()
  return `📅 Year: ${currentYear}\nName: ${userName}\nGender: ${gender}\nBirth: ${birth.year}-${birth.month}-${birth.day} ${birth.hour ?? 'Unknown'}\nSaju Chart: ${JSON.stringify(saju)}`
}

export function getBaseSajuPrompt(input: PromptInput): string {
  const lang = input.lang ?? 'ko'
  const instruction = basePromptTexts[lang]
  return `🔮 ${lang === 'ko' ? '아래는 사용자의 사주 정보입니다.' : 'Here is the user’s saju information:'}\n\n${getBaseInfo(input)}\n\n---\n\n${instruction}`
}

export function getItemSajuPrompt(input: PromptInput): string {
  const { item } = input
  if (!item) return ''
  const resolved = promptAliasMap[item] || item
  const lang = input.lang ?? 'ko'
  const report = promptTexts[resolved]?.[lang]
  if (!report) return ''
  return `🔮 ${lang === 'ko' ? '아래는 사용자의 사주 정보입니다.' : 'Here is the user’s saju information:'}\n\n${getBaseInfo(input)}\n\n---\n\n${report}`
}