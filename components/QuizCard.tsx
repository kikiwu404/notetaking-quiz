
import React from 'react';
import { Question, Option } from '../types';

interface QuizCardProps {
  question: Question;
  onAnswer: (scores: Partial<Record<string, number>>) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer, questionNumber, totalQuestions }) => {
  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl transition-all duration-300">
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            問題 {questionNumber} / {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div
            className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
            style={{ width: `${progressPercentage}%`, transition: 'width 0.5s ease-in-out' }}
          ></div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mt-8">
        {question.text}
      </h2>

      <div className="mt-8 space-y-4">
        {question.options.map((option: Option, index: number) => (
          <button
            key={index}
            onClick={() => onAnswer(option.scores)}
            className="w-full text-left p-4 sm:p-5 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-transparent hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all duration-200 group"
          >
            <span className="text-lg text-slate-700 dark:text-slate-200 group-hover:text-indigo-800 dark:group-hover:text-white font-medium">
              {option.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;
