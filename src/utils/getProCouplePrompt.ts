import { PersonInfo, SajuResult } from '../types/saju'

export function getProCouplePrompt(
  selfInfo: PersonInfo,
  partnerInfo: PersonInfo,
  sajuData: { self: SajuResult; partner: SajuResult },
  extraPrompt?: string
): string {
  return `
당신은 사주 분석 전문가입니다. 다음 두 사람의 사주 명식을 바탕으로 궁합을 매우 상세하고 전문적으로 분석한 리포트를 작성해주세요. 각 항목은 실제 전문가가 설명하듯 논리적 근거와 함께 서술하며, 돈을 낸 고객이 만족할 만큼의 품질을 갖춰야 합니다.

[분석 대상]
- 본인: ${selfInfo.name} (${selfInfo.gender}) / 생년월일: ${selfInfo.birth.year}-${selfInfo.birth.month}-${selfInfo.birth.day} ${selfInfo.birth.hour !== undefined ? `(${selfInfo.birth.hour}시)` : ''}
- 상대: ${partnerInfo.name} (${partnerInfo.gender}) / 생년월일: ${partnerInfo.birth.year}-${partnerInfo.birth.month}-${partnerInfo.birth.day} ${partnerInfo.birth.hour !== undefined ? `(${partnerInfo.birth.hour}시)` : ''}

[본인 사주]
- 간지: ${sajuData.self.yearGanji || '정보없음'} / ${sajuData.self.monthGanji || '정보없음'} / ${sajuData.self.dayGanji || '정보없음'} / ${sajuData.self.hourGanji || '정보없음'}
- 성격: ${sajuData.self.dayStemDesc || '정보없음'}
- 오행분포: ${sajuData.self.elementSummary || '정보없음'}
- 강한 오행: ${sajuData.self.strongElement || '정보없음'}
- 부족한 오행: ${sajuData.self.weakElement || '정보없음'}
- 일지(배우자 자리): ${sajuData.self.spouseHint || '정보없음'}

[상대 사주]
- 간지: ${sajuData.partner.yearGanji || '정보없음'} / ${sajuData.partner.monthGanji || '정보없음'} / ${sajuData.partner.dayGanji || '정보없음'} / ${sajuData.partner.hourGanji || '정보없음'}
- 성격: ${sajuData.partner.dayStemDesc || '정보없음'}
- 오행분포: ${sajuData.partner.elementSummary || '정보없음'}
- 강한 오행: ${sajuData.partner.strongElement || '정보없음'}
- 부족한 오행: ${sajuData.partner.weakElement || '정보없음'}
- 일지(배우자 자리): ${sajuData.partner.spouseHint || '정보없음'}

[작성 방식 지시사항]
${extraPrompt?.trim() || ''}
`.trim()
}