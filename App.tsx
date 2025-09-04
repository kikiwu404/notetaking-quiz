import React, { useState, useMemo, useCallback } from 'react';
import { getQuestions, getTools, getNoteTakerArchetypes } from './data';
import { Scores, ToolKey, NoteTakerType, ScoreKey } from './types';
import QuizCard from './components/QuizCard';
import ResultCard from './components/ResultCard';
import { NoteIcon } from './components/icons/AppIcon';
import { useI18n, useLang } from './i18n';

const LogoMarquee: React.FC = () => {
    const { lang } = useLang();
    const TOOLS = useMemo(() => getTools(lang), [lang]);
    const allTools = Object.values(TOOLS);
    const logos = [...allTools, ...allTools];

    return (
        <div className="w-full max-w-lg mx-auto mt-10 h-16 relative group flex items-center overflow-hidden bg-white/20 rounded-full [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] backdrop-blur-sm border border-white/20">
            <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
                {logos.map((tool, index) => {
                    return (
                        <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center" title={tool.name}>
                            <img src={tool.logo} alt={`${tool.name} Logo`} className="h-10 w-auto" />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


const App: React.FC = () => {
  const { t, lang } = useI18n();
  const { setLang } = useLang();
  
  const QUESTIONS = useMemo(() => getQuestions(lang), [lang]);
  const TOOLS = useMemo(() => getTools(lang), [lang]);
  const NOTE_TAKER_ARCHETYPES = useMemo(() => getNoteTakerArchetypes(lang), [lang]);

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({
    architect: 0, gardener: 0, librarian: 0,
    notion: 0, obsidian: 0, heptabase: 0, appleNotes: 0, goodNotes: 0, evernote: 0,
  });
  const [isFinished, setIsFinished] = useState(false);
  const [answerHistory, setAnswerHistory] = useState<Partial<Scores>[]>([]);

  const handleStart = () => setQuizStarted(true);
  
  const handleAnswer = useCallback((optionScores: Partial<Scores>) => {
    const newScores = { ...scores };
    for (const key in optionScores) {
      if (Object.prototype.hasOwnProperty.call(optionScores, key)) {
        const scoreKey = key as ScoreKey;
        newScores[scoreKey] += optionScores[scoreKey] || 0;
      }
    }
    setScores(newScores);
    setAnswerHistory(prev => [...prev, optionScores]);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  }, [currentQuestionIndex, scores, QUESTIONS.length]);

  const handleBack = () => {
    if (currentQuestionIndex === 0) return;

    const lastScores = answerHistory[answerHistory.length - 1];
    
    const newScores = { ...scores };
    if (lastScores) {
        for (const key in lastScores) {
            if (Object.prototype.hasOwnProperty.call(lastScores, key)) {
                const scoreKey = key as ScoreKey;
                newScores[scoreKey] -= lastScores[scoreKey] || 0;
            }
        }
    }
    
    setScores(newScores);
    setAnswerHistory(prev => prev.slice(0, -1));
    setCurrentQuestionIndex(prev => prev - 1);
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setScores({
      architect: 0, gardener: 0, librarian: 0,
      notion: 0, obsidian: 0, heptabase: 0, appleNotes: 0, goodNotes: 0, evernote: 0,
    });
    setAnswerHistory([]);
  };

  const result = useMemo(() => {
    if (!isFinished) return null;

    const archetypeScores = {
      [NoteTakerType.Architect]: scores.architect,
      [NoteTakerType.Gardener]: scores.gardener,
      [NoteTakerType.Librarian]: scores.librarian,
    };

    const topArchetype = Object.keys(archetypeScores).reduce((a, b) =>
      archetypeScores[a as NoteTakerType] > archetypeScores[b as NoteTakerType] ? a : b
    ) as NoteTakerType;

    const toolScores: { key: ToolKey; score: number }[] = Object.values(ToolKey).map(key => ({
      key,
      score: scores[key],
    }));

    toolScores.sort((a, b) => b.score - a.score);

    const topTwoTools = toolScores.slice(0, 2).map(item => item.key);

    return {
      archetype: NOTE_TAKER_ARCHETYPES[topArchetype],
      archetypeKey: topArchetype,
      tools: [TOOLS[topTwoTools[0]], TOOLS[topTwoTools[1]]] as [any, any],
    };
  }, [isFinished, scores, NOTE_TAKER_ARCHETYPES, TOOLS]);


  const renderContent = () => {
    if (isFinished && result) {
      return <ResultCard archetype={result.archetype} archetypeKey={result.archetypeKey} tools={result.tools} onRestart={handleRestart} />;
    }

    if (quizStarted) {
      return (
        <QuizCard
          question={QUESTIONS[currentQuestionIndex]}
          onAnswer={handleAnswer}
          onBack={handleBack}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={QUESTIONS.length}
        />
      );
    }

    return (
      <div className="text-center glass-card p-6 sm:p-10 shadow-2xl w-11/12 max-w-lg mx-auto">
        <div className="mx-auto bg-white/30 rounded-full h-16 w-16 flex items-center justify-center border border-white/40 shadow-inner">
          <NoteIcon className="h-8 w-8 text-indigo-500" />
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-800 mt-6"
            dangerouslySetInnerHTML={{ __html: t('quizTitle').replace('<1>', '<span class="gradient-text">').replace('</1>', '</span>') }}
        />
        <p className="text-slate-600 mt-4 text-base sm:text-lg">
          {t('quizSubtitle1')}
        </p>
         <p className="text-slate-600 mt-2 text-base sm:text-lg">
          {t('quizSubtitle2')}
        </p>
    
        <LogoMarquee />
        <button
          onClick={handleStart}
          className="mt-8 gradient-button text-white font-bold py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
        >
          {t('startQuiz')}
        </button>
      </div>
    );
  };

  const LanguageSwitcher = () => (
    <div className="flex justify-center items-center gap-2 mb-2 text-sm">
      <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-md transition-colors ${lang === 'en' ? 'text-purple-600 font-bold' : 'text-slate-500 hover:text-purple-500'}`}>English</button>
      <span className="text-slate-400">|</span>
      <button onClick={() => setLang('zh-TW')} className={`px-2 py-1 rounded-md transition-colors ${lang === 'zh-TW' ? 'text-purple-600 font-bold' : 'text-slate-500 hover:text-purple-500'}`}>繁體中文</button>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex flex-col font-sans antialiased">
      <main className="w-full flex-grow flex items-center justify-center p-4">
        {renderContent()}
      </main>
      <footer className="w-full text-center p-4 pb-6 text-slate-600 text-sm flex-shrink-0 opacity-80">
        <LanguageSwitcher />
        <p className="mb-2" dangerouslySetInnerHTML={{ __html: t('coffee').replace('<1>', `<a href="https://donate.stripe.com/6oUcN5287auP8Hva1dg360f" target="_blank" rel="noopener noreferrer" class="underline hover:text-purple-500 transition-colors">`).replace('</1>', '</a>') }} />
        <p>&copy; {new Date().getFullYear()} <a href="https://instagram.com/kikiwu404" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-500 transition-colors">Kiki Wu</a>. {t('rightsReserved')}</p>
      </footer>
    </div>
  );
};

export default App;
