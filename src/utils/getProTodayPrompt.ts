// src/utils/getProTodayPrompt.ts

export interface TodayInfo {
  name: string;
  gender: 'male' | 'female';
  birth: {
    year: number;
    month: number;
    day: number;
    hour?: number;
  };
  today: string; // YYYY-MM-DD 형식의 날짜 문자열
  saju: {
    year: { stem: string; branch: string };
    month: { stem: string; branch: string };
    day: { stem: string; branch: string };
    hour: { stem: string; branch: string };
    elementCounts: Record<string, number>;
    strongElement: string;
    weakElement: string;
  };
}

export function getProTodayPrompt(info: TodayInfo): string {
  const { name, gender, birth, today, saju } = info;
  const { year, month, day, hour, elementCounts, strongElement, weakElement } = saju;
  const currentYear = new Date().getFullYear();

  return `
당신은 ${birth.year}년생 ${name}님입니다.

오늘은 ${today} (${currentYear}년 기준)이며, 사주 명식은 다음과 같습니다:
- 연주: ${year.stem}${year.branch}
- 월주: ${month.stem}${month.branch}
- 일주: ${day.stem}${day.branch}
- 시주: ${hour.stem}${hour.branch}

오행 분포는 다음과 같습니다:
${Object.entries(elementCounts).map(([k, v]) => `- ${k}: ${v}개`).join('\n')}
강한 오행은 ${strongElement}, 약한 오행은 ${weakElement}입니다.

위 정보를 바탕으로, 오늘 하루의 운세를 다음 항목에 따라 상세하게 분석해주세요:
1. 오늘의 총운 (전반적 기운과 흐름 요약)
2. 애정운 (연애 기회, 인간관계 흐름)
3. 금전운 (수익/지출 운, 재정 관련 주의점)
4. 직업운 (일 운세, 집중력/성과 여부)
5. 대인관계 (갈등 유무, 조심할 인간 유형)
6. 건강운 (컨디션, 피해야 할 활동 등)
7. 행운 요소 (오늘의 행운 색상, 숫자, 아이템 등)
8. 조심해야 할 점 (실수, 오해, 충돌 등)
9. 오늘의 조언 한마디 (현명한 하루를 위한 격려 또는 조언)

당신은 사주 분석 전문가입니다. 사주 명식을 바탕으로 오늘의 운세를를 매우 상세하고 전문적으로 분석한 리포트를 작성해주세요. 각 항목은 실제 전문가가 설명하듯 논리적 근거와 함께 서술하며, 돈을 낸 고객이 만족할 만큼의 품질을 갖춰야 합니다.

명확한 정보가 부족하더라도, 현재 제공된 사주 명식 기반으로 최선을 다해 분석하세요. 
❗ '정보 부족' 또는 '알 수 없다'는 표현은 절대 사용하지 마세요.
`;
}
