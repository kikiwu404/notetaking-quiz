import React from 'react';
import { Question, Option } from '../types';
import { BackIcon } from './icons/AppIcon';
import { useI18n } from '../i18n';

interface QuizCardProps {
  question: Question;
  onAnswer: (scores: Partial<Record<string, number>>) => void;
  onBack: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, onBack, questionNumber, totalQuestions }) => {
  const { t } = useI18n();
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl glass-card p-6 sm:p-8 rounded-2xl shadow-2xl transition-all duration-300">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-indigo-500">
            {t('question')} {questionNumber} / {totalQuestions}
          </span>
          {questionNumber > 1 && (
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
              aria-label="Previous question"
            >
              <BackIcon className="h-4 w-4" />
              <span>{t('back')}</span>
            </button>
          )}
        </div>
        <div className="w-full bg-white/20 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out' }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl sm:text-3xl font-bold text-slate-800 mt-8">
        {question.text}
      </h2>

      <div className="mt-8 space-y-4">
        {question.options.map((option: Option, index: number) => (
          <button
            key={index}
            onClick={() => onAnswer(option.scores)}
            className="answer-option w-full text-left p-4 bg-slate-100/90 rounded-xl transition-all duration-200 group hover:bg-indigo-100/70 hover:scale-[1.02] hover:shadow-lg active:scale-95"
          >
            <span className="text-base sm:text-lg text-slate-700 font-medium">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
