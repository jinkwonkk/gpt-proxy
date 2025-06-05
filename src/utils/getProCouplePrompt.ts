import { PersonInfo, SajuResult } from '../types/saju'

export function getProCouplePrompt(
  selfInfo: PersonInfo,
  partnerInfo: PersonInfo,
  sajuData: { self: SajuResult; partner: SajuResult },
  extraPrompt?: string
): string {
  const formatGanji = (year?: string, month?: string, day?: string, hour?: string) =>
    [year, month, day, hour].filter(Boolean).join(' / ') || '자료 없음'

  const formatLine = (label: string, value?: string) =>
    `${label}: ${value?.trim() || '해당 데이터 없음'}`

  return `
당신은 사주 분석 전문가입니다. 다음 두 사람의 사주 명식을 바탕으로 궁합을 매우 상세하고 전문적으로 분석한 리포트를 작성해주세요. 각 항목은 실제 전문가가 설명하듯 논리적 근거와 함께 서술하며, 돈을 낸 고객이 만족할 만큼의 품질을 갖춰야 합니다.

명확한 정보가 부족하더라도, 현재 제공된 사주 명식 기반으로 최선을 다해 분석하세요. 
❗ '정보 부족' 또는 '알 수 없다'는 표현은 절대 사용하지 마세요.

[분석 대상]
- 본인: ${selfInfo.name || '정보없음'} (${selfInfo.gender || '정보없음'}) / 생년월일: ${selfInfo.birth.year}-${selfInfo.birth.month}-${selfInfo.birth.day} ${selfInfo.birth.hour !== undefined ? `(${selfInfo.birth.hour}시)` : '(시 정보 없음)'}
- 상대: ${partnerInfo.name || '정보없음'} (${partnerInfo.gender || '정보없음'}) / 생년월일: ${partnerInfo.birth.year}-${partnerInfo.birth.month}-${partnerInfo.birth.day} ${partnerInfo.birth.hour !== undefined ? `(${partnerInfo.birth.hour}시)` : '(시 정보 없음)'}

[본인 사주]
- 간지: ${formatGanji(sajuData.self.yearGanji, sajuData.self.monthGanji, sajuData.self.dayGanji, sajuData.self.hourGanji)}
${formatLine('- 성격', sajuData.self.dayStemDesc)}
${formatLine('- 오행 분포', sajuData.self.elementSummary)}
${formatLine('- 강한 오행', sajuData.self.strongElement)}
${formatLine('- 부족한 오행', sajuData.self.weakElement)}
${formatLine('- 일지(배우자 자리)', sajuData.self.spouseHint)}

[상대 사주]
- 간지: ${formatGanji(sajuData.partner.yearGanji, sajuData.partner.monthGanji, sajuData.partner.dayGanji, sajuData.partner.hourGanji)}
${formatLine('- 성격', sajuData.partner.dayStemDesc)}
${formatLine('- 오행 분포', sajuData.partner.elementSummary)}
${formatLine('- 강한 오행', sajuData.partner.strongElement)}
${formatLine('- 부족한 오행', sajuData.partner.weakElement)}
${formatLine('- 일지(배우자 자리)', sajuData.partner.spouseHint)}

[작성 방식 지시사항]
${(extraPrompt || '').trim()}
`.trim()
}
