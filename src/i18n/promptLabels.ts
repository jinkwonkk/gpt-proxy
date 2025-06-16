//src/i18n/promptLabels.ts

export const promptAliasMap: Record<string, string> = {
  '연애운': '연애운 / 사랑운',
  '사랑운': '연애운 / 사랑운',
  '금전운': '재물운 / 금전운',
  '재물운': '재물운 / 금전운',
  '대인운': '인간관계 / 대인운',
  '인연운': '전생 / 인연운',
  '시험운': '학업운 / 시험운',
  '학업운': '학업운 / 시험운',
  '귀인': '귀인운',
  '종합': '종합운',
  '이사운': '이사 / 이동운',
  '이동운': '이사 / 이동운',
  '대운 흐름': '시기운 / 대운 흐름',
}

export const promptLabels: Record<string, Record<'ko' | 'en' | 'ja' | 'es', string>> = {
  '연애운 / 사랑운': {
    ko: '연애운 / 사랑운',
    en: 'Love & Romance',
    ja: '恋愛運・愛情運',
    es: 'Amor y Romance'
  },
  '재물운 / 금전운': {
    ko: '재물운 / 금전운',
    en: 'Wealth & Finances',
    ja: '財運・金運',
    es: 'Riqueza y Finanzas'
  },
  '직업운': {
    ko: '직업운',
    en: 'Career & Job',
    ja: '職業運',
    es: 'Carrera y Trabajo'
  },
  '건강운': {
    ko: '건강운',
    en: 'Health',
    ja: '健康運',
    es: 'Salud'
  },
  '결혼운': {
    ko: '결혼운',
    en: 'Marriage',
    ja: '結婚運',
    es: 'Matrimonio'
  },
  '인간관계 / 대인운': {
    ko: '인간관계 / 대인운',
    en: 'Relationships',
    ja: '対人関係運',
    es: 'Relaciones'
  },
  '전생 / 인연운': {
    ko: '전생 / 인연운',
    en: 'Past Life & Destiny',
    ja: '前世・縁の運命',
    es: 'Vidas Pasadas y Destino'
  },
  '학업운 / 시험운': {
    ko: '학업운 / 시험운',
    en: 'Study & Exams',
    ja: '学業運・試験運',
    es: 'Estudios y Exámenes'
  },
  '시기운 / 대운 흐름': {
    ko: '시기운 / 대운 흐름',
    en: 'Timing & Luck Cycle',
    ja: '時期運・大運の流れ',
    es: 'Ciclos de Suerte y Épocas'
  },
  '미래 핵심 조언': {
    ko: '미래 핵심 조언',
    en: 'Future Advice',
    ja: '未来のアドバイス',
    es: 'Consejos para el Futuro'
  },
  '이사 / 이동운': {
    ko: '이사 / 이동운',
    en: 'Moving & Relocation',
    ja: '引越し・移動運',
    es: 'Mudanzas y Traslados'
  },
  '귀인운': {
    ko: '귀인운',
    en: 'Helpful People',
    ja: '貴人運',
    es: 'Personas Benefactoras'
  },
  '사업운': {
    ko: '사업운',
    en: 'Business',
    ja: '事業運',
    es: 'Negocios'
  },
  '종합운': {
    ko: '종합운',
    en: 'General Luck',
    ja: '総合運',
    es: 'Suerte General'
  },
  '이직운': {
    ko: '이직운',
    en: 'Job Change',
    ja: '転職運',
    es: 'Cambio de Trabajo'
  },
  '가족운': {
    ko: '가족운',
    en: 'Family',
    ja: '家族運',
    es: 'Familia'
  }

}
