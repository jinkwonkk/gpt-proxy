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
    ko: `📌 직업운 보고서 
1. 현재 사주에서 드러나는 직업적 성향과 강점
2. 어울리는 직업 유형 및 진로 방향
3. 진로 변경 가능성 및 최적 시기
4. 직장 내 인간관계 주의사항
5. 향후 1~3년 직업운 흐름 및 핵심 조언`,
    en: `📌 Career Report
1. Vocational tendencies and strengths revealed in your saju
2. Suitable job types and career direction
3. Possibility of career change and optimal timing
4. Workplace relationship cautions
5. Career fortune trends and advice for the next 1–3 years`,
    ja: `📌 職業運レポート
1. 四柱推命に現れる職業的な傾向と強み
2. 向いている職業の種類と進路の方向性
3. 転職の可能性と最適な時期
4. 職場での人間関係に関する注意点
5. 今後1～3年の職業運と重要なアドバイス`,
    es: `📌 Informe de carrera
1. Tendencias y fortalezas profesionales según tu saju
2. Tipos de trabajo adecuados y orientación profesional
3. Posibilidad de cambio de carrera y momento óptimo
4. Precauciones en relaciones laborales
5. Tendencias de carrera y consejos para los próximos 1-3 años`
  },
  '재물운 / 금전운': {
    ko: `📌 재물운 보고서 
1. 사주상의 금전 운세 흐름
2. 재물복 유무 및 재정 변화 시기
3. 지출 관리 요령 및 재테크 전략
4. 투자, 부수입, 사업 가능성 등`,
    en: `📌 Wealth Report
1. Financial fortune flow based on saju
2. Presence of wealth luck and timing of financial changes
3. Spending habits and investment strategies
4. Possibilities in business and side income`,
    ja: `📌 金運レポート
1. 四柱推命に基づく金運の流れ
2. 財運の有無と財政の変化時期
3. 支出管理のコツと投資戦略
4. 事業や副収入の可能性など`,
    es: `📌 Informe de riqueza
1. Flujo de fortuna financiera basado en tu saju
2. Presencia de suerte económica y cambios financieros
3. Gestión del gasto y estrategias de inversión
4. Posibilidades de negocio e ingresos secundarios`
  },
  '연애운 / 사랑운': {
    ko: `📌 연애운 보고서 
1. 현재 연애 기운 및 감정 흐름
2. 새로운 인연 가능 시기 및 유형
3. 연애 성향 및 스타일
4. 궁합 유형 및 갈등 대처법
5. 올해 최적 연애 타이밍과 조언`,
    en: `📌 Love Report
1. Current romantic energy and emotional flow
2. Timing and type of potential new encounters
3. Romantic tendencies and style
4. Compatibility types and conflict management
5. Best romantic timing and advice for this year`,
    ja: `📌 恋愛運レポート
1. 現在の恋愛の気運と感情の流れ
2. 新しい出会いの時期とタイプ
3. 恋愛傾向とスタイル
4. 相性タイプとトラブルへの対処法
5. 今年の最適な恋愛タイミングとアドバイス`,
    es: `📌 Informe de amor
1. Energía romántica y flujo emocional actual
2. Momento y tipo de nuevas relaciones
3. Estilo y tendencias amorosas
4. Compatibilidad y manejo de conflictos
5. Mejor momento para el amor este año y consejos`
  },
   '건강운': {
    ko: `📌 건강운 보고서 
1. 사주에서 드러나는 건강 체질 및 취약 부위
2. 만성질환 또는 반복되는 질병의 가능성
3. 특정 시기에 건강상 주의해야 할 부분
4. 정신 건강 및 스트레스 관리 성향
5. 식습관과 운동 습관에 대한 사주적 조언
6. 건강운이 좋아지는 시기 또는 회복 운
7. 병원 진료나 수술 등 필요한 결정 시기
8. 건강 유지 및 증진을 위한 실질적인 행동 지침`,
    en: `📌 Health Report
1. Physical constitution and weak areas shown in the saju
2. Possibility of chronic or recurring illnesses
3. Periods to be cautious about health
4. Mental health and stress management
5. Dietary and exercise advice based on saju
6. Periods of health improvement or recovery
7. Timing for medical treatment or surgery
8. Practical guidelines to maintain and enhance health`,
    ja: `📌 健康運レポート
1. 四柱推命に示される体質と弱点
2. 慢性病または繰り返す病気の可能性
3. 健康に注意すべき時期
4. 精神的健康とストレス管理の傾向
5. 食生活と運動に関する四柱的アドバイス
6. 健康運が良くなる時期や回復運
7. 病院診療や手術などの必要な決断の時期
8. 健康維持と向上のための実践的指針`,
    es: `📌 Informe de Salud
1. Constitución física y áreas vulnerables según el saju
2. Posibilidad de enfermedades crónicas o recurrentes
3. Períodos en los que se debe tener cuidado con la salud
4. Tendencias de salud mental y manejo del estrés
5. Consejos sobre dieta y ejercicio según el saju
6. Épocas de mejora o recuperación de la salud
7. Momentos clave para consultas médicas o cirugía
8. Recomendaciones prácticas para mantener y mejorar la salud`
  },
  '결혼운': {
    ko: `📌 결혼운 보고서 
1. 사주에서 나타나는 결혼 성향과 결혼에 대한 태도
2. 결혼 적령기 및 실제 결혼 가능 시기
3. 결혼 생활에서의 강점과 약점
4. 배우자와의 관계에서 주의할 점
5. 사주상 만날 가능성이 높은 배우자 유형 (성격, 직업 등)
6. 결혼 후 운세 흐름의 변화
7. 결혼 전 반드시 고려해야 할 핵심 조언
8. 재혼 가능성이나 늦은 결혼의 유불리 여부`,
    en: `📌 Marriage Report
1. Marriage tendencies and attitudes shown in saju
2. Ideal age and timing for marriage
3. Strengths and weaknesses in married life
4. Cautions in the relationship with spouse
5. Likely type of spouse (personality, profession, etc.)
6. Change in luck after marriage
7. Key advice before getting married
8. Favorability of late marriage or remarriage`,
    ja: `📌 結婚運レポート
1. 四柱推命に表れる結婚の傾向と姿勢
2. 結婚の適齢期および現実的な可能性の時期
3. 結婚生活での長所と短所
4. 配偶者との関係で注意すべき点
5. 出会う可能性が高い配偶者のタイプ（性格、職業など）
6. 結婚後の運勢の変化
7. 結婚前に必ず考慮すべきアドバイス
8. 再婚や晩婚の有利・不利`,
    es: `📌 Informe Matrimonial
1. Tendencias y actitudes hacia el matrimonio según el saju
2. Edad y momento ideal para casarse
3. Fortalezas y debilidades en la vida matrimonial
4. Precauciones en la relación con la pareja
5. Tipo de pareja probable (personalidad, ocupación, etc.)
6. Cambios en la suerte después del matrimonio
7. Consejos clave antes del matrimonio
8. Ventajas o desventajas del matrimonio tardío o segundo matrimonio`
  },
  '인간관계 / 대인운': {
    ko: `📌 대인관계 보고서 
1. 사주상 인간관계 성향(외향/내향, 적극/소극 등)
2. 좋은 인간관계를 맺는 유형과 거리 두어야 할 유형
3. 친구 및 동료와의 상호작용 패턴
4. 갈등이 생기기 쉬운 상황과 대처법
5. 사주에 따른 인기운 또는 대인운 시기
6. 인간관계를 통한 기회 유입 가능성
7. 사람을 보는 통찰력 및 사람 복에 대한 분석
8. 좋은 인연을 끌어당기기 위한 실천 조언`,
    en: `📌 Relationship Report
1. Social tendencies shown in the saju (extrovert/introvert, active/passive, etc.)
2. Types of people to build or avoid relationships with
3. Patterns in interactions with friends and colleagues
4. Common causes of conflict and how to handle them
5. Timing of popularity or relationship luck
6. Possibility of opportunities through relationships
7. Insight into people and analysis of social fortune
8. Practical advice to attract good connections`,
    ja: `📌 対人運レポート
1. 四柱推命に表れる対人傾向（外向/内向、積極/消極など）
2. 良い関係を築くべき人、距離を取るべき人のタイプ
3. 友人や同僚との関係パターン
4. トラブルが起きやすい状況とその対処法
5. 人気運や対人運の強い時期
6. 人間関係を通じて得られるチャンスの可能性
7. 人を見る目や人間関係の運に関する分析
8. 良縁を引き寄せるための実践的アドバイス`,
    es: `📌 Informe de Relaciones
1. Tendencias sociales según el saju (extrovertido/introvertido, activo/pasivo)
2. Tipos de personas con las que tener o evitar relaciones
3. Patrones de interacción con amigos y colegas
4. Situaciones comunes de conflicto y cómo manejarlas
5. Épocas de suerte en relaciones o popularidad
6. Posibilidad de oportunidades a través de relaciones
7. Perspicacia sobre las personas y análisis de suerte social
8. Consejos prácticos para atraer buenas relaciones`
  },
  '전생 / 인연운': {
  ko: `📌 전생·인연 보고서
1. 사주에서 유추할 수 있는 전생 기질과 성격
2. 전생에서 이어져온 인연의 가능성
3. 이번 생에서 반복될 수 있는 전생 과업
4. 카르마적 관계에서 주의할 점
5. 운명적인 만남 혹은 숙명적 인연 존재 여부
6. 인연을 마주할 시기의 징조
7. 전생에서 미처 완성하지 못한 과제
8. 이번 생에서 완성할 수 있는 길`,
  en: `📌 Past Life & Destiny Report
1. Personality traits and tendencies inferred from your past life based on your saju
2. Possibility of connections carried over from previous lives
3. Tasks from past lives likely to repeat in this lifetime
4. Caution points regarding karmic relationships
5. Possibility of fateful or destined encounters
6. Signs of when such connections may appear
7. Unfinished business from past lives
8. How to fulfill your karmic path in this life`,
  ja: `📌 前世・縁の運命レポート
1. 四柱推命から読み取れる前世の性格や気質
2. 前世から続いている縁の可能性
3. 今世で繰り返される可能性のある前世の課題
4. カルマ的な関係で注意すべき点
5. 運命的な出会いや宿命の縁の存在
6. その縁に出会う時期の兆し
7. 前世で未完だった課題
8. 今世でそれを完成させるための道`,
  es: `📌 Informe de vidas pasadas y destino
1. Rasgos de personalidad inferidos de vidas pasadas según tu saju
2. Posibles conexiones kármicas de vidas anteriores
3. Tareas pasadas que podrían repetirse en esta vida
4. Aspectos a tener en cuenta en relaciones kármicas
5. Posibilidad de encuentros predestinados
6. Señales que indican cuándo conocerás esos lazos
7. Asuntos inconclusos de vidas anteriores
8. Cómo completar tu camino en esta vida`
},
'학업운 / 시험운': {
  ko: `📌 학업·시험운 보고서
1. 사주상 지적 능력과 집중력의 특성
2. 성취 가능성이 높은 학문 분야
3. 시험운의 흐름과 유리한 시기
4. 장기 계획 VS 단기 성과 중 어느 쪽에 강한가?
5. 공부 습관에서 개선하면 좋은 점
6. 올해 또는 특정 시기의 집중력/성적 운 상승 시기
7. 경쟁 시험(공무원, 수능, 자격증 등)에서 주의할 점
8. 학업에 영향을 줄 수 있는 외부 요인 (가족, 건강 등)`,
  en: `📌 Academic & Exam Luck Report
1. Intellectual ability and concentration based on your saju
2. Fields of study with high potential for success
3. Favorable timing and flow of exam-related luck
4. Strength in long-term planning vs. short-term performance
5. Study habits to improve for better outcomes
6. Periods of increased focus or academic performance this year
7. Precautions for competitive exams (civil service, university entrance, certifications)
8. External factors that may affect studies (family, health, etc.)`,
  ja: `📌 学業・試験運レポート
1. 四柱推命における知的能力と集中力の特徴
2. 成功しやすい学問分野
3. 試験運の流れと有利な時期
4. 長期計画と短期成果のどちらに強いか
5. 改善すべき勉強習慣
6. 今年または特定の時期の集中力・成績向上の時期
7. 競争試験（公務員、大学入試、資格など）での注意点
8. 学業に影響を与える可能性のある外部要因（家族、健康など）`,
  es: `📌 Informe de suerte académica y de exámenes
1. Capacidades intelectuales y de concentración según tu saju
2. Áreas académicas con alta posibilidad de éxito
3. Flujo de suerte en los exámenes y periodos favorables
4. Fortaleza en planificación a largo plazo vs. rendimiento a corto plazo
5. Hábitos de estudio que se deben mejorar
6. Momentos del año con mayor enfoque o rendimiento académico
7. Precauciones en exámenes competitivos (función pública, universidad, certificaciones)
8. Factores externos que pueden influir en los estudios (familia, salud, etc.)`
},
'시기운 / 대운 흐름': {
  ko: `📌 시기운·대운 분석 
1. 현재 대운(10년 단위)의 주요 특징과 영향력
2. 대운의 흐름에 따라 인생 전반의 기운 변화 요약
3. 좋은 대운/주의할 대운 시기 구간별 정리
4. 각 대운 시기에 두드러지는 운세 분야(연애, 직업, 건강 등)
5. 대운 변경 시점 전후로 주의할 사항
6. 대운의 흐름과 본인의 사주 성향의 조화 여부
7. 대운 외에도 중요한 세운(1년 단위) 변화 시기
8. 장기 인생 계획에 참고할 운세 흐름 요약`,
  en: `📌 Luck Period & Grand Luck Report
1. Key traits and influences of your current 10-year Grand Luck cycle
2. Summary of life flow changes based on luck trends
3. Timeline of favorable and cautionary luck periods
4. Prominent areas of influence in each Grand Luck period (love, career, health, etc.)
5. Warnings and preparations around Grand Luck transitions
6. Compatibility of luck cycles with your saju tendencies
7. Important annual luck changes beyond Grand Luck
8. Summary of long-term life flow guidance`,
  ja: `📌 時期運・大運分析
1. 現在の大運（10年単位）の主な特徴と影響力
2. 大運の流れによる人生全体の運勢の変化の要約
3. 良い大運・注意が必要な大運の時期の整理
4. 各大運期間において際立つ運勢分野（恋愛、仕事、健康など）
5. 大運の変更時期前後に注意すべき事項
6. 大運の流れと四柱推命の性質の調和
7. 大運以外にも重要な年運（1年単位）の変化時期
8. 長期的人生設計に役立つ運勢の流れの要約`,
  es: `📌 Análisis de ciclo de suerte
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
1. 사주 전체 분석을 통한 삶의 방향성 제안
2. 현재 가장 집중해야 할 영역
3. 놓치면 안 되는 기회 시기
4. 인생 전반에서 마주할 중요한 과제
5. 조화로운 삶을 위한 사주적 태도
6. 나를 성장시키는 방식과 학습 스타일
7. 인간관계에서 꼭 지켜야 할 원칙
8. 미래를 위한 실천적 조언 요약`,
  en: `📌 Core Advice for the Future
1. Life direction suggested through full saju analysis
2. Areas that require your focus at present
3. Time windows for key opportunities
4. Major challenges to overcome in your lifetime
5. Attitude for harmonious living based on saju
6. Growth strategy and learning preferences
7. Principles for stable human relationships
8. Summary of practical advice for the future`,
  ja: `📌 未来への核心アドバイス
1. 四柱推命から見た人生の方向性
2. 今最も集中すべき分野
3. 逃してはならないチャンスの時期
4. 人生全体で直面する主要な課題
5. 四柱推命に基づく調和の取れた生き方の姿勢
6. 自分を成長させる方法と学習スタイル
7. 人間関係で守るべき基本的な原則
8. 未来に向けた実践的なアドバイスのまとめ`,
  es: `📌 Consejo clave para el futuro
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
1. 사주상 이사 또는 거주지 변경의 가능성과 빈도
2. 언제 이사하거나 이동하는 것이 운 흐름상 유리한지
3. 이사 시 주의할 방향 또는 지역의 특징
4. 이사 이후 삶에 미치는 긍정적/부정적 영향
5. 현재 거주지의 기운이 사주에 미치는 영향
6. 해외 또는 먼 지역으로의 이동 가능성
7. 직장, 가족, 건강 등 이동 사유와의 연관성
8. 이사 시 고려해야 할 타이밍과 실질적 조언`,
  en: `📌 Moving & Relocation Report
1. Possibility and frequency of relocation based on saju
2. Favorable timing for moving or relocating
3. Directions or areas to be cautious about when moving
4. Positive/negative impact of relocation on life
5. Influence of the current residence on your saju
6. Possibility of moving to foreign or distant locations
7. Connection to reasons like job, family, or health
8. Timing and practical advice for relocation`,
  ja: `📌 引越し・移動運レポート
1. 四柱推命における引越し・住居変更の可能性と頻度
2. 引越しや移動が運勢的に有利なタイミング
3. 引越し時に注意すべき方角や地域の特徴
4. 引越し後の生活に与える影響（良い点・悪い点）
5. 現在の住まいが四柱推命に与える影響
6. 海外または遠方への移動の可能性
7. 仕事・家族・健康などの移動理由との関連性
8. 引越し時に考慮すべきタイミングと実践的アドバイス`,
  es: `📌 Informe de mudanzas y traslados
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
1. 사주에 드러난 귀인(도움 주는 사람)의 존재 유무
2. 귀인이 등장하는 시기 및 상황
3. 귀인의 성격/특징 및 예상 관계 유형
4. 귀인과 인연을 맺는 방법과 자세
5. 귀인이 주는 도움의 종류(정신적, 물질적 등)
6. 귀인 운이 강해지는 시기
7. 귀인을 놓치지 않는 핵심 조언
8. 귀인과의 관계 지속을 위한 자세`,
  en: `📌 Noble People Luck Report
1. Presence of noble people (benefactors) in your saju
2. When and how they are likely to appear
3. Personality traits and types of relationships with noble people
4. How to form and maintain these connections
5. Types of help (emotional, material, etc.) expected
6. Timing of strongest noble people influence
7. Key advice to not miss their help
8. How to sustain a long-term relationship with them`,
  ja: `📌 貴人運レポート
1. 四柱推命に現れる貴人（助けてくれる人）の有無
2. 貴人が現れる時期や状況
3. 貴人の性格・特徴と想定される関係性
4. 貴人との縁を結ぶ方法と姿勢
5. 精神的・物質的な支援の種類
6. 貴人運が強まる時期
7. 貴人の助けを逃さないためのアドバイス
8. 貴人との関係を継続するための心構え`,
  es: `📌 Informe de Suerte de Personas Benefactoras
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
1. 사주상 사업 적성 여부와 추천 유형
2. 창업 성공 가능성 및 타이밍
3. 파트너와의 사업 궁합 분석
4. 사주에서 나타나는 리스크 요인
5. 사업 확장 또는 축소 시점
6. 안정적 수익구조를 만들 수 있는 운 흐름
7. 사업 실패를 방지할 조언
8. 적합한 사업 분야 및 성공 조건`,
  en: `📌 Business Luck Report
1. Business aptitude and recommended types based on your saju
2. Likelihood of startup success and ideal timing
3. Compatibility with potential business partners
4. Risks and challenges shown in your saju
5. Best timing for expansion or downsizing
6. Luck trends for building stable profits
7. Advice to avoid business failure
8. Suitable industries and keys to success`,
  ja: `📌 事業運レポート
1. 四柱推命に基づく事業適性と推奨業種
2. 起業成功の可能性と最適な時期
3. ビジネスパートナーとの相性分析
4. 四柱推命に現れるリスク要因
5. 事業の拡大・縮小のタイミング
6. 安定した収益構造を築くための運気
7. 事業失敗を避けるためのアドバイス
8. 適した事業分野と成功の条件`,
  es: `📌 Informe de suerte empresarial
1. Aptitud para negocios y tipos recomendados según tu saju
2. Posibilidades de éxito al emprender y momento oportuno
3. Compatibilidad con socios comerciales
4. Riesgos señalados en tu carta energética
5. Cuándo expandir o reducir el negocio
6. Flujo de suerte para ingresos estables
7. Consejos para evitar fracasos
8. Sectores adecuados y claves para triunfar`
},

'종합운': {
  ko: `📌 종합운 보고서
1. 전체적인 운세 흐름과 기조
2. 강한 운과 약한 운의 분야(예: 연애, 금전, 건강 등)
3. 향후 1~3년간 운의 전반적 흐름
4. 전체적인 사주의 균형 상태 (오행, 음양 등)
5. 인생 전반에서 주의할 시기와 기회 시기
6. 운명적 전환점과 주요 이슈 시기
7. 전체 사주의 장단점 요약
8. 사주 전반에 대한 조화로운 삶을 위한 조언`,
  en: `📌 Overall Fortune Report
1. General trends in your fortune
2. Strong and weak areas (e.g., love, wealth, health)
3. Forecast for the next 1–3 years
4. Overall balance of your saju (elements, yin-yang, etc.)
5. Key periods for caution or opportunity
6. Turning points and major life issues
7. Summary of strengths and weaknesses
8. Advice for a harmonious life path`,
  ja: `📌 総合運レポート
1. 全体的な運勢の流れと傾向
2. 強い運と弱い運の分野（恋愛、金運、健康など）
3. 今後1〜3年の運気予測
4. 四柱推命の全体バランス（五行、陰陽など）
5. 注意すべき時期とチャンスの時期
6. 運命的な転換点と重要課題の時期
7. 全体的な長所と短所のまとめ
8. 調和のとれた人生のためのアドバイス`,
  es: `📌 Informe de fortuna general
1. Flujo general de tu suerte
2. Áreas fuertes y débiles (amor, dinero, salud, etc.)
3. Pronóstico para los próximos 1 a 3 años
4. Balance general de tu carta (elementos, yin-yang, etc.)
5. Momentos clave para cuidarse o aprovechar
6. Puntos de giro y temas importantes
7. Resumen de fortalezas y debilidades
8. Consejos para una vida equilibrada`
},

'이직운': {
  ko: `📌 이직운 보고서
1. 사주상 이직 운세 흐름과 경향성
2. 현재 직장에 대한 궁합 및 만족도 예측
3. 이직 성공 가능성이 높은 시기
4. 사주상 안정 추구형 vs 변화 추구형 여부
5. 이직 시 고려해야 할 핵심 조언
6. 이직 후 운세 흐름 및 기대 효과
7. 자신에게 맞는 직무/환경 유형
8. 이직에 실패할 수 있는 시기나 조건`,
  en: `📌 Career Transition Report
1. Job change trends based on your saju
2. Compatibility with current workplace
3. Best timing for successful job change
4. Stability-oriented vs. change-seeking personality
5. Key advice to consider when switching jobs
6. Post-transition fortune and expected outcomes
7. Suitable job types and work environments
8. Conditions or periods with higher failure risk`,
  ja: `📌 転職運レポート
1. 四柱推命に基づく転職の傾向
2. 現在の職場との相性と満足度
3. 転職成功の可能性が高い時期
4. 安定志向か変化志向かの傾向
5. 転職時の重要なアドバイス
6. 転職後の運勢と期待できる効果
7. 適した職種・職場環境
8. 転職失敗のリスクが高い時期や条件`,
  es: `📌 Informe de transición laboral
1. Tendencias de cambio de empleo según tu saju
2. Compatibilidad con tu empleo actual
3. Momentos ideales para cambiar de trabajo
4. Tendencia hacia la estabilidad o el cambio
5. Consejos clave para cambiar de trabajo
6. Flujo de suerte posterior y resultados esperados
7. Tipos de empleo y entornos adecuados
8. Riesgos o condiciones que pueden provocar fracaso`
},

'가족운': {
  ko: `📌 가족운 보고서 
1. 사주에서 드러나는 가족과의 유대감 성향
2. 부모와의 관계 운세 및 영향력
3. 형제자매와의 관계 흐름
4. 결혼 후 새로운 가족과의 관계
5. 가족으로 인한 정신적/금전적 부담 여부
6. 가족 내에서 갈등이 발생하기 쉬운 원인
7. 사주상 가족 간 화합을 위한 조언
8. 향후 가족운의 변화 흐름 및 유의점`,
  en: `📌 Family Luck Report
1. Your tendency to bond with family based on saju
2. Relationship flow and impact with parents
3. Predicted relationship dynamics with siblings
4. Relationship with new family after marriage
5. Emotional or financial burdens from family
6. Potential causes of conflict within family
7. Advice for maintaining family harmony
8. Outlook and changes in family-related fortune`,
  ja: `📌 家族運レポート
1. 四柱推命における家族との絆の傾向
2. 両親との関係運と影響
3. 兄弟姉妹との関係の流れ
4. 結婚後の新しい家族との関係
5. 家族からの精神的・金銭的な負担の有無
6. 家族内で衝突が起こりやすい原因
7. 家族間の調和のためのアドバイス
8. 今後の家族運の変化と注意点`,
  es: `📌 Informe de fortuna familiar
1. Tendencia a vincularte con tu familia según tu saju
2. Dinámica con padres y su impacto
3. Flujo relacional con hermanos/hermanas
4. Relación con la nueva familia tras el matrimonio
5. Cargas emocionales o financieras por la familia
6. Causas comunes de conflicto familiar
7. Consejos para mantener la armonía
8. Cambios futuros y puntos clave en la fortuna familiar`
},

};
 