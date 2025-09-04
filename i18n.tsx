import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'zh-TW';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getInitialLang = (): Language => {
  if (typeof window !== 'undefined' && window.navigator) {
    const browserLang = window.navigator.language;
    if (!browserLang.toLowerCase().startsWith('zh')) {
      return 'en';
    }
  }
  return 'zh-TW';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(getInitialLang);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    quizTitle: "Find Your Perfect <1>Note-Taking App</1>",
    quizSubtitle1: "Feeling lost in the world of note-taking apps?",
    quizSubtitle2: "Discover your note-taking style and find the perfect tool for you!",
    startQuiz: "Start Quiz",
    coffee: "Enjoy this quiz? <1>Buy me a coffee ☕️</1>",
    rightsReserved: "All rights reserved.",
    question: "Question",
    back: "Back",
    yourArchetype: "Your note-taking personality is...",
    recommendationTitle: "Your Recommended Tools",
    toolReason: "Why you'll love it",
    toolFirstStep: "Your First Step",
    primaryRecommendation: "Top Pick",
    restart: "Retake the Quiz",
  },
  'zh-TW': {
    quizTitle: "找到最適合你的<1>筆記工具</1>",
    quizSubtitle1: "筆記工具好多好難選？",
    quizSubtitle2: "了解自己的筆記風格，找到最適合的工具！",
    startQuiz: "開始測驗",
    coffee: "喜歡這個小測驗？<1>請我喝杯咖啡 ☕️</1>",
    rightsReserved: "All rights reserved.",
    question: "問題",
    back: "返回",
    yourArchetype: "你的筆記風格是...",
    recommendationTitle: "為您推薦的工具",
    toolReason: "為什麼它適合你",
    toolFirstStep: "第一步行動建議",
    primaryRecommendation: "最推薦",
    restart: "再玩一次",
  },
};

export const useI18n = () => {
  const { lang } = useLang();
  
  const t = (key: keyof typeof translations.en) => {
    return translations[lang][key] || translations['en'][key];
  };

  return { t, lang };
};