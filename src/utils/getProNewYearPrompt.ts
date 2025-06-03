import type { NewYearInfo } from '../types/saju'

export function getProNewYearPrompt(info: NewYearInfo): string {
  const { name, gender, birth, year, saju } = info
  const { year: y, month, day, hour, elementCounts, strongElement, weakElement } = saju

  return `
당신은 ${birth.year}년생 ${name}님이며, 조회 연도는 ${year}년입니다.

사주 명식:
- 연주: ${y.stem}${y.branch}
- 월주: ${month.stem}${month.branch}
- 일주: ${day.stem}${day.branch}
- 시주: ${hour.stem}${hour.branch}

오행 분포:
${Object.entries(elementCounts).map(([k, v]) => `- ${k}: ${v}개`).join('\n')}
강한 오행: ${strongElement}, 약한 오행: ${weakElement}

위 정보를 바탕으로 아래 항목에 따라 **${year}년 신년 운세**를 상세하게 분석해주세요:

1. 📌 올해의 전체 기운 및 운세 총론 (기본 분위기, 전반적 흐름)
2. ⬆️ 상반기 운세 흐름 / ⬇️ 하반기 운세 흐름
3. 💘 애정운 (연애운, 부부관계, 새로운 인연, 다툼/화합)
4. 💰 금전운 (재물 흐름, 지출 경향, 투자 적기 여부)
5. 💼 직업운 및 진로 변화 가능성 (승진, 전직, 시험 등)
6. 👥 대인운 (귀인운, 인간관계 충돌 여부 등)
7. 🩺 건강운 (올해 주의할 신체 부위, 체력 변화 등)
8. ⚠️ 신년 조언 및 유의사항 (조심할 상황, 좋은 기회 시기 등)
9. 🧩 올해의 키워드 3개 제시 (요약용)

각 항목은 세세하게게 **전문적이고 신뢰감 있게**, 구체적인 예시와 조언을 포함해 설명해주세요.
자연스럽고 설득력 있는 리포트 스타일로 구성해 주세요.
`.trim()
}
