import type { NewYearInfo } from '@/types/saju'

const sections = {
  ko: [
    '📌 올해의 전체 기운 및 운세 총론 (기본 분위기, 전반적 흐름)',
    '⬆️ 상반기 운세 흐름 / ⬇️ 하반기 운세 흐름',
    '💘 애정운 (연애운, 부부관계, 새로운 인연, 다툼/화합)',
    '💰 금전운 (재물 흐름, 지출 경향, 투자 적기 여부)',
    '💼 직업운 및 진로 변화 가능성 (승진, 전직, 시험 등)',
    '👥 대인운 (귀인운, 인간관계 충돌 여부 등)',
    '🩺 건강운 (올해 주의할 신체 부위, 체력 변화 등)',
    '⚠️ 신년 조언 및 유의사항 (조심할 상황, 좋은 기회 시기 등)',
    '🧩 올해의 키워드 3개 제시 (요약용)'
  ],
  en: [
    '📌 General energy and overall fortune of the year',
    '⬆️ First half / ⬇️ Second half fortune trends',
    '💘 Love fortune (romance, marriage, new relationships, conflict/harmony)',
    '💰 Financial fortune (income flow, spending, investment timing)',
    '💼 Career and job changes (promotion, career shift, exams, etc.)',
    '👥 Social fortune (supporters, relationship issues, etc.)',
    '🩺 Health fortune (body parts to watch, vitality trends)',
    '⚠️ Advice and warnings (situations to beware of, lucky timing)',
    '🧩 3 key keywords for the year (summary)'
  ],
  ja: [
    '📌 今年の全体的な気運と運勢の総論',
    '⬆️ 上半期の運勢 / ⬇️ 下半期の運勢',
    '💘 恋愛運（恋人、夫婦、新しい出会い、喧嘩・調和）',
    '💰 金運（収支、支出傾向、投資のタイミング）',
    '💼 仕事運とキャリアの変化（昇進、転職、試験など）',
    '👥 対人運（貴人運、人間関係の衝突など）',
    '🩺 健康運（注意すべき体の部位、体力の変化）',
    '⚠️ 新年のアドバイスと注意点（注意すべき状況、好機の時期）',
    '🧩 今年のキーワード3つ（要約用）'
  ],
  es: [
    '📌 Energía general y resumen de la suerte del año',
    '⬆️ Fortuna del primer semestre / ⬇️ segundo semestre',
    '💘 Suerte amorosa (pareja, matrimonio, nuevas relaciones, conflictos/armonía)',
    '💰 Suerte financiera (flujo de dinero, gastos, momento de inversión)',
    '💼 Suerte laboral y cambios profesionales (ascensos, cambios de carrera, exámenes)',
    '👥 Suerte social (relaciones clave, conflictos sociales, etc.)',
    '🩺 Salud (partes del cuerpo a vigilar, energía general)',
    '⚠️ Consejos y advertencias (situaciones de riesgo y buenas oportunidades)',
    '🧩 3 palabras clave del año (resumen)'
  ]
}

export function getProNewYearPrompt(
  info: NewYearInfo,
  sectionIndex: number
): string {
  const { name, gender, birth, year, saju, lang = 'ko' } = info
  const { year: y, month, day, hour, elementCounts, strongElement, weakElement } = saju

  const baseIntro = `
당신은 ${birth.year}년생 ${name}님이며, 조회 연도는 ${year}년입니다.

사주 명식:
- 연주: ${y.stem}${y.branch}
- 월주: ${month.stem}${month.branch}
- 일주: ${day.stem}${day.branch}
- 시주: ${hour.stem}${hour.branch}

오행 분포:
${Object.entries(elementCounts).map(([k, v]) => `- ${k}: ${v}개`).join('\n')}
강한 오행: ${strongElement}, 약한 오행: ${weakElement}
  `.trim()

  const section = sections[lang]?.[sectionIndex] || sections['ko'][sectionIndex]

  return `
${baseIntro}

🎯 아래 항목을 전문적으로 분석해주세요:
${section}

- 자연스럽고 설득력 있는 리포트 스타일로 작성해주세요.
- 고객이 만족할 수 있도록, 구체적인 조언과 예시를 포함해주세요.
`.trim()
}
