// ✅ src/i18n/promptLabels.ts

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

export {}

export const promptTexts: Record<string, Record<'ko' | 'en' | 'ja' | 'es', string>> = {
'직업운': {
  ko: `
📌 직업운 전문 리포트 (고객 맞춤형 분석)

당신은 대한민국 최고의 사주 전문가입니다. 아래 사주 명식을 바탕으로 고객의 직업운과 진로 방향을 상담 리포트 형식으로 정밀하게 분석해주세요. 각 항목은 제목을 붙이고, 실제 컨설팅처럼 구체적이고 직관적인 조언을 포함해야 합니다.

❗ 분석 항목:
1. 사주상 드러나는 직업적 성향과 타고난 재능
2. 고객에게 가장 어울리는 직업 분야 및 일 스타일
3. 진로 변경 또는 이직 가능성과 그 최적 시기
4. 직장 내 인간관계에서 주의해야 할 특성과 문제점
5. 향후 1~3년간 직업운 흐름과 주의/기회 시기
6. 성공적인 직업 생활을 위한 구체적인 행동 조언

❗ '정보 부족', '단정할 수 없음'과 같은 문구는 금지하며, 주어진 사주 정보를 바탕으로 최대한 설득력 있는 분석을 제공해주세요.`,

  en: `
📌 Career Fortune Report (Tailored Professional Analysis)

You are Korea’s leading saju expert. Based on the user's saju chart below, provide a detailed career analysis in the format of a paid consultation report. Include section titles and actionable advice in each part.

❗ Topics to analyze:
1. Vocational tendencies and inborn strengths in the saju
2. Best-matched career fields and working style
3. Career change potential and optimal timing
4. Issues and characteristics in workplace relationships
5. Forecast of career fortune over the next 1–3 years
6. Concrete guidance for a successful career path

❗ Do not say "lack of data" — provide meaningful analysis using all available saju components.`,

  ja: `
📌 職業運レポート（専門鑑定形式）

あなたは韓国を代表する四柱推命の専門家です。以下の命式に基づき、顧客の職業運を有料鑑定レポートとして詳しく分析してください。各項目には見出しを付け、具体的かつ実践的な助言を盛り込んでください。

❗ 分析項目:
1. 命式に表れる職業的な傾向と先天的な才能
2. 顧客に最適な職業分野と働き方のスタイル
3. 転職・キャリア変更の可能性とその適切な時期
4. 職場で注意すべき人間関係の特徴と課題
5. 今後1〜3年間の職業運の流れとチャンス・注意点
6. 成功する職業人生のための具体的なアドバイス

❗ 「情報不足」などの曖昧な表現は禁止し、命式に基づく説得力ある分析をしてください。`,

  es: `
📌 Informe de Fortuna Profesional (Análisis Experto Personalizado)

Eres el mejor intérprete de saju en Corea. Con base en la carta natal del usuario, elabora un informe profesional sobre su fortuna laboral, como si fuera una consulta pagada. Incluye títulos claros y consejos prácticos en cada sección.

❗ Aspectos a analizar:
1. Tendencias vocacionales y talentos innatos según el saju
2. Ámbitos laborales más adecuados y estilo de trabajo
3. Posibilidad de cambio de carrera y mejor momento para ello
4. Aspectos a tener en cuenta en las relaciones laborales
5. Predicción de la fortuna profesional en los próximos 1–3 años
6. Consejos concretos para lograr el éxito profesional

❗ No uses frases como "falta de información". Aprovecha al máximo la carta natal para ofrecer un análisis profundo.`,
},

'재물운 / 금전운': {
  ko: `📌 재물운 리포트 (전문가 작성)

당신은 최고의 사주 전문가입니다. 아래 명식을 바탕으로 고객의 금전운과 재정적 흐름에 대해 다음 항목에 따라 분석 리포트를 작성하세요. 단순한 요약이 아닌 실제 재무 상담처럼 구체적이고 실질적인 조언을 포함해야 합니다.

1. 사주상 돈의 흐름과 재물복 여부 (일지, 월지, 편재/정재/식신 등 분석)
2. 지출과 수입의 균형: 재정 관리에서 강점과 주의점
3. 재산 증가 가능성: 투자, 부수입, 창업 등 어떤 방식이 유리한가
4. 향후 1~3년간 재물운의 변화 시기와 대응 전략
5. 고객에게 꼭 필요한 금전 관련 조언과 주의사항

❗ 반드시 사주 명식 기반으로 논리적으로 분석하고, "정보 부족" 등은 언급하지 마세요.`,
  
  en: `📌 Wealth Fortune Report (Expert Generated)

As a professional saju analyst, analyze the user's financial fortune based on the chart below. This is a paid financial consultation, so provide detailed and practical insight using the following structure:

1. Money flow and wealth potential (based on day/month branch, presence of 財/食神, etc.)
2. Balance of income vs. expenses: strengths and risk points
3. Chances for wealth growth: investments, side gigs, or self-employment
4. Financial fortune transitions over the next 1–3 years and what to prepare
5. Key financial advice tailored to the user's saju

❗ Do not mention “lack of information.” Use all saju elements to derive meaningful insights.`,
  
  ja: `📌 金運レポート（専門家による分析）

あなたは一流の四柱推命専門家です。命式をもとに顧客の財運について、以下の観点から詳細かつ実用的な鑑定レポートを作成してください。

1. 命式における金銭の流れや財運（財星・食神・日支・月支の分析）
2. 収入と支出のバランス：強みと注意点
3. 資産を増やす可能性：投資、副業、起業などどの道が良いか
4. 今後1～3年の金運の変化と準備すべきこと
5. 顧客に向けた金銭面のアドバイスと警告

❗「情報不足」などの表現は禁止し、命式を最大限に活用してください。`,
  
  es: `📌 Informe de Fortuna Financiera (Nivel Experto)

Eres un experto en interpretación de saju. Utiliza la carta natal para analizar la suerte financiera del cliente de forma detallada y útil, siguiendo esta estructura:

1. Flujo del dinero y presencia de riqueza (elementos como 財 o 食神)
2. Balance entre ingresos y gastos: fortalezas y riesgos
3. Posibilidades de aumentar el patrimonio: inversiones, ingresos adicionales, emprendimientos
4. Cambios esperados en la fortuna financiera (1-3 años) y cómo prepararse
5. Consejos clave para el manejo del dinero según su saju

❗ No menciones "información insuficiente", utiliza todos los datos del saju.`
},
'연애운 / 사랑운': {
  ko: `📌 연애운 리포트 (전문가 작성)

당신은 연애운 전문 사주 분석가입니다. 고객의 명식을 바탕으로 감정적 흐름과 연애 관련 특성을 다음 항목에 따라 자세히 해석하고, 실질적인 조언을 포함하세요.

1. 현재 연애 기운과 감정 흐름 (일지, 시지, 오행의 균형 등 분석)
2. 이상적인 인연 시기 및 해당 시기에 나타날 수 있는 사람의 특징
3. 연애 스타일과 성향: 고객이 사랑을 표현하고 받는 방식
4. 궁합 맞는 유형과 다툼 시 대처 방식
5. 올해 또는 가까운 시기의 최적 연애 타이밍 및 주의할 점

❗ 사주 기반의 구체적인 언어와 예시를 활용해 설득력 있게 작성하세요.`,
  
  en: `📌 Love and Relationship Report (Expert Generated)

You are a professional saju consultant specializing in love and romance. Based on the user's chart, analyze the following in detail, with actionable insights:

1. Current romantic energy and emotional state (focus on day/hour branch, element balance)
2. Ideal timing for love and traits of likely partners
3. Romantic style: how the user expresses and receives affection
4. Compatible partner types and managing conflict
5. Best periods for romance this year and cautionary advice

❗ Avoid vague language. Use specific saju traits and examples for a convincing result.`,
  
  ja: `📌 恋愛運レポート（専門家による分析）

あなたは恋愛専門の四柱推命鑑定士です。以下の観点から命式を詳しく分析し、顧客の恋愛運について実用的なアドバイスを提供してください。

1. 現在の恋愛エネルギーと感情の状態（日支・時支・五行のバランス）
2. 良縁のタイミングと出会う可能性のある人物像
3. 恋愛傾向：どのように愛を表現し、受け取るか
4. 相性の良い相手と衝突時の対処法
5. 今年または近い時期の最適な恋愛タイミングと注意点

❗ 曖昧な表現は避け、具体的かつ説得力のある鑑定を行ってください。`,
  
  es: `📌 Informe de Amor y Relaciones (Hecho por un Experto)

Eres un experto en saju centrado en temas románticos. Usa la carta natal del cliente para analizar estos aspectos con detalle:

1. Estado emocional actual y energía romántica (elementos, día/hora)
2. Momento ideal para el amor y tipos de personas que pueden aparecer
3. Estilo romántico: cómo ama y cómo le gusta ser amado
4. Compatibilidad y cómo enfrentar conflictos
5. Mejores momentos para el amor este año y advertencias

❗ Usa lenguaje claro, ejemplos saju específicos y evita respuestas vagas.`
},

'건강운': {
  ko: `📌 건강운 전문가 보고서

당신은 사주 명식을 기반으로 건강 상태를 심도 있게 분석하는 전문가입니다. 고객의 체질, 건강 이력, 정신적 스트레스 경향, 사주 흐름 등을 종합하여 다음 내용을 전문 리포트 형식으로 작성해주세요.

1. 사주에서 드러나는 체질과 건강상 취약 부위
2. 반복되기 쉬운 질병 또는 만성질환의 가능성
3. 연령대 및 특정 시기에 건강 유의 필요성
4. 정신적 건강, 감정 기복, 스트레스 민감도 등
5. 식습관, 운동 습관에 대한 조언 및 교정 방향
6. 건강 회복 운 또는 체력 상승 시기의 흐름
7. 병원 진료, 건강검진, 수술 등 결정이 필요한 시점
8. 전체적인 건강유지 및 장기적 관리 전략`,
  
  en: `📌 Expert Health Report

As a professional in saju-based health analysis, provide an in-depth report covering the individual's constitution, potential health risks, and timing of issues. Include the following sections:

1. Physical constitution and vulnerable body parts shown in the saju
2. Potential for chronic or recurring illnesses
3. Time periods requiring health caution (age or seasonal)
4. Mental health, emotional stability, and stress sensitivity
5. Advice on diet and exercise tailored to their saju
6. Periods of health recovery or vitality improvement
7. Timing for medical treatments or surgical decisions
8. Long-term strategies to maintain and improve overall health`,

  ja: `📌 健康運・専門家レポート

あなたは四柱推命に基づいた健康分析の専門家です。体質、病気の傾向、ストレス耐性、健康の運勢の流れを総合的に分析し、以下の内容を詳しく記述してください。

1. 命式から見える体質と弱点の部位
2. 慢性病または繰り返し起きる病気の可能性
3. 年齢や季節ごとの注意すべき時期
4. 精神的健康・感情の浮き沈み・ストレス傾向
5. 食生活・運動習慣に関する改善アドバイス
6. 健康運が回復・上昇する時期の流れ
7. 医療・検診・手術などの決断時期
8. 長期的な健康維持と改善のための戦略`,

  es: `📌 Informe de Salud Profesional

Como experto en análisis de salud según el saju, redacta un informe detallado incluyendo:

1. Constitución física y áreas vulnerables según el saju
2. Riesgo de enfermedades crónicas o recurrentes
3. Períodos de cuidado por edad o estación
4. Salud mental, estabilidad emocional y sensibilidad al estrés
5. Recomendaciones de dieta y ejercicio según el perfil
6. Épocas de recuperación o mejora en la salud
7. Momentos ideales para tratamientos médicos o cirugías
8. Estrategias de mantenimiento y mejora de la salud a largo plazo`
},

 '결혼운': {
  ko: `📌 결혼운 전문가 보고서

사주 명식을 바탕으로 고객의 결혼관, 이상적인 배우자상, 결혼 시기, 결혼 생활에서 주의할 점 등을 분석하는 전문가입니다. 다음 항목을 포함하여 실제 상담 보고서처럼 구성해주세요.

1. 결혼에 대한 성향, 가치관, 태도
2. 결혼 적령기 및 실제 결혼 가능 시기
3. 결혼 생활에서 예상되는 강점과 약점
4. 배우자와의 갈등 가능성 및 대처 전략
5. 사주상 만날 가능성이 높은 배우자 유형 (성격, 직업, 인상 등)
6. 결혼 후 운세 흐름의 긍정/부정적 변화
7. 결혼 전 반드시 고려해야 할 조언
8. 재혼 또는 늦은 결혼의 유리/불리 여부와 조언`,

  en: `📌 Expert Marriage Report

Based on the saju chart, write a detailed consultation report analyzing the user’s attitude toward marriage, ideal partner type, timing, and compatibility. Include:

1. Views, values, and tendencies regarding marriage
2. Ideal and realistic timing for marriage
3. Expected strengths and weaknesses in married life
4. Potential conflicts and conflict resolution strategies
5. Likely spouse characteristics (personality, job, appearance)
6. Positive or negative changes in luck after marriage
7. Crucial advice before entering marriage
8. Pros and cons of remarriage or late marriage`,

  ja: `📌 結婚運・専門家レポート

あなたは四柱推命の命式から結婚運を深く分析する専門家です。結婚観、理想の相手、結婚時期、相性などを含むレポートを作成してください。

1. 結婚に対する価値観や姿勢
2. 理想的かつ現実的な結婚の時期
3. 結婚生活での長所と短所
4. 配偶者との衝突の可能性と対応法
5. 出会いやすい相手の特徴（性格、職業、外見など）
6. 結婚後の運勢の変化（良し悪し含め）
7. 結婚前に必要なアドバイス
8. 再婚や晩婚の有利・不利に関する考察`,

  es: `📌 Informe Matrimonial Profesional

Con base en el saju, redacta un informe detallado sobre actitudes hacia el matrimonio, pareja ideal, momentos adecuados y compatibilidad. Incluye:

1. Actitudes y valores sobre el matrimonio
2. Edad y momento adecuado para casarse
3. Fortalezas y debilidades en la vida matrimonial
4. Conflictos posibles y cómo manejarlos
5. Características probables de la pareja (personalidad, ocupación, etc.)
6. Cambios en la suerte después del matrimonio
7. Consejos clave antes de casarse
8. Consideraciones sobre el matrimonio tardío o segundo matrimonio`
},
'인간관계 / 대인운': {
  ko: `📌 대인운 전문가 보고서

사주를 기반으로 고객의 인간관계 성향, 관계에서 생기는 문제 유형, 인복의 흐름 등을 분석하여 실질적인 조언을 제공하세요. 다음 항목을 포함하여 상담 보고서 형식으로 작성해주세요.

1. 사주상 나타나는 성격과 대인관계 성향 (외향/내향, 적극/소극 등)
2. 궁합이 잘 맞는 사람 유형과 거리 두어야 할 유형
3. 친구, 직장 동료, 사회적 관계에서의 상호작용 스타일
4. 갈등이 자주 발생하는 상황 및 원인
5. 인간관계 운이 상승하는 시기
6. 사람을 통한 기회, 도움, 귀인의 가능성
7. 인복의 강약과 그 배경에 대한 분석
8. 좋은 인연을 끌어들이기 위한 실천적 행동 조언`,

  en: `📌 Expert Relationship Report

As a social dynamics analyst based on saju, write a personalized report on the user's interpersonal tendencies and luck in relationships. Include:

1. Personality traits affecting social interactions (extrovert/introvert, active/passive)
2. Ideal and problematic types of people to interact with
3. Style of communication in friendships and workplaces
4. Common conflict situations and underlying causes
5. Periods of strong relationship or popularity fortune
6. Potential for support or opportunities through people
7. Strength and source of social luck (inbok)
8. Practical steps to build and attract valuable connections`,

  ja: `📌 対人運・専門家レポート

命式から見た人間関係の傾向、トラブルの原因、対人運の流れを分析し、実際のアドバイスを含めてレポートしてください。

1. 外向性/内向性、積極性/消極性などの対人傾向
2. 相性の良い人と距離を置くべき人の特徴
3. 友人・同僚との交流スタイル
4. トラブルが生じやすい場面と原因
5. 対人運や人気運が高まる時期
6. 人間関係から得られるチャンス・支援の可能性
7. 人間関係の運の強弱とその背景
8. 良縁を引き寄せるための実践的アドバイス`,

  es: `📌 Informe Profesional de Relaciones

Con base en el saju, elabora un informe personalizado sobre tendencias sociales, conflictos y suerte en relaciones. Incluye:

1. Rasgos sociales (extrovertido/introvertido, activo/pasivo)
2. Tipos de personas compatibles o conflictivas
3. Estilo de relación en amigos y colegas
4. Situaciones comunes de conflicto y causas
5. Momentos de suerte en relaciones o popularidad
6. Oportunidades a través de relaciones personales
7. Análisis de la fortuna social (inbok)
8. Consejos prácticos para atraer buenas conexiones`
},

'전생 / 인연운': {
  ko: `📌 전생·인연 리포트 (전문가 작성)
당신은 최고의 사주 전문가입니다. 아래 항목에 따라 고객의 전생 기질, 인연 운, 카르마적 흐름 등을 논리적으로 분석해 주세요. 환상적이거나 신비주의적인 표현보다는, 사주 명식에 기반한 해석으로 설득력 있게 설명합니다.

1. 사주에서 유추할 수 있는 전생의 성격, 기질, 삶의 테마
2. 이번 생에서 전생과 이어졌을 가능성이 있는 인연 유형
3. 반복될 수 있는 전생의 과업 또는 미해결 과제
4. 이번 생에서 만나게 될 카르마적 관계와 주의점
5. 운명적 인연의 존재 여부와 성격적 특징
6. 인연을 만나기 전 나타나는 사소한 징조들
7. 전생에서 미처 완성하지 못한 과제의 영향
8. 이번 생에서 인연을 완성하고 카르마를 정화할 수 있는 방향과 실천 조언`,

  en: `📌 Past Life & Soulmate Report (Expert Analysis)
As a professional saju analyst, interpret the client’s karmic path and relationship destiny with logic and clarity. Avoid vague or mystical claims; focus on what can be inferred directly from the saju chart.

1. Past life personality, tendencies, and themes inferred from saju
2. Possible soulmate or karmic ties continuing into this life
3. Repetitive life tasks or unresolved missions from the past
4. Karmic relationships in this life and how to manage them
5. Potential for destined or fateful encounters and their nature
6. Subtle signs or patterns before meeting such fated people
7. Lingering influence of unfinished past life issues
8. How to fulfill karmic connections and cleanse destiny in this lifetime`,

  ja: `📌 前世・縁運リポート（専門家による分析）
四柱推命に基づいて、前世の傾向やカルマ的な縁について論理的に解釈してください。神秘的な表現は避け、命式に根ざした現実的で納得感のある説明を行ってください。

1. 命式から読み取れる前世の性格・テーマ
2. 今世で再び出会う可能性のあるカルマ的縁
3. 前世から引き継いだ課題や未解決の問題
4. カルマ的関係における注意点や特徴
5. 宿命的な出会いの可能性とその性質
6. そうした人物と出会う前に起こる兆候
7. 前世で完了しなかった影響と今への影響
8. 今世で縁を完成させるための実践的アドバイス`,

  es: `📌 Informe de Vidas Pasadas y Destino (Análisis Profesional)
Como experto en saju, analiza el camino kármico y los vínculos del destino del cliente de forma lógica y fundamentada. Evita afirmaciones vagas o místicas y enfócate en lo que se puede deducir directamente del saju.

1. Personalidad y temas de vida anteriores deducidos del saju
2. Posibles lazos de vidas pasadas que continúan en esta
3. Tareas repetitivas o misiones no resueltas del pasado
4. Relaciones kármicas actuales y cómo gestionarlas
5. Posibilidad de encuentros predestinados y su naturaleza
6. Señales antes de encontrar personas clave del destino
7. Influencias persistentes de asuntos no resueltos del pasado
8. Cómo completar estas conexiones en esta vida y limpiar el karma`
},

'학업운 / 시험운': {
  ko: `📌 학업·시험 리포트 (전문가 작성)
사주 명식을 기반으로 고객의 학업운과 시험 관련 흐름을 논리적으로 분석해 주세요. 객관적인 근거를 바탕으로 지적 능력, 집중력, 시험 적기 등을 상세히 설명하며 실질적인 학습 조언도 포함합니다.

1. 사주상 지적 능력과 학습 집중력의 특징
2. 성취 가능성이 높은 학문 분야와 접근 방식
3. 시험운의 흐름 및 성적이 상승하기 좋은 시기
4. 장기 계획형인지 단기 몰입형인지에 대한 분석
5. 학습 습관에서 개선하면 큰 도움이 되는 점
6. 올해 또는 특정 시기의 집중력 및 성적 향상 기운
7. 공무원, 입시, 자격증 등 경쟁 시험에서의 주의사항
8. 가족, 건강 등 외부요인이 학업에 미치는 영향과 대처법`,

  en: `📌 Academic & Exam Fortune Report (Expert Guide)
Based on the saju chart, analyze the person’s academic strengths, study tendencies, and exam luck. Provide detailed insights with practical advice tailored to real-world learning strategies.

1. Intellectual capacity and concentration shown in saju
2. Most promising fields of study and learning methods
3. Periods when exam performance is likely to improve
4. Whether the person is better at long-term planning or short bursts
5. Study habits that should be improved for better results
6. Specific periods of enhanced focus or grades this year
7. Tips for competitive exams like civil service or certifications
8. How external factors like family or health may impact studies`,

  ja: `📌 学業・試験リポート（専門家によるガイド）
命式をもとに、学業運・試験運の流れ、勉強スタイル、適性分野などを論理的に分析してください。具体的なアドバイスも含めて、実生活で役立つ内容を提供してください。

1. 四柱推命に表れる知的能力と集中力
2. 成功しやすい学問領域と学習方法
3. 成績が上がりやすい時期と流れ
4. 長期計画型か短期集中型かの傾向
5. 改善が必要な学習習慣とポイント
6. 集中力・学습成果が高まる時期（特に今年）
7. 競争試験での注意事項（資格、公務員試験など）
8. 家族・健康など外部要因が学業に与える影響と対処法`,

  es: `📌 Informe de Estudios y Exámenes (Guía Profesional)
Utilizando tu saju, analiza la suerte académica y los factores clave para aprobar exámenes importantes. Aporta consejos realistas y útiles para estudiar mejor y rendir con éxito.

1. Capacidad intelectual y concentración según el saju
2. Áreas de estudio con mayor potencial de éxito
3. Épocas en que el rendimiento académico puede mejorar
4. Preferencia por planes a largo plazo o esfuerzos intensivos a corto plazo
5. Hábitos de estudio que se deben ajustar para mejores resultados
6. Períodos del año con mayor suerte en estudios o exámenes
7. Recomendaciones para pruebas competitivas (certificaciones, universidades)
8. Influencias externas como salud o familia y cómo manejarlas`
},

'시기운 / 대운 흐름': {
  ko: `📌 시기운·대운 분석
🔍 사주 명식을 기반으로 고객의 인생 흐름을 10년 단위 대운 중심으로 분석해주세요. 각 시기의 전반적인 특징, 유리한 운/주의 시기, 그리고 연애·직업·건강 등 주요 영역에 대한 영향과 실질적인 조언을 포함합니다.

1. 현재 대운(10년 단위)의 주요 특징과 영향력
2. 대운의 흐름에 따라 인생 전반의 기운 변화 요약
3. 좋은 대운/주의할 대운 시기 구간별 정리
4. 각 대운 시기에 두드러지는 운세 분야(연애, 직업, 건강 등)
5. 대운 변경 시점 전후로 주의할 사항
6. 대운의 흐름과 본인의 사주 성향의 조화 여부
7. 대운 외에도 중요한 세운(1년 단위) 변화 시기
8. 장기 인생 계획에 참고할 운세 흐름 요약`,

  en: `📌 Luck Period & Grand Luck Report
🔍 Analyze the client’s saju to explain their long-term luck trends, focusing on 10-year Grand Luck cycles. Detail key traits of each cycle, favorable and cautionary periods, and provide practical guidance in areas such as love, career, and health.

1. Key traits and influences of your current 10-year Grand Luck cycle
2. Summary of life flow changes based on luck trends
3. Timeline of favorable and cautionary luck periods
4. Prominent areas of influence in each Grand Luck period (love, career, health, etc.)
5. Warnings and preparations around Grand Luck transitions
6. Compatibility of luck cycles with your saju tendencies
7. Important annual luck changes beyond Grand Luck
8. Summary of long-term life flow guidance`,

  ja: `📌 時期運・大運分析
🔍 四柱推命をもとに、10年ごとの大運サイクルを中心に人生の流れを分析してください。各時期の特徴、良運期・注意期、恋愛・仕事・健康などの分野への影響と実用的なアドバイスを詳しく述べてください。

1. 現在の大運（10年単位）の主な特徴と影響力
2. 大運の流れによる人生全体の運勢の変化の要約
3. 良い大運・注意が必要な大運の時期の整理
4. 各大運期間において際立つ運勢分野（恋愛、仕事、健康など）
5. 大運の変更時期前後に注意すべき事項
6. 大運の流れと四柱推命の性質の調和
7. 大運以外にも重要な年運（1年単位）の変化時期
8. 長期的人生設計に役立つ運勢の流れの要約`,

  es: `📌 Análisis de ciclo de suerte
🔍 Analiza el saju del cliente enfocándote en los ciclos de Gran Suerte de 10 años. Describe las características clave, los períodos favorables y críticos, e incluye consejos prácticos sobre amor, carrera, salud y más.

1. Características clave e influencia del actual ciclo de 10 años (Gran Suerte)
2. Resumen de los cambios vitales según el flujo de suerte
3. Periodos favorables y de precaución según el ciclo de suerte
4. Áreas destacadas por periodo: amor, carrera, salud, etc.
5. Puntos críticos antes y después del cambio de ciclo
6. Armonía entre el ciclo de suerte y tu constitución energética
7. Cambios anuales importantes fuera del ciclo de 10 años
8. Flujo general de suerte para tu planificación de vida`
},

'미래 핵심 조언': {
  ko: `📌 미래 핵심 조언
🔍 전체 사주 분석을 바탕으로 인생 방향성과 조언을 제시해주세요. 현재 집중할 영역, 장기 과제, 기회 시기 등을 균형 있게 다루며, 실천 가능한 전략과 태도를 포함합니다.

1. 사주 전체 분석을 통한 삶의 방향성 제안
2. 현재 가장 집중해야 할 영역
3. 놓치면 안 되는 기회 시기
4. 인생 전반에서 마주할 중요한 과제
5. 조화로운 삶을 위한 사주적 태도
6. 나를 성장시키는 방식과 학습 스타일
7. 인간관계에서 꼭 지켜야 할 원칙
8. 미래를 위한 실천적 조언 요약`,

  en: `📌 Core Advice for the Future
🔍 Provide life guidance based on a full saju reading. Recommend areas to focus on, major life themes to address, key opportunity periods, and offer actionable strategies aligned with the client's nature.

1. Life direction suggested through full saju analysis
2. Areas that require your focus at present
3. Time windows for key opportunities
4. Major challenges to overcome in your lifetime
5. Attitude for harmonious living based on saju
6. Growth strategy and learning preferences
7. Principles for stable human relationships
8. Summary of practical advice for the future`,

  ja: `📌 未来への核心アドバイス
🔍 四柱推命の総合分析に基づいて、人生の方向性と重要なアドバイスを提示してください。今取り組むべき課題や、チャンスの時期、実践可能な戦略も含めて説明してください。

1. 四柱推命から見た人生の方向性
2. 今最も集中すべき分野
3. 逃してはならないチャンスの時期
4. 人生全体で直面する主要な課題
5. 四柱推命に基づく調和の取れた生き方の姿勢
6. 自分を成長させる方法と学習スタイル
7. 人間関係で守るべき基本的な原則
8. 未来に向けた実践的なアドバイスのまとめ`,

  es: `📌 Consejo clave para el futuro
🔍 Ofrece orientación basada en un análisis completo del saju. Incluye áreas clave de enfoque, desafíos importantes, momentos decisivos, y estrategias concretas para el crecimiento personal y relacional.

1. Dirección de vida basada en el análisis completo del saju
2. Área que más requiere tu enfoque ahora
3. Momentos clave que no debes perder
4. Grandes desafíos en tu camino vital
5. Actitud para vivir con armonía según el saju
6. Cómo crecer y estilo de aprendizaje ideal
7. Principios fundamentales para tus relaciones humanas
8. Consejos prácticos para un futuro estable y próspero`
},
'이사 / 이동운': {
  ko: `📌 이사/이동운 보고서
🔍 사주 명식을 바탕으로 거주지 이동이나 이사와 관련된 운세를 상세히 분석해주세요. 이동 가능성, 유리한 방향과 시기, 사주와 거주지 기운의 상관관계, 실질적인 조언 등을 포함합니다.

1. 사주상 이사 또는 거주지 변경의 가능성과 빈도
2. 언제 이사하거나 이동하는 것이 운 흐름상 유리한지
3. 이사 시 주의할 방향 또는 지역의 특징
4. 이사 이후 삶에 미치는 긍정적/부정적 영향
5. 현재 거주지의 기운이 사주에 미치는 영향
6. 해외 또는 먼 지역으로의 이동 가능성
7. 직장, 가족, 건강 등 이동 사유와의 연관성
8. 이사 시 고려해야 할 타이밍과 실질적 조언`,

  en: `📌 Moving & Relocation Report
🔍 Based on the saju chart, analyze the client’s potential for moving or relocating. Include timing, directions, environmental influences, and practical recommendations aligned with their energetic tendencies.

1. Possibility and frequency of relocation based on saju
2. Favorable timing for moving or relocating
3. Directions or areas to be cautious about when moving
4. Positive/negative impact of relocation on life
5. Influence of the current residence on your saju
6. Possibility of moving to foreign or distant locations
7. Connection to reasons like job, family, or health
8. Timing and practical advice for relocation`,

  ja: `📌 引越し・移動運レポート
🔍 四柱推命の命式に基づいて、引越し・移動の運勢を分析してください。移動の可能性や好時期、住環境の影響、実際的なアドバイスも含めて詳しく述べてください。

1. 四柱推命における引越し・住居変更の可能性と頻度
2. 引越しや移動が運勢的に有利なタイミング
3. 引越し時に注意すべき方角や地域の特徴
4. 引越し後の生活に与える影響（良い点・悪い点）
5. 現在の住まいが四柱推命に与える影響
6. 海外または遠方への移動の可能性
7. 仕事・家族・健康などの移動理由との関連性
8. 引越し時に考慮すべきタイミングと実践的アドバイス`,

  es: `📌 Informe de mudanzas y traslados
🔍 Analiza la posibilidad de mudanzas según la carta natal (saju). Incluye los periodos favorables, zonas recomendadas o de riesgo, efectos del lugar actual y consejos prácticos para un traslado exitoso.

1. Posibilidad y frecuencia de mudanza según el saju
2. Cuándo es favorable mudarse según el flujo energético
3. Direcciones o zonas a evitar al mudarse
4. Impacto positivo o negativo tras la mudanza
5. Influencia del lugar actual sobre tu energía
6. Posibilidad de trasladarse al extranjero o a zonas lejanas
7. Relación entre el traslado y motivos como trabajo, familia o salud
8. Recomendaciones y mejor momento para mudarse`
},

'귀인운': {
 ko: `📌 귀인운 보고서
🔍 사주 명식 속 귀인의 존재 여부, 등장 시기, 인연 맺는 방법 등을 상세히 분석해주세요. 정신적/물질적 도움을 받을 수 있는 가능성과 유지 전략도 함께 제시합니다.

1. 사주에 드러난 귀인(도움 주는 사람)의 존재 유무
2. 귀인이 등장하는 시기 및 상황
3. 귀인의 성격/특징 및 예상 관계 유형
4. 귀인과 인연을 맺는 방법과 자세
5. 귀인이 주는 도움의 종류(정신적, 물질적 등)
6. 귀인 운이 강해지는 시기
7. 귀인을 놓치지 않는 핵심 조언
8. 귀인과의 관계 지속을 위한 자세`,

  en: `📌 Noble People Luck Report
🔍 Using the saju, analyze the existence, timing, and traits of noble people (benefactors). Explain how to build these relationships, what support they offer, and how to maintain the connection.

1. Presence of noble people (benefactors) in your saju
2. When and how they are likely to appear
3. Personality traits and types of relationships with noble people
4. How to form and maintain these connections
5. Types of help (emotional, material, etc.) expected
6. Timing of strongest noble people influence
7. Key advice to not miss their help
8. How to sustain a long-term relationship with them`,

  ja: `📌 貴人運レポート
🔍 四柱推命をもとに、貴人の有無や登場時期、性格、関係の築き方を分析してください。貴人から得られる援助の種類や縁を保つためのアドバイスも含めてください。

1. 四柱推命に現れる貴人（助けてくれる人）の有無
2. 貴人が現れる時期や状況
3. 貴人の性格・特徴と想定される関係性
4. 貴人との縁を結ぶ方法と姿勢
5. 精神的・物質的な支援の種類
6. 貴人運が強まる時期
7. 貴人の助けを逃さないためのアドバイス
8. 貴人との関係を継続するための心構え`,

  es: `📌 Informe de Suerte de Personas Benefactoras
🔍 Basado en el saju, analiza si existen benefactores en tu destino, cuándo pueden aparecer y cómo aprovechar su ayuda. Detalla tipos de apoyo, cómo conectar con ellos y mantener una relación valiosa.

1. Existencia de benefactores revelada en tu carta natal
2. Cuándo y cómo es probable que aparezcan
3. Rasgos de personalidad y tipo de relación
4. Cómo conectar y mantener la relación con ellos
5. Tipos de ayuda (emocional, económica, etc.)
6. Períodos con mayor influencia de benefactores
7. Consejos clave para no perder sus oportunidades
8. Cómo mantener la relación a largo plazo`
},
'사업운': {
 ko: `📌 사업운 보고서  
🔍 사주 명식을 기반으로 고객의 사업운을 논리적으로 분석해 주세요. 창업 적성, 성공 시기, 위험 요인, 파트너 궁합 등 현실적인 전략과 조언을 포함해 상세히 설명하세요.

1. 사주상 사업 적성 여부와 추천 유형  
2. 창업 성공 가능성 및 타이밍  
3. 파트너와의 사업 궁합 분석  
4. 사주에서 나타나는 리스크 요인  
5. 사업 확장 또는 축소 시점  
6. 안정적 수익구조를 만들 수 있는 운 흐름  
7. 사업 실패를 방지할 조언  
8. 적합한 사업 분야 및 성공 조건`,

  en: `📌 Business Luck Report  
🔍 Analyze the client's business potential based on their saju. Include aptitude for entrepreneurship, ideal timing, risk factors, business partner compatibility, and practical strategies for success.

1. Suitability for business and recommended types  
2. Likelihood and timing of business success  
3. Compatibility with business partners  
4. Potential risk factors shown in the saju  
5. Best timing to expand or downscale the business  
6. Energy trends favorable for stable income  
7. Key advice to avoid business failure  
8. Suitable business fields and success conditions`,

  ja: `📌 事業運レポート  
🔍 四柱推命に基づいて、顧客の事業運を分析してください。起業の適性、成功のタイミング、リスク、ビジネスパートナーとの相性など、現実的なアドバイスを詳しく説明してください。

1. 四柱推命における事業適性と推奨タイプ  
2. 起業成功の可能性とタイミング  
3. ビジネスパートナーとの相性分析  
4. 命式に表れるリスク要因  
5. 拡張または縮小すべきタイミング  
6. 安定した収益構造を築ける運勢の流れ  
7. 失敗を避けるためのアドバイス  
8. 適した事業分野と成功条件`,

  es: `📌 Informe de Suerte Empresarial  
🔍 Analiza el destino empresarial del cliente según su saju. Incluye aptitudes para emprender, momentos clave, factores de riesgo, compatibilidad con socios y consejos prácticos para el éxito.

1. Aptitud para los negocios y tipos recomendados  
2. Posibilidades y tiempos favorables para emprender  
3. Compatibilidad con socios empresariales  
4. Factores de riesgo mostrados en la carta natal  
5. Momento ideal para expandir o reducir el negocio  
6. Flujo energético que permite ingresos estables  
7. Consejos clave para evitar fracasos  
8. Áreas empresariales adecuadas y condiciones para el éxito`
},

'종합운': {
   ko: `📌 종합운 보고서  
🔍 사주 전체 명식을 바탕으로 인생 전반의 운세 흐름을 통합적으로 분석해 주세요. 강약 운세 분야, 균형 상태, 기회 시기 등을 논리적 근거와 함께 설명하고, 전략적 인생 설계를 돕는 조언도 포함하세요.

1. 전체적인 운세 흐름과 기조  
2. 강한 운과 약한 운의 분야 (예: 연애, 금전, 건강 등)  
3. 향후 1~3년간 운의 전반적 흐름  
4. 전체적인 사주의 균형 상태 (오행, 음양 등)  
5. 인생 전반에서 주의할 시기와 기회 시기  
6. 주요 전환점과 그 의미  
7. 사주적 강점과 약점 요약  
8. 종합 조언 및 핵심 방향성 제시`,

  en: `📌 Total Fortune Report  
🔍 Analyze the client's overall fortune flow based on their complete saju. Explain strong vs. weak areas, element balance, key timing, and provide strategic guidance for long-term life planning.

1. Overall trend and tone of the life fortune  
2. Strong and weak areas (e.g., love, money, health)  
3. General fortune flow for the next 1–3 years  
4. Overall balance of the saju (Five Elements, Yin-Yang)  
5. Caution and opportunity periods throughout life  
6. Major life turning points and their meaning  
7. Summary of saju-based strengths and weaknesses  
8. Strategic advice and key direction`,

  ja: `📌 総合運レポート  
🔍 四柱推命全体をもとに、人生全体の運勢の流れを総合的に分析してください。強運・弱運の分野、五行や陰陽のバランス、重要な時期について論理的に説明し、戦略的な人生設計の助言も加えてください。

1. 全体的な運勢の流れと基調  
2. 強い運・弱い運の分野（恋愛、金運、健康など）  
3. 今後1〜3年間の運勢の展望  
4. 命式全体のバランス（五行、陰陽など）  
5. 注意すべき時期とチャンスの時期  
6. 人生における重要な転機とその意味  
7. 命式から見た長所と短所の要約  
8. 戦略的アドバイスと人生の方向性の提示`,

  es: `📌 Informe General de Suerte  
🔍 Analiza el flujo general del destino del cliente según toda su carta natal. Explica las áreas fuertes y débiles, el equilibrio de elementos, los periodos clave y ofrece consejos para una planificación vital estratégica.

1. Flujo general de la suerte en la vida  
2. Áreas fuertes y débiles (amor, dinero, salud, etc.)  
3. Panorama del destino para los próximos 1–3 años  
4. Balance energético general (Cinco Elementos, Yin-Yang)  
5. Periodos de precaución y de oportunidad  
6. Momentos de cambio vital y su significado  
7. Resumen de fortalezas y debilidades según el saju  
8. Dirección clave y recomendaciones estratégicas`
},

'이직운': {
   ko: `📌 이직운 보고서  
🔍 사주 명식을 바탕으로 이직과 관련된 운세 흐름을 분석해 주세요. 진로 전환의 가능성, 최적 시기, 주의할 점 등을 구체적으로 설명하고 실무적인 판단에 도움이 되는 조언을 포함하세요.

1. 이직에 대한 사주상 적성 여부  
2. 이직 시기 및 변화 타이밍  
3. 이직 전후로 유리하거나 불리한 시기  
4. 새 직장에서의 인간관계 및 적응 운  
5. 안정성과 성취감의 균형  
6. 장기적인 커리어 플랜과 연계 가능성  
7. 이직 후 재도약 가능성  
8. 이직 판단 시 참고할 조언 요약`,

  en: `📌 Job Change Report  
🔍 Analyze the client's saju to assess job change potential. Explain the suitability, timing, and factors for success, along with practical guidance for career decision-making.

1. Aptitude for job change based on saju  
2. Best timing for transition  
3. Favorable vs. risky periods before and after the change  
4. Workplace relationships and adjustment after change  
5. Stability vs. fulfillment balance  
6. Alignment with long-term career goals  
7. Possibility of new growth after job change  
8. Summary of tips for evaluating the move`,

  ja: `📌 転職運レポート  
🔍 四柱推命に基づき、転職に関する運勢を分析してください。適性、タイミング、注意点などを具体的に説明し、実践的なアドバイスを提供してください。

1. 転職に対する適性  
2. 最適な転職時期  
3. 転職前後の良い・注意すべき期間  
4. 新しい職場での人間関係と適応運  
5. 安定性と達成感のバランス  
6. 長期的なキャリアとの整合性  
7. 転職後の再飛躍の可能性  
8. 転職判断時のアドバイスまとめ`,

  es: `📌 Informe de cambio laboral  
🔍 Analiza el saju del cliente para evaluar la posibilidad de cambiar de trabajo. Explica el momento ideal, precauciones y oportunidades, e incluye recomendaciones prácticas para decidir correctamente.

1. Aptitud para el cambio de trabajo según el saju  
2. Momento óptimo para la transición  
3. Periodos favorables y de riesgo antes/después del cambio  
4. Relaciones laborales y adaptación en el nuevo trabajo  
5. Equilibrio entre estabilidad y satisfacción  
6. Relación con objetivos profesionales a largo plazo  
7. Potencial de crecimiento tras el cambio  
8. Consejos clave para tomar la decisión`
},

'가족운': {
  ko: `📌 가족운 보고서  
🔍 사주 명식을 바탕으로 가족 관계의 운세 흐름과 조화를 분석해 주세요. 부모, 형제, 자녀 등 가족 간 인연의 특징, 갈등 가능성, 조언 등을 포함하세요.

1. 부모와의 인연과 관계 특징  
2. 형제자매와의 관계 운  
3. 자녀운의 유무와 특징  
4. 가족 내에서 나의 역할과 영향력  
5. 갈등 가능성 및 조화 방법  
6. 가족 내에서 힘이 되는 사람의 유형  
7. 가족과 관련된 중요한 시기  
8. 전반적인 가족운 조망과 조언`,

  en: `📌 Family Fortune Report  
🔍 Analyze the client's family dynamics using saju. Describe relationships with parents, siblings, and children, as well as potential harmony or conflict and guidance for maintaining healthy ties.

1. Relationship and destiny with parents  
2. Fortune regarding siblings  
3. Presence and traits of child-related fortune  
4. Role and influence within the family  
5. Potential conflicts and harmony-building tips  
6. Supportive figures within the family  
7. Key timing related to family events  
8. Overall guidance on family fortune`,

  ja: `📌 家族運レポート  
🔍 四柱推命をもとに、家族との関係性を分析してください。両親、兄弟姉妹、子供との縁や関係性、調和の取り方などを詳しく説明してください。

1. 両親との縁と関係性の特徴  
2. 兄弟姉妹との関係運  
3. 子供に関する運と特徴  
4. 家族内での自分の役割と影響力  
5. 衝突の可能性と調和のための工夫  
6. 家族内で助けになる人物の特徴  
7. 家族関連の重要な時期  
8. 家族運の全体像とアドバイス`,

  es: `📌 Informe de suerte familiar  
🔍 Analiza la suerte familiar del cliente según su saju. Incluye vínculos con padres, hermanos e hijos, potencial de armonía o conflictos y consejos para mantener relaciones saludables.

1. Relación y destino con los padres  
2. Suerte relacionada con hermanos/hermanas  
3. Fortuna relacionada con los hijos  
4. Rol e influencia dentro del núcleo familiar  
5. Conflictos potenciales y cómo mantener la armonía  
6. Figuras de apoyo dentro de la familia  
7. Momentos clave en la vida familiar  
8. Consejos generales sobre la suerte familiar`
},

};
 