
import { promptAliasMap, promptTexts } from '@/i18n/promptLabels'
// ✅ 타입 정의
export type PromptInput = {
  userName: string
  gender: string
  birth: { year: number; month: number; day: number; hour?: number }
  saju: any
  item?: string // 선택 항목별 호출 시 사용
  lang?: 'ko' | 'en' | 'ja' | 'es' // ✅ 추가
}

// ✅ 외부에서 가져올 라벨 및 프롬프트



// ✅ 사주 기본 정보 문자열
function getBaseInfo(input: PromptInput) {
  const { userName, gender, birth, saju } = input
  const currentYear = new Date().getFullYear()
  return `
📅 현재 연도: ${currentYear}년
이름: ${userName}
성별: ${gender}
생년월일: ${birth.year}-${birth.month}-${birth.day} ${birth.hour ?? '시간 정보 없음'}
사주 명식: ${JSON.stringify(saju)}
  `.trim()
}

// ✅ 기본 사주 리포트
export function getBaseSajuPrompt(input: PromptInput): string {
  return `
🔮 아래는 사용자의 사주 정보입니다.

${getBaseInfo(input)}

---

📌 기본 사주 리포트 (전문가 작성)

당신은 대한민국 최고의 사주 분석 전문가입니다. 아래 사주 명식을 바탕으로 고객의 전체적인 사주팔자를 다음 항목에 따라 논리적으로 분석한 리포트를 작성해주세요. 문단마다 제목을 붙이고, 각 해석은 실제 상담 리포트처럼 자세하고 이해하기 쉽게 구성하세요. 돈을 지불한 고객이 충분히 만족할 수 있어야 합니다.

❗ 반드시 포함해야 할 항목:
1. 전체적인 인생 기운의 흐름 요약
2. 성격 및 기본 성향 분석 (일간 중심)
3. 오행 분포 해석 및 강/약한 요소
4. 인생의 주요 전환점 시기
5. 사주의 강점과 약점
6. 주의할 시기 또는 반복되는 패턴
7. 고객에게 꼭 필요한 조언

❗ '정보 부족', '알 수 없음' 같은 말은 절대 하지 마세요. 사주 명식을 최대한 활용해 유의미한 해석을 해주세요.
  `.trim()
}

// ✅ 선택 항목 리포트
export function getItemSajuPrompt(input: PromptInput): string {
  const { item } = input
  if (!item) return ''

  const resolved = promptAliasMap[item] || item
  const lang: 'ko' | 'en' | 'ja' | 'es' = input.lang ?? 'ko' // 🔒 타입 보장

  const report = promptTexts[resolved]?.[lang]
  if (!report) return ''


  return `
🔮 아래는 사용자의 사주 정보입니다.

${getBaseInfo(input)}

---

${report}
  `.trim()
}
