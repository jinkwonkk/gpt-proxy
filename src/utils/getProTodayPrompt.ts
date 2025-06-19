import type { TodayInfo } from '@/types/saju'

// 언어별 템플릿
const promptTodayTemplate = {
  ko: `
당신은 {birth}생 {name}님입니다.

오늘은 {today} ({currentYear}년 기준)이며, 사주 명식은 다음과 같습니다:
- 연주: {yearStem}{yearBranch}
- 월주: {monthStem}{monthBranch}
- 일주: {dayStem}{dayBranch}
- 시주: {hourStem}{hourBranch}

오행 분포는 다음과 같습니다:
{elementDist}
강한 오행은 {strongElement}, 약한 오행은 {weakElement}입니다.

위 정보를 바탕으로 오늘의 운세를 다음 항목에 따라 상세히 분석해주세요:
1. 오늘의 총운 (전반적 기운과 흐름 요약)
2. 애정운 (연애 기회, 인간관계 흐름)
3. 금전운 (수익/지출 운, 재정 관련 주의점)
4. 직업운 (일 운세, 집중력/성과 여부)
5. 대인관계 (갈등 유무, 조심할 인간 유형)
6. 건강운 (컨디션, 피해야 할 활동 등)
7. 행운 요소 (오늘의 행운 색상, 숫자, 아이템 등)
8. 조심해야 할 점 (실수, 오해, 충돌 등)
9. 오늘의 조언 한마디 (현명한 하루를 위한 격려 또는 조언)

당신은 사주 분석 전문가입니다. 사주 명식을 바탕으로 오늘의 운세를 매우 전문적이고 구체적으로 작성하세요. 고객이 만족할 만큼 자세하고 유익하게 작성되어야 합니다.
`.trim(),

  en: `
You are {name}, born in {birth}.

Today is {today} (as of {currentYear}). Your Four Pillars are:
- Year Pillar: {yearStem}{yearBranch}
- Month Pillar: {monthStem}{monthBranch}
- Day Pillar: {dayStem}{dayBranch}
- Hour Pillar: {hourStem}{hourBranch}

Your Five Elements distribution:
{elementDist}
Your strong element is {strongElement}, and your weak element is {weakElement}.

Based on this, please analyze today's fortune in the following categories:
1. Overall Fortune (general mood and flow of the day)
2. Love Luck (relationship prospects and emotional flow)
3. Money Luck (income/spending energy and financial tips)
4. Career Luck (work productivity and focus)
5. Social Relations (potential conflicts and relationship types to be careful of)
6. Health (physical condition, activities to avoid)
7. Lucky Elements (color, number, item of the day)
8. Cautions (things to avoid, misunderstandings, accidents)
9. Advice (encouragement or wisdom for the day)

You are a fortune-telling expert. Please write a highly detailed, insightful, and customer-satisfying report based on the Four Pillars above.
`.trim(),

  ja: `
あなたは {birth} 生まれの {name} さんです。

今日は {today}（{currentYear} 年時点）であり、あなたの四柱推命は以下の通りです：
- 年柱: {yearStem}{yearBranch}
- 月柱: {monthStem}{monthBranch}
- 日柱: {dayStem}{dayBranch}
- 時柱: {hourStem}{hourBranch}

五行の分布は以下の通りです：
{elementDist}
強い五行は {strongElement}、弱い五行は {weakElement} です。

この情報に基づき、以下の項目ごとに今日の運勢を詳しく分析してください：
1. 総合運（全体の気の流れ）
2. 恋愛運（出会い・感情の流れ）
3. 金運（収支の流れ、注意点）
4. 仕事運（集中力・成果）
5. 対人運（衝突や注意すべき人間関係）
6. 健康運（体調・避けるべき行動）
7. ラッキー要素（色・数字・アイテム）
8. 注意点（失敗・誤解・衝突など）
9. 今日の一言アドバイス（知恵や励まし）

あなたは四柱推命の専門家です。上記の命式をもとに、納得できるような高品質な分析を日本語で丁寧に書いてください。
`.trim(),

  es: `
Eres {name}, nacido(a) en {birth}.

Hoy es {today} (año {currentYear}), y tus Cuatro Pilares del Destino son:
- Pilar del Año: {yearStem}{yearBranch}
- Pilar del Mes: {monthStem}{monthBranch}
- Pilar del Día: {dayStem}{dayBranch}
- Pilar de la Hora: {hourStem}{hourBranch}

Distribución de los cinco elementos:
{elementDist}
Tu elemento fuerte es {strongElement}, y tu elemento débil es {weakElement}.

Con base en esta información, analiza detalladamente la fortuna del día en las siguientes áreas:
1. Fortuna general (energía y tendencia del día)
2. Suerte en el amor (relaciones y oportunidades emocionales)
3. Suerte financiera (ingresos, gastos y advertencias)
4. Suerte en el trabajo (concentración y logros)
5. Relaciones sociales (conflictos o personas a evitar)
6. Salud (estado físico y actividades a evitar)
7. Elementos de la suerte (color, número, objeto)
8. Puntos a tener cuidado (errores, malentendidos, accidentes)
9. Consejo del día (sabiduría o aliento para hoy)

Eres un(a) experto(a) en astrología oriental. Escribe un análisis completo, claro y útil basado en la información proporcionada.
`.trim(),
}

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

export function getProTodayPrompt(info: TodayInfo, sectionIndex: number): string {
  const { name, birth, today, saju } = info
  const lang = info.lang ?? 'ko'
  const template = promptTodayTemplate[lang]
  const sectionLabels = sectionTitles[lang] ?? sectionTitles['ko']
  const selectedSection = sectionLabels[sectionIndex] || '기타 항목'

  const commonInfo = template
    .replace('{name}', name)
    .replace('{birth}', `${birth.year}년 ${birth.month}월 ${birth.day}일`)
    .replace('{today}', today)
    .replace('{currentYear}', new Date().getFullYear().toString())
    .replace('{yearStem}', saju.year.stem)
    .replace('{yearBranch}', saju.year.branch)
    .replace('{monthStem}', saju.month.stem)
    .replace('{monthBranch}', saju.month.branch)
    .replace('{dayStem}', saju.day.stem)
    .replace('{dayBranch}', saju.day.branch)
    .replace('{hourStem}', saju.hour.stem)
    .replace('{hourBranch}', saju.hour.branch)
    .replace(
      '{elementDist}',
      Object.entries(saju.elementCounts)
        .map(([el, cnt]) => `- ${el}: ${cnt}`)
        .join('\n')
    )
    .replace('{strongElement}', saju.strongElement)
    .replace('{weakElement}', saju.weakElement)

  const localizedPromptIntro: Record<typeof lang, string> = {
    ko: `지금부터 아래 항목 **[${sectionIndex + 1}. ${selectedSection}]** 에 대해서만 분석해주세요.\n\n고객이 만족할 만큼 **전문적이고 구체적인 사주 기반 해석**을 해주세요. 중복 표현 없이 설득력 있게 작성하세요.`,
    en: `Now analyze only the section **[${sectionIndex + 1}. ${selectedSection}]**.\n\nProvide a highly detailed and insightful Four Pillars interpretation that satisfies the client. Avoid repetition and be persuasive.`,
    ja: `以下の項目 **[${sectionIndex + 1}. ${selectedSection}]** のみを分析してください。\n\nお客様が満足できるように、四柱推命に基づいた専門的かつ具体的な分析を繰り返し表現なく書いてください。`,
    es: `Por favor analiza solo el siguiente punto **[${sectionIndex + 1}. ${selectedSection}]**.\n\nHaz un análisis profundo y convincente basado en los Cuatro Pilares, sin repeticiones y con detalle profesional.`,
  }

  return `${commonInfo}\n\n${localizedPromptIntro[lang]}`.trim()
}
