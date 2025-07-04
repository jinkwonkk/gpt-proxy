// ✅ gpt-proxy/src/types/saju.ts

export interface PersonInfo {
  name: string;
  gender: 'male' | 'female';
  birth: {
    year: number;
    month: number;
    day: number;
    hour?: number;
  };
}

export interface SajuResult {
  yearGanji: string;
  monthGanji: string;
  dayGanji: string;
  hourGanji: string;
  elementSummary: string;
  strongElement: string;
  weakElement: string;
  dayStemDesc: string;
  spouseHint: string;
}
//src/types/saju.ts
export interface PromptInputInfo {
  name: string;
  gender: 'male' | 'female';
  birth: {
    year: number;
    month: number;
    day: number;
    hour?: number;
  };
  today: string; // YYYY-MM-DD 형식의 날짜 문자열
  lang?: 'ko' | 'en' | 'ja' | 'es'; // ✅ 추가
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

export interface NewYearInfo {
  name: string;
  gender: 'male' | 'female';
  birth: {
    year: number;
    month: number;
    day: number;
    hour?: number;
  };
  year: number; // 조회 연도
  lang: 'ko' | 'en' | 'ja' | 'es' 
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

export interface CoupleInfo {
  self: PersonInfo;
  partner: PersonInfo;
  selfSaju: SajuResult;
  partnerSaju: SajuResult;
}
