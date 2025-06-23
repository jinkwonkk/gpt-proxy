// src/utils/getProSajuPrompt.ts
import type { PromptInputInfo } from '../types/saju'

// 언어별 섹션 제목 정의
const sectionTitles = {
  ko: [
    '오늘의 총운 (전반적 기운과 흐름 요약)',
    '애정운 (연애 기회, 인간관계 흐름)',
    '금전운 (수익/지출 운, 재정 관련 주의점)',
    '직업운 (일 운세, 집중력/성과 여부)',
    '대인관계 (갈등 유무, 조심할 인간 유형)',
    '건강운 (컨디션, 피해야 할 활동 등)',
    '행운 요소 (오늘의 행운 색상, 숫자, 아이템 등)',
    '조심해야 할 점 (실수, 오해, 충돌 등)',
    '오늘의 조언 한마디 (현명한 하루를 위한 격려 또는 조언)',
  ],
  en: [
    'Overall Fortune (general mood and flow of the day)',
    'Love Luck (relationship prospects and emotional flow)',
    'Money Luck (income/spending energy and financial tips)',
    'Career Luck (work productivity and focus)',
    'Social Relations (potential conflicts and relationship types to be careful of)',
    'Health (physical condition, activities to avoid)',
    'Lucky Elements (color, number, item of the day)',
    'Cautions (things to avoid, misunderstandings, accidents)',
    'Advice (encouragement or wisdom for the day)',
  ],
  ja: [
    '総合運（全体の気の流れ）',
    '恋愛運（出会い・感情の流れ）',
    '金運（収支の流れ、注意点）',
    '仕事運（集中力・成果）',
    '対人運（衝突や注意すべき人間関係）',
    '健康運（体調・避けるべき行動）',
    'ラッキー要素（色・数字・アイテム）',
    '注意点（失敗・誤解・衝突など）',
    '今日の一言アドバイス（知恵や励まし）',
  ],
  es: [
    'Fortuna general (energía y tendencia del día)',
    'Suerte en el amor (relaciones y oportunidades emocionales)',
    'Suerte financiera (ingresos, gastos y advertencias)',
    'Suerte en el trabajo (concentración y logros)',
    'Relaciones sociales (conflictos o personas a evitar)',
    'Salud (estado físico y actividades a evitar)',
    'Elementos de la suerte (color, número, objeto)',
    'Puntos a tener cuidado (errores, malentendidos, accidentes)',
    'Consejo del día (sabiduría o aliento para hoy)',
  ],
} as const

export function getProSajuPrompt(info: PromptInputInfo, sectionIndex: number): string {
  const { name, birth, today, saju } = info
  const lang = info.lang ?? 'ko'
  const sectionList = sectionTitles[lang] ?? sectionTitles.ko
  const selectedSection = sectionList[sectionIndex] || '기타 항목'

  const baseInfo = {
    ko: `
당신은 ${birth.year}년 ${birth.month}월 ${birth.day}일생 ${name}님입니다.
오늘은 ${today} (${new Date().getFullYear()}년 기준)이며, 사주 명식은 다음과 같습니다:
- 연주: ${saju.year.stem}${saju.year.branch}
- 월주: ${saju.month.stem}${saju.month.branch}
- 일주: ${saju.day.stem}${saju.day.branch}
- 시주: ${saju.hour.stem}${saju.hour.branch}

오행 분포는 다음과 같습니다:
${Object.entries(saju.elementCounts).map(([el, cnt]) => `- ${el}: ${cnt}`).join('\n')}
강한 오행은 ${saju.strongElement}, 약한 오행은 ${saju.weakElement}입니다.
`.trim(),

    en: `
You are ${name}, born in ${birth.year}-${birth.month}-${birth.day}.
Today is ${today} (as of ${new Date().getFullYear()}). Your Four Pillars are:
- Year Pillar: ${saju.year.stem}${saju.year.branch}
- Month Pillar: ${saju.month.stem}${saju.month.branch}
- Day Pillar: ${saju.day.stem}${saju.day.branch}
- Hour Pillar: ${saju.hour.stem}${saju.hour.branch}

Your Five Elements distribution:
${Object.entries(saju.elementCounts).map(([el, cnt]) => `- ${el}: ${cnt}`).join('\n')}
Your strong element is ${saju.strongElement}, and your weak element is ${saju.weakElement}.
`.trim(),

    ja: `
あなたは ${birth.year}年${birth.month}月${birth.day}日生まれの ${name} さんです。
今日は ${today}（${new Date().getFullYear()}年時点）であり、四柱推命は以下の通りです：
- 年柱: ${saju.year.stem}${saju.year.branch}
- 月柱: ${saju.month.stem}${saju.month.branch}
- 日柱: ${saju.day.stem}${saju.day.branch}
- 時柱: ${saju.hour.stem}${saju.hour.branch}

五行の分布は以下の通りです：
${Object.entries(saju.elementCounts).map(([el, cnt]) => `- ${el}: ${cnt}`).join('\n')}
強い五行は ${saju.strongElement}、弱い五行は ${saju.weakElement} です。
`.trim(),

    es: `
Eres ${name}, nacido(a) en ${birth.year}-${birth.month}-${birth.day}.
Hoy es ${today} (año ${new Date().getFullYear()}), y tus Cuatro Pilares del Destino son:
- Pilar del Año: ${saju.year.stem}${saju.year.branch}
- Pilar del Mes: ${saju.month.stem}${saju.month.branch}
- Pilar del Día: ${saju.day.stem}${saju.day.branch}
- Pilar de la Hora: ${saju.hour.stem}${saju.hour.branch}

Distribución de los cinco elementos:
${Object.entries(saju.elementCounts).map(([el, cnt]) => `- ${el}: ${cnt}`).join('\n')}
Tu elemento fuerte es ${saju.strongElement}, y tu elemento débil es ${saju.weakElement}.
`.trim(),
  }

  const instructions: Record<string, string> = {
    ko: `지금부터 아래 항목 **[${sectionIndex + 1}. ${selectedSection}]** 에 대해서만 분석해주세요.

고객이 만족할 만큼 **전문적이고 구체적인 사주 기반 해석**을 해주세요. 중복 표현 없이 설득력 있게 작성하세요.`,
    en: `Now analyze only the section **[${sectionIndex + 1}. ${selectedSection}]**.

Provide a highly detailed and insightful Four Pillars interpretation that satisfies the client. Avoid repetition and be persuasive.`,
    ja: `以下の項目 **[${sectionIndex + 1}. ${selectedSection}]** のみを分析してください。

お客様が満足できるように、四柱推命に基づいた専門的かつ具体的な分析を繰り返し表現なく書いてください。`,
    es: `Por favor analiza solo el siguiente punto **[${sectionIndex + 1}. ${selectedSection}]**.

Haz un análisis profundo y convincente basado en los Cuatro Pilares, sin repeticiones y con detalle profesional.`,
  }

  return `${baseInfo[lang]}\n\n${instructions[lang]}`.trim()
}
