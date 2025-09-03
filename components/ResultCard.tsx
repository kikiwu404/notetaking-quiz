import React from 'react';
import { Tool, NoteTaker } from '../types';
import { PriceIcon, CrownIcon } from './icons/AppIcon';

interface ResultCardProps {
  archetype: NoteTaker;
  tools: [Tool, Tool];
  onRestart: () => void;
}

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ToolDisplay: React.FC<{ tool: Tool; isPrimary?: boolean }> = ({ tool, isPrimary = false }) => {
    return (
        <div className="flex-1 relative"> {/* Wrapper for positioning context and flex sizing */}
            {isPrimary && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-amber-400 text-white text-xs font-bold uppercase rounded-full tracking-wider flex items-center gap-1 shadow-lg">
                    <CrownIcon className="h-4 w-4" />
                    <span>最推薦</span>
                </div>
            )}
            <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col h-full bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl w-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-2 ${isPrimary ? 'border-amber-400 dark:border-amber-500 mt-3' : 'border-transparent'}`}
            >
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-600">
                        <img src={tool.logo} alt={`${tool.name} Logo`} className="h-7 w-7 object-contain" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{tool.name}</h2>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 flex-grow">{tool.description}</p>
                
                <div className="mt-4">
                     <div className="flex items-center mb-3">
                        <PriceIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-2 flex-shrink-0" />
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{tool.price}</span>
                    </div>
                    <ul className="space-y-2 text-sm border-t border-slate-200 dark:border-slate-600/50 pt-3">
                        {tool.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </a>
        </div>
    );
};


const ResultCard: React.FC<ResultCardProps> = ({ archetype, tools, onRestart }) => {
  const [tool1, tool2] = tools;

  return (
    <div className="w-full max-w-4xl bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">您的筆記人格是...</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mt-2">{archetype.name}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {archetype.description}
        </p>
      </div>

      <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 mb-6">為您推薦的工具</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-8">
            <ToolDisplay tool={tool1} isPrimary={true} />
            <ToolDisplay tool={tool2} />
        </div>
      </div>

      <div className="text-center">
        <button
            onClick={onRestart}
            className="mt-10 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
        >
            再玩一次
        </button>
      </div>
    </div>
  );
};

export default ResultCard;