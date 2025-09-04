import React from 'react';
import { Tool, NoteTaker, NoteTakerType } from '../types';
import { PriceIcon, StarIcon, PlayIcon, LightbulbIcon } from './icons/AppIcon';

interface ResultCardProps {
  archetype: NoteTaker;
  archetypeKey: NoteTakerType;
  tools: [Tool, Tool];
  onRestart: () => void;
}

// Material Icon: 'check_circle'
const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);

const ToolDisplay: React.FC<{ tool: Tool; archetypeKey: NoteTakerType; isPrimary?: boolean }> = ({ tool, archetypeKey, isPrimary = false }) => {
    const personalReason = tool.recommendationReason[archetypeKey];
    
    return (
        <div className="flex-1 relative w-full"> {/* Wrapper for positioning context and flex sizing */}
            {isPrimary && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-3 py-1 bg-amber-400 text-white text-xs font-bold uppercase rounded-full tracking-wider flex items-center gap-1 shadow-lg">
                    <StarIcon className="h-4 w-4" />
                    <span>最推薦</span>
                </div>
            )}
            <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col h-full bg-slate-50 dark:bg-slate-700/50 p-6 rounded-xl w-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 border-2 ${isPrimary ? 'border-amber-400 dark:border-amber-500 mt-4 md:mt-0' : 'border-transparent'}`}
            >
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-600">
                        <img src={tool.logo} alt={`${tool.name} Logo`} className="h-7 w-7 object-contain" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{tool.name}</h2>
                </div>
                
                {personalReason && (
                    <div className="mt-4 flex items-start text-sky-800 dark:text-sky-200 bg-sky-50 dark:bg-sky-900/50 rounded-lg p-3 flex-grow">
                        <LightbulbIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-sky-500" />
                        <div>
                            <p className="font-bold text-sm">為什麼它適合你</p>
                            <p className="text-sm mt-1">{personalReason}</p>
                        </div>
                    </div>
                )}

                <div className="mt-4">
                     <div className="flex items-center mb-3">
                        <PriceIcon className="h-5 w-5 text-slate-500 dark:text-slate-400 mr-2 flex-shrink-0" />
                        <span className="text-base font-semibold text-slate-700 dark:text-slate-200">{tool.price}</span>
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

                <div className="space-y-2 border-t border-slate-200 dark:border-slate-600/50 pt-3 mt-auto">
                    <div className="flex items-start text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg p-3 mt-3">
                       <PlayIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                       <div>
                           <p className="font-bold text-sm">第一步行動建議</p>
                           <p className="text-base mt-1">{tool.firstStep}</p>
                       </div>
                    </div>
                </div>

            </a>
        </div>
    );
};


const ResultCard: React.FC<ResultCardProps> = ({ archetype, archetypeKey, tools, onRestart }) => {
  const [tool1, tool2] = tools;

  return (
    <div className="w-full max-w-4xl bg-white dark:bg-slate-800 p-8 sm:p-12 rounded-2xl shadow-xl">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">你的筆記風格是...</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-slate-100 mt-2">{archetype.name}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          {archetype.description}
        </p>
      </div>

      <div className="mt-10 border-t border-slate-200 dark:border-slate-700 pt-8">
        <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100 mb-6">為您推薦的工具</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-4 md:items-stretch">
            <ToolDisplay tool={tool1} archetypeKey={archetypeKey} isPrimary={true} />
            <ToolDisplay tool={tool2} archetypeKey={archetypeKey} />
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