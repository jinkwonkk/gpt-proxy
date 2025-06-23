import { PersonInfo, SajuResult } from '../types/saju'
import { couplePromptTexts } from '@/i18n/promptLabels'

export function getProCouplePrompt(
  selfInfo: PersonInfo,
  partnerInfo: PersonInfo,
  sajuData: { self: SajuResult; partner: SajuResult },
  sectionIndex: number,
  lang: 'ko' | 'en' | 'ja' | 'es'
): string {
  const formatGanji = (year?: string, month?: string, day?: string, hour?: string) =>
    [year, month, day, hour].filter(Boolean).join(' / ') || '자료 없음'

  const formatLine = (label: string, value?: string) =>
    `${label}: ${value?.trim() || '해당 데이터 없음'}`

  const currentYear = new Date().getFullYear()

  // ✅ sectionPrompt 배열 안전 접근
  const sectionPrompts = [
    couplePromptTexts[lang]?.section1,
    couplePromptTexts[lang]?.section2,
    couplePromptTexts[lang]?.section3,
    couplePromptTexts[lang]?.section4,
    couplePromptTexts[lang]?.section5,
    couplePromptTexts[lang]?.section6,
  ] as const

  const sectionPrompt = sectionPrompts[sectionIndex] || ''

  return `
당신은 사주명리학에 정통한 전문가입니다. 아래 제공된 두 사람의 생년월일, 성별, 간지, 오행 분포, 일지 및 기타 핵심 정보를 바탕으로, 궁합에 대한 전문적인 리포트를 작성해주세요.

작성 시 유의할 점:
- 고객은 유료 결제를 통해 이 리포트를 구매하였으며, 높은 기대를 가지고 있습니다.
- 단순한 설명이 아닌, 실제 전문가의 상담처럼 신뢰감 있고 논리적인 해석을 제공해야 합니다.
- 제공된 사주 정보가 제한적일 수 있으나, 절대 '정보 부족', '알 수 없음' 등의 표현은 피하고, 주어진 정보만으로 가능한 한 풍부하고 설득력 있게 분석해야 합니다.
- 문장은 너무 짧거나 단편적이지 않게, 마치 실제 상담사가 장문의 리포트를 작성하듯 묘사해주세요.
- 사주 구성의 핵심 요소(간지, 오행 상생/상극, 일간과 일지, 배우자 자리, 오행 균형 등)를 근거로 명확한 분석과 조언을 제시해주세요.

📅 현재 연도: ${currentYear}년

👥 [분석 대상 정보]
- 본인: ${selfInfo.name || '정보없음'} (${selfInfo.gender || '정보없음'}) / 생년월일: ${selfInfo.birth.year}-${selfInfo.birth.month}-${selfInfo.birth.day} ${selfInfo.birth.hour !== undefined ? `(${selfInfo.birth.hour}시)` : '(시 정보 없음)'}
- 상대: ${partnerInfo.name || '정보없음'} (${partnerInfo.gender || '정보없음'}) / 생년월일: ${partnerInfo.birth.year}-${partnerInfo.birth.month}-${partnerInfo.birth.day} ${partnerInfo.birth.hour !== undefined ? `(${partnerInfo.birth.hour}시)` : '(시 정보 없음)'}

🧾 [본인 사주 정보]
- 간지 조합: ${formatGanji(sajuData.self.yearGanji, sajuData.self.monthGanji, sajuData.self.dayGanji, sajuData.self.hourGanji)}
${formatLine('- 성격 특징 (일간 기준)', sajuData.self.dayStemDesc)}
${formatLine('- 오행 분포 분석', sajuData.self.elementSummary)}
${formatLine('- 강한 오행', sajuData.self.strongElement)}
${formatLine('- 부족한 오행', sajuData.self.weakElement)}
${formatLine('- 일지 (배우자 자리 해석)', sajuData.self.spouseHint)}

🧾 [상대 사주 정보]
- 간지 조합: ${formatGanji(sajuData.partner.yearGanji, sajuData.partner.monthGanji, sajuData.partner.dayGanji, sajuData.partner.hourGanji)}
${formatLine('- 성격 특징 (일간 기준)', sajuData.partner.dayStemDesc)}
${formatLine('- 오행 분포 분석', sajuData.partner.elementSummary)}
${formatLine('- 강한 오행', sajuData.partner.strongElement)}
${formatLine('- 부족한 오행', sajuData.partner.weakElement)}
${formatLine('- 일지 (배우자 자리 해석)', sajuData.partner.spouseHint)}

🧠 [해석 지시 항목]
${sectionPrompt}
`.trim()
}
