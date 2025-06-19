import { promptTexts } from '../i18n/promptLabels'

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

당신은 국내 최고 수준의 사주 전문가입니다. 아래 제공된 사주 명식을 기반으로, 실제 유료 상담을 받는 고객에게 제공하는 것처럼 신뢰도 높고 설득력 있는 해석을 작성해주세요. 단순한 요약이 아니라 구체적인 사례, 사주 구조에 대한 논리적 해석, 고객이 공감할 수 있는 조언을 포함해야 합니다.

📍 리포트 구성 (각 항목은 소제목 포함, 문단으로 서술):
1. 전체적인 인생 흐름 개요 — 이 사람의 인생 기조, 주된 방향성, 반복되는 패턴
2. 성격 및 성향 분석 — 일간을 중심으로 한 기질, 사고방식, 대인관계 스타일
3. 오행 분포 해석 — 강한 오행, 약한 오행의 의미와 삶에 미치는 영향
4. 주요 전환점 시기 — 대운 흐름 및 사주의 구조상 주목해야 할 시기들
5. 타고난 강점과 취약점 — 인생에서 활용해야 할 장점과 유의할 부분
6. 주의할 패턴 및 위험 요소 — 반복되는 실수, 충돌, 건강 이슈 등
7. 전문가 조언 — 사주 구조에 기반한 실질적 조언 및 방향 제시

❗ 아래 금지 문구 사용 금지: '정보 부족', '판단 불가', '모호함' 등. 반드시 주어진 사주 정보로 의미 있는 해석을 도출해주세요.
`.trim(),

  en: `
📌 In-Depth Saju Report (Expert Level)

You are one of the most respected saju interpretation experts. Based on the user's saju chart below, create a comprehensive and well-structured report as if you were providing a high-value paid consultation. Avoid shallow summaries — instead, include logical interpretations, relatable insights, and specific examples.

📍 Report Structure (each with section title and paragraph explanation):
1. Overview of Life Flow — Overall destiny patterns and direction
2. Personality Analysis — Based on Day Stem: mindset, temperament, relationships
3. Element Balance — Dominant and weak elements and their impact on life
4. Major Turning Points — Key years based on luck cycle and chart structure
5. Strengths and Weaknesses — Inborn advantages and areas to be cautious
6. Recurring Patterns & Cautions — Risk factors, conflicts, health alerts
7. Expert Advice — Practical suggestions based on saju analysis

❗ Never say "not enough info", "cannot determine", or similar. Use all available chart data to deliver meaningful insights.
`.trim(),

  ja: `
📌 四柱推命 詳細鑑定レポート（専門家向け）

あなたは一流の四柱推命専門家です。以下の命式情報に基づき、実際に有料相談を受ける顧客に提供するような、高品質で信頼性のある鑑定レポートを作成してください。表面的な解釈ではなく、深みのある分析・納得感のある助言を含めてください。

📍 レポート構成（各項目にタイトルと段落を付けて説明）:
1. 人生全体の運勢の流れ — 大まかな方向性、人生のテーマ
2. 性格分析 — 日干を中心とした思考・行動パターン、人間関係
3. 五行のバランス — 強い五行と弱い五行、それが与える影響
4. 人生の転換点 — 大運や命式構造から見た重要な年
5. 強みと弱点 — 活かすべき資質と注意点
6. 注意すべきパターン — トラブル傾向、体調のリスクなど
7. 専門家からの助言 — 命式に基づいた実用的なアドバイス

❗ 「情報不足」「不明」などの曖昧な表現は禁止。命式から得られるすべての情報を活用し、有意義な分析を行ってください。
`.trim(),

  es: `
📌 Informe Detallado de Saju (Nivel Experto)

Eres un experto reconocido en la interpretación del saju. Utilizando la carta natal proporcionada a continuación, crea un informe completo como si fuera para una consulta profesional pagada. No resumas superficialmente — ofrece un análisis profundo con ejemplos concretos y consejos prácticos.

📍 Estructura del informe (cada sección debe tener un título y un párrafo explicativo):
1. Flujo general de la vida — Temas principales y dirección del destino
2. Análisis de personalidad — Basado en el tronco del día, forma de pensar, estilo de relaciones
3. Análisis de elementos — Elementos fuertes y débiles y su influencia
4. Momentos clave de cambio — Años importantes según ciclos de suerte y estructura del saju
5. Fortalezas y debilidades — Capacidades innatas y áreas a tener cuidado
6. Patrones repetitivos y advertencias — Problemas recurrentes, salud, conflictos
7. Consejo del experto — Recomendaciones prácticas basadas en la carta

❗ No utilices frases como "información insuficiente" o "no se puede determinar". Usa todos los datos disponibles para ofrecer un análisis significativo.
`.trim(),
}

function getBaseInfo(input: PromptInput) {
  const { userName, gender, birth, saju } = input

  return `
🧾 이름: ${userName}
🧍 성별: ${gender}
🎂 생년월일: ${birth.year}-${birth.month}-${birth.day} ${birth.hour ?? '모름'}

🌿 사주 구성:
- 연: ${saju.year.stem}${saju.year.branch}
- 월: ${saju.month.stem}${saju.month.branch}
- 일: ${saju.day.stem}${saju.day.branch}
- 시: ${saju.hour?.stem ?? '-'}${saju.hour?.branch ?? '-'}

🔮 오행 분포:
- 목: ${saju.elementCounts['목'] ?? 0}
- 화: ${saju.elementCounts['화'] ?? 0}
- 토: ${saju.elementCounts['토'] ?? 0}
- 금: ${saju.elementCounts['금'] ?? 0}
- 수: ${saju.elementCounts['수'] ?? 0}

💪 강한 오행: ${saju.strongElement}
🧂 약한 오행: ${saju.weakElement}
`.trim()
}

export function getBaseSajuPrompt(input: PromptInput): string {
  const lang = input.lang ?? 'ko'
  const instruction = basePromptTexts[lang]
  const baseInfo = getBaseInfo(input)
  return `🔮 ${lang === 'ko' ? '아래는 사용자의 사주 정보입니다.' : 'Here is the user’s saju information:'}\n\n${baseInfo}\n\n---\n\n${instruction}`
}

export function getItemSajuPrompt(input: PromptInput): string {
  const { item } = input
  if (!item) return ''
  const lang = input.lang ?? 'ko'
  const report = promptTexts[item]?.[lang]
  if (!report) return ''
  const baseInfo = getBaseInfo(input)
  return `🔮 ${lang === 'ko' ? '아래는 사용자의 사주 정보입니다.' : 'Here is the user’s saju information:'}\n\n${baseInfo}\n\n---\n\n${report}`
}
