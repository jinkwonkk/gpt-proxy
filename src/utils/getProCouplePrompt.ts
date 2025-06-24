import { PersonInfo, SajuResult } from '../types/saju'
import { couplePromptTexts, couplePromptHeaders } from '@/i18n/promptLabels'

export function getProCouplePrompt(
  selfInfo: PersonInfo,
  partnerInfo: PersonInfo,
  sajuData: { self: SajuResult; partner: SajuResult },
  sectionIndex: number,
  lang: keyof typeof couplePromptTexts
): string {
  const headers = couplePromptHeaders[lang] ?? couplePromptHeaders['ko']
  const formatGanji = (year?: string, month?: string, day?: string, hour?: string) =>
    [year, month, day, hour].filter(Boolean).join(' / ') || headers.labels.none

  const formatLine = (label: string, value?: string) =>
    `${label}: ${value?.trim() || headers.labels.na}`

  const currentYear = new Date().getFullYear()
  const sectionKeys = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'] as const
  const selectedKey = sectionKeys[sectionIndex] || 'section1'
  const sectionPrompt = couplePromptTexts[lang]?.[selectedKey] || ''

  return `
${headers.intro.replace('{year}', currentYear.toString())}

${headers.labels.analysisTarget}
- ${headers.labels.self}: ${selfInfo.name || headers.labels.none} (${selfInfo.gender || headers.labels.none}) / ${headers.labels.birth}: ${selfInfo.birth.year}-${selfInfo.birth.month}-${selfInfo.birth.day} ${selfInfo.birth.hour !== undefined ? `(${selfInfo.birth.hour}시)` : `(${headers.labels.noHour})`}
- ${headers.labels.partner}: ${partnerInfo.name || headers.labels.none} (${partnerInfo.gender || headers.labels.none}) / ${headers.labels.birth}: ${partnerInfo.birth.year}-${partnerInfo.birth.month}-${partnerInfo.birth.day} ${partnerInfo.birth.hour !== undefined ? `(${partnerInfo.birth.hour}시)` : `(${headers.labels.noHour})`}

${headers.labels.selfInfo}
- ${headers.labels.ganji}: ${formatGanji(sajuData.self.yearGanji, sajuData.self.monthGanji, sajuData.self.dayGanji, sajuData.self.hourGanji)}
${formatLine(headers.labels.personality, sajuData.self.dayStemDesc)}
${formatLine(headers.labels.elementSummary, sajuData.self.elementSummary)}
${formatLine(headers.labels.strongElement, sajuData.self.strongElement)}
${formatLine(headers.labels.weakElement, sajuData.self.weakElement)}
${formatLine(headers.labels.spouseHint, sajuData.self.spouseHint)}

${headers.labels.partnerInfo}
- ${headers.labels.ganji}: ${formatGanji(sajuData.partner.yearGanji, sajuData.partner.monthGanji, sajuData.partner.dayGanji, sajuData.partner.hourGanji)}
${formatLine(headers.labels.personality, sajuData.partner.dayStemDesc)}
${formatLine(headers.labels.elementSummary, sajuData.partner.elementSummary)}
${formatLine(headers.labels.strongElement, sajuData.partner.strongElement)}
${formatLine(headers.labels.weakElement, sajuData.partner.weakElement)}
${formatLine(headers.labels.spouseHint, sajuData.partner.spouseHint)}

${headers.labels.instructions}
${sectionPrompt}
`.trim()
}

