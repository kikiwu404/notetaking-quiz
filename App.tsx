import React, { useState, useMemo, useCallback } from 'react';
import { QUESTIONS, TOOLS, NOTE_TAKER_ARCHETYPES } from './constants';
import { Scores, ToolKey, NoteTakerType, ScoreKey } from './types';
import QuizCard from './components/QuizCard';
import ResultCard from './components/ResultCard';
import { NoteIcon } from './components/icons/AppIcon';

const LogoMarquee: React.FC = () => {
    const allTools = Object.values(TOOLS);
    const logos = [...allTools, ...allTools];

    return (
        <div className="w-full max-w-lg mx-auto mt-10 h-16 relative group flex items-center overflow-hidden bg-white/5 dark:bg-slate-800/20 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
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
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [scores, setScores] = useState<Scores>({
    // Archetypes
    architect: 0,
    gardener: 0,
    librarian: 0,
    // Tools
    notion: 0,
    obsidian: 0,
    heptabase: 0,
    appleNotes: 0,
    goodNotes: 0,
    evernote: 0,
  });
  const [isFinished, setIsFinished] = useState(false);

  const handleStart = () => {
    setQuizStarted(true);
  };
  
  const handleAnswer = useCallback((optionScores: Partial<Scores>) => {
    const newScores = { ...scores };
    for (const key in optionScores) {
      if (Object.prototype.hasOwnProperty.call(optionScores, key)) {
        const scoreKey = key as ScoreKey;
        newScores[scoreKey] += optionScores[scoreKey] || 0;
      }
    }
    setScores(newScores);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  }, [currentQuestionIndex, scores]);

  const handleRestart = () => {
    setQuizStarted(false);
    setIsFinished(false);
    setCurrentQuestionIndex(0);
    setScores({
      architect: 0,
      gardener: 0,
      librarian: 0,
      notion: 0,
      obsidian: 0,
      heptabase: 0,
      appleNotes: 0,
      goodNotes: 0,
      evernote: 0,
    });
  };

  const result = useMemo(() => {
    if (!isFinished) return null;

    // 1. Determine Archetype
    const archetypeScores = {
      [NoteTakerType.Architect]: scores.architect,
      [NoteTakerType.Gardener]: scores.gardener,
      [NoteTakerType.Librarian]: scores.librarian,
    };

    const topArchetype = Object.keys(archetypeScores).reduce((a, b) =>
      archetypeScores[a as NoteTakerType] > archetypeScores[b as NoteTakerType] ? a : b
    ) as NoteTakerType;

    // 2. Determine top 2 tools
    const toolScores: { key: ToolKey; score: number }[] = Object.values(ToolKey).map(key => ({
      key,
      score: scores[key],
    }));

    toolScores.sort((a, b) => b.score - a.score);

    const topTwoTools = toolScores.slice(0, 2).map(item => item.key);

    return {
      archetype: NOTE_TAKER_ARCHETYPES[topArchetype],
      tools: [TOOLS[topTwoTools[0]], TOOLS[topTwoTools[1]]] as [any, any],
    };
  }, [isFinished, scores]);


  const renderContent = () => {
    if (isFinished && result) {
      return <ResultCard archetype={result.archetype} tools={result.tools} onRestart={handleRestart} />;
    }

    if (quizStarted) {
      return (
        <QuizCard
          question={QUESTIONS[currentQuestionIndex]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={QUESTIONS.length}
        />
      );
    }

    return (
      <div className="text-center bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl max-w-lg mx-auto">
        <div className="mx-auto bg-indigo-100 dark:bg-indigo-900/50 rounded-full h-20 w-20 flex items-center justify-center">
          <NoteIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100 mt-6">
          找到最適合你的筆記工具
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
          你是哪種筆記人格？透過幾個問題，找到適合你的筆記工具！
        </p>
        <LogoMarquee />
        <button
          onClick={handleStart}
          className="mt-8 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
        >
          開始測驗
        </button>
      </div>
    );
  };

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-4 font-sans antialiased bg-slate-100 dark:bg-slate-900">
      {renderContent()}
    </main>
  );
};

export default App;