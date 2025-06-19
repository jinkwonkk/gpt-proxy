import type { TodayInfo } from '@/types/saju'
import { promptTodayTemplate } from '@/i18n/promptTodayLabels'

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
  const lang = info.lang ?? 'ko' // 🔐 lang이 undefined일 경우 기본값으로 'ko' 사용
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
      Object.entries(saju.elementCounts).map(([el, cnt]) => `- ${el}: ${cnt}`).join('\n')
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
