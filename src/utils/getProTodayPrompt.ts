// src/utils/getProTodayPrompt.ts
import type { PromptInputInfo } from '@/types/saju'

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

export function getProTodayPrompt(info: PromptInputInfo, sectionIndex: number): string {
  const { name, gender, birth, today, lang = 'ko' } = info
  const sectionList = sectionTitles[lang] ?? sectionTitles.ko
  const selectedSection = sectionList[sectionIndex] || '기타 항목'

  const baseInfo = {
    ko: `당신은 ${birth.year}년 ${birth.month}월 ${birth.day}일에 태어난 ${gender === 'male' ? '남성' : '여성'} ${name}님입니다. 오늘은 ${today}입니다.`,
    en: `You are ${name}, born on ${birth.year}-${birth.month}-${birth.day}. Today is ${today}.`,
    ja: `${birth.year}年${birth.month}月${birth.day}日生まれの${gender === 'male' ? '男性' : '女性'}${name}さんですね。本日は${today}です。`,
    es: `Eres ${name}, nacido el ${birth.day}/${birth.month}/${birth.year}. Hoy es ${today}.`,
  }

  const instructions: Record<string, string> = {
    ko: `
🔮 오늘의 해석 주제: [${sectionIndex + 1}. ${selectedSection}]

사주 용어나 어려운 표현 없이, 친절하고 이해하기 쉽게 설명해주세요.
운세 상담가처럼 부드럽고 따뜻한 말투로 하루를 안내해주세요.
`.trim(),

    en: `
🔮 Topic of the day: [${sectionIndex + 1}. ${selectedSection}]

Please avoid astrology jargon or difficult terms.
Speak like a friendly fortune teller and make it easy and pleasant to read.
`.trim(),

    ja: `
🔮 今日のテーマ: [${sectionIndex + 1}. ${selectedSection}]

占い用語や難しい言葉は使わず、わかりやすく丁寧に説明してください。
親切な占い師のように、温かく話しかけるような文体でお願いします。
`.trim(),

    es: `
🔮 Tema del día: [${sectionIndex + 1}. ${selectedSection}]

Evita palabras difíciles o jerga de astrología.
Escribe como un consejero amable, con un tono cálido y claro.
`.trim(),
  }

  return `${baseInfo[lang]}\n\n${instructions[lang]}`.trim()
}
