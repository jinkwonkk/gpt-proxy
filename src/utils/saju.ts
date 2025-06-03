// /utils/saju.ts

export const heavenlyStems = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계']
export const earthlyBranches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해']
const hourBranches = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해']

function getStemIndex(year: number): number {
  return (year - 4) % 10
}

function getBranchIndex(year: number): number {
  return (year - 4) % 12
}

function getHourBranchIndex(hour: number): number {
  return Math.floor((hour + 1) % 24 / 2)
}

export const hourLabelOptions = [
  { hour: -1, label: '시간 모름' },
  { hour: 23, label: '23시~01시 (자시)' },
  { hour: 1, label: '01시~03시 (축시)' },
  { hour: 3, label: '03시~05시 (인시)' },
  { hour: 5, label: '05시~07시 (묘시)' },
  { hour: 7, label: '07시~09시 (진시)' },
  { hour: 9, label: '09시~11시 (사시)' },
  { hour: 11, label: '11시~13시 (오시)' },
  { hour: 13, label: '13시~15시 (미시)' },
  { hour: 15, label: '15시~17시 (신시)' },
  { hour: 17, label: '17시~19시 (유시)' },
  { hour: 19, label: '19시~21시 (술시)' },
  { hour: 21, label: '21시~23시 (해시)' },
]

export function getSaju(date: Date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = isNaN(date.getHours()) ? 0 : date.getHours()

  const yearStemIndex = getStemIndex(year)
  const yearBranchIndex = getBranchIndex(year)
  const yearStem = heavenlyStems[yearStemIndex]
  const yearBranch = earthlyBranches[yearBranchIndex]

  const monthBranch = earthlyBranches[(month + 1) % 12]
  const monthStem = heavenlyStems[(yearStemIndex * 2 + month - 1) % 10]

  const baseDate = new Date(1900, 0, 1)
  const diffDays = Math.floor((date.getTime() - baseDate.getTime()) / (1000 * 60 * 60 * 24))
  const dayStem = heavenlyStems[(diffDays + 0) % 10]
  const dayBranch = earthlyBranches[(diffDays + 0) % 12]

  const hourBranchIndex = getHourBranchIndex(hour)
  const hourBranch = hourBranches[hourBranchIndex]
  const hourStem = heavenlyStems[(heavenlyStems.indexOf(dayStem) * 2 + hourBranchIndex) % 10]

  return {
    year: { stem: yearStem, branch: yearBranch },
    month: { stem: monthStem, branch: monthBranch },
    day: { stem: dayStem, branch: dayBranch },
    hour: { stem: hourStem, branch: hourBranch }
  }
}

export const dailyStemDescription: Record<string, string> = {
  '갑': '올곧고 추진력이 있으며, 지도자 성향을 가졌습니다.',
  '을': '섬세하고 배려심이 많으며, 유연한 성격을 가졌습니다.',
  '병': '활동적이고 에너지가 넘치며, 리더십이 강합니다.',
  '정': '지혜롭고 내면이 강하며, 예술 감각이 뛰어납니다.',
  '무': '책임감이 강하고, 묵직한 신뢰를 주는 성향입니다.',
  '기': '균형감각이 좋고, 조화를 추구하는 타입입니다.',
  '경': '냉철하고 분석적이며, 현실 감각이 뛰어납니다.',
  '신': '총명하고 화려하며, 센스와 감각이 뛰어납니다.',
  '임': '열정이 넘치고 개척정신이 강한 성향입니다.',
  '계': '신중하고 직관이 강하며, 깊은 통찰력을 지녔습니다.'
}

export function getLuckStartAge(
  gender: 'male' | 'female',
  birthYear: number,
  birthMonth: number,
  birthDay: number
): number {
  const heavenlyStems = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계']

  function getStem(year: number) {
    return heavenlyStems[(year - 4) % 10]
  }

  function isYangStem(stem: string) {
    return ['갑', '병', '무', '경', '임'].includes(stem)
  }
  
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay)
  const ipchun = new Date(birthYear, 1, 4) // 2월 4일 기준
  const yearStem = getStem(birthYear)
  const isYangYear = isYangStem(yearStem)

  const isForward = (gender === 'male' && isYangYear) || (gender === 'female' && !isYangYear)

  const diffDays = isForward
    ? Math.floor((birthDate.getTime() - ipchun.getTime()) / (1000 * 60 * 60 * 24))
    : Math.floor((ipchun.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24))

  const rawAge = Math.round(diffDays / 3)

  // ✅ 일의 자리 보정: 74세 → 4세, 86세 → 6세 등
  const adjustedAge = Math.max(1, rawAge % 10)

  return adjustedAge
}





export function getLuckCycle(
  startAge: number,
  startStemIndex: number,
  startBranchIndex: number,
  count: number = 8
): { age: number; stem: string; branch: string }[] {
  const cycles = []
  for (let i = 0; i < count; i++) {
    const age = startAge + i * 10
    const stem = heavenlyStems[(startStemIndex + i) % 10]
    const branch = earthlyBranches[(startBranchIndex + i) % 12]
    cycles.push({ age, stem, branch })
  }
  return cycles
}



export function getDetailedSajuResult(
  name: string,
  gender: string,
  birth: { year: number; month: number; day: number; hour?: number }
): string {
  const date = new Date(birth.year, birth.month - 1, birth.day, birth.hour || 0)
  const saju = getSaju(date)

  const yearGanji = `${saju.year.stem}${saju.year.branch}`
  const monthGanji = `${saju.month.stem}${saju.month.branch}`
  const dayGanji = `${saju.day.stem}${saju.day.branch}`
  const hourGanji = `${saju.hour.stem}${saju.hour.branch}`

  const dayStem = saju.day.stem
  const dayBranch = saju.day.branch
  const dayStemDesc = dailyStemDescription[dayStem] || '성격 정보를 찾을 수 없습니다.'

  const stemElementMap: Record<string, string> = {
    '갑': '목', '을': '목', '병': '화', '정': '화',
    '무': '토', '기': '토', '경': '금', '신': '금',
    '임': '수', '계': '수'
  }

  const branchElementMap: Record<string, string> = {
    '자': '수', '축': '토', '인': '목', '묘': '목',
    '진': '토', '사': '화', '오': '화', '미': '토',
    '신': '금', '유': '금', '술': '토', '해': '수'
  }

  const elements = [
    stemElementMap[saju.year.stem], branchElementMap[saju.year.branch],
    stemElementMap[saju.month.stem], branchElementMap[saju.month.branch],
    stemElementMap[saju.day.stem], branchElementMap[saju.day.branch],
    stemElementMap[saju.hour.stem], branchElementMap[saju.hour.branch]
  ]

  const elementCounts = elements.reduce((acc, el) => {
    if (el) acc[el] = (acc[el] || 0) + 1
    return acc
  }, {} as Record<string, number>)

   const allElements = ['목', '화', '토', '금', '수']
  const missingElements = allElements.filter(el => !elementCounts[el])
  const strongElement = Object.entries(elementCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || '없음'
  const weakElement = missingElements.length > 0 ? missingElements.join(', ') : '없음'

  const spouseHintMap: Record<string, string> = {
    '자': '감정 표현이 서툴지만 애정은 깊습니다.',
    '축': '조용하고 헌신적인 배우자를 만날 수 있어요.',
    '인': '활동적이고 강한 배우자 성향이 있습니다.',
    '묘': '감성적이고 섬세한 배우자와 인연이 있습니다.',
    '진': '현실적이고 책임감 있는 배우자와 잘 맞습니다.',
    '사': '매력 있고 열정적인 사람과 인연이 생깁니다.',
    '오': '인기 많고 낙천적인 배우자 운입니다.',
    '미': '온화하면서도 자신감 있는 배우자와 잘 맞습니다.',
    '신': '이성적인 성향의 배우자와 어울립니다.',
    '유': '세련되고 외유내강한 배우자와 인연이 있습니다.',
    '술': '믿음직스럽고 정 많은 배우자운입니다.',
    '해': '감성적이고 배려 깊은 배우자와 잘 맞습니다.'
  }

  return `
🧑‍🎓 ${birth.year}년생 ${name}님의 사주 정보

📌 명식 구성:
- 연주(년): ${yearGanji}
- 월주(월): ${monthGanji}
- 일주(일): ${dayGanji} (※ 일간 기준 성격)
- 시주(시): ${hourGanji}

🧠 성격 유형 (일간 기준):
- ${dayStem}일간: ${dayStemDesc}

🌿 오행 분포:
- ${Object.entries(elementCounts).map(([el, count]) => `${el}: ${count}개`).join(', ')}

⚖️ 오행 균형 분석:
- 강한 오행: ${strongElement}
- 부족한 오행: ${weakElement}
- 균형 잡힌 삶을 위해 '${weakElement}' 오행의 기운이 도움될 수 있어요.

💑 일지(배우자 자리) 해석:
- ${dayBranch}지: ${spouseHintMap[dayBranch] || '일지 해석 정보를 찾을 수 없습니다.'}

🔮 총평:
${name}님은 ${dayStemDesc} 성향을 바탕으로, ${monthGanji}월의 흐름과 ${hourGanji}시의 기운,
그리고 일지(${dayBranch})가 나타내는 배우자운의 특징이 어우러진 사주입니다.
전체적인 오행 균형과 흐름을 파악하여 인생 방향 설정에 참고해보세요.`
}

export function getElementSummary(counts: Record<string, number>) {
  return ['목', '화', '토', '금', '수']
    .map(el => `${el}: ${counts[el] || 0}개`)
    .join(', ')
}

export function getStrongElement(counts: Record<string, number>) {
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
  return sorted[0]?.[0] || '없음'
}

export function getWeakElement(counts: Record<string, number>) {
  const all = ['목', '화', '토', '금', '수']
  const missing = all.filter(el => !counts[el])
  return missing.join(', ') || '없음'
}
