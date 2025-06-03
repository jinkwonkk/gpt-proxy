import { PersonInfo, SajuResult } from '../types/saju'

export function getProCouplePrompt(
  selfInfo: PersonInfo,
  partnerInfo: PersonInfo,
  sajuData: { self: SajuResult; partner: SajuResult }
): string {
  return `
당신은 사주 분석 전문가입니다. 다음 두 사람의 사주 명식을 바탕으로 궁합을 매우 상세하고 전문적으로 분석한 리포트를 작성해주세요. 각 항목은 실제 전문가가 설명하듯 논리적 근거와 함께 서술하며, 돈을 낸 고객이 만족할 만큼의 품질을 갖춰야 합니다.

[분석 대상]
- 본인: ${selfInfo.name} (${selfInfo.gender}) / 생년월일: ${selfInfo.birth.year}-${selfInfo.birth.month}-${selfInfo.birth.day} ${selfInfo.birth.hour !== undefined ? `(${selfInfo.birth.hour}시)` : ''}
- 상대: ${partnerInfo.name} (${partnerInfo.gender}) / 생년월일: ${partnerInfo.birth.year}-${partnerInfo.birth.month}-${partnerInfo.birth.day} ${partnerInfo.birth.hour !== undefined ? `(${partnerInfo.birth.hour}시)` : ''}

[본인 사주]
- 간지: ${sajuData.self.yearGanji} / ${sajuData.self.monthGanji} / ${sajuData.self.dayGanji} / ${sajuData.self.hourGanji}
- 성격: ${sajuData.self.dayStemDesc}
- 오행분포: ${sajuData.self.elementSummary}
- 강한 오행: ${sajuData.self.strongElement}
- 부족한 오행: ${sajuData.self.weakElement}
- 일지(배우자 자리): ${sajuData.self.spouseHint}

[상대 사주]
- 간지: ${sajuData.partner.yearGanji} / ${sajuData.partner.monthGanji} / ${sajuData.partner.dayGanji} / ${sajuData.partner.hourGanji}
- 성격: ${sajuData.partner.dayStemDesc}
- 오행분포: ${sajuData.partner.elementSummary}
- 강한 오행: ${sajuData.partner.strongElement}
- 부족한 오행: ${sajuData.partner.weakElement}
- 일지(배우자 자리): ${sajuData.partner.spouseHint}

[작성 방식 지시사항]
아래 항목을 각 제목으로 구분하여 작성하고, 모든 항목은 한두 문장이 아니라 상세하고 설득력 있게 설명하세요.

1. 성격 궁합 분석 (성격 유사점/차이점, 갈등 유발 요소)
2. 오행 궁합 분석 (상생/상극, 오행 균형성)
3. 일간 관계 분석 (극·생·합 여부, 주고받는 기운)
4. 일지 상성 분석 (배우자 자리에 따른 상호 영향)
5. 월지 관계 분석 (정서적/생활궁합 요소 중심)
6. 커뮤니케이션 스타일 분석 (감정 표현/이해력 등)
7. 이성적 매력 요소와 인연 시기
8. 갈등 시 대처방식 및 조화 방법
9. 종합 궁합 점수 및 등급 평가 (예: 87점 – 매우 좋은 궁합)
10. 현실적인 연애/결혼 조언 및 유의사항

결과는 마치 전문가가 상담해주는 것처럼 진정성 있고 논리적인 톤으로 작성하세요.
  `.trim()
}
