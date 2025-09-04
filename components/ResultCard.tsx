import React from 'react';
import { Tool, NoteTaker, NoteTakerType } from '../types';
import { PriceIcon, StarIcon, PlayIcon, LightbulbIcon } from './icons/AppIcon';
import { useI18n } from '../i18n';

interface ResultCardProps {
  archetype: NoteTaker;
  archetypeKey: NoteTakerType;
  tools: [Tool, Tool];
  onRestart: () => void;
}

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);

const ToolDisplay: React.FC<{ tool: Tool; archetypeKey: NoteTakerType; isPrimary?: boolean }> = ({ tool, archetypeKey, isPrimary = false }) => {
    const { t } = useI18n();
    const personalReason = tool.recommendationReason[archetypeKey];
    
    return (
        <div className="flex-1 w-full">
            <a 
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col h-full bg-white/40 p-6 rounded-xl w-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border backdrop-blur-sm ${isPrimary ? 'border-amber-400 mt-4 md:mt-0 shadow-lg' : 'border-white/20'}`}
            >
                {isPrimary && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-5 py-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white text-base font-bold uppercase rounded-full tracking-wider flex items-center gap-1.5 shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <StarIcon className="h-5 w-5" />
                        <span>{t('primaryRecommendation')}</span>
                    </div>
                )}
                <div className="flex items-center gap-4">
                    <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-slate-100">
                        <img src={tool.logo} alt={`${tool.name} Logo`} className="h-7 w-7 object-contain" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{tool.name}</h2>
                </div>
                
                {personalReason && (
                    <div className="mt-4 flex items-start text-sky-800 bg-sky-100/60 rounded-lg p-3 flex-grow">
                        <LightbulbIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-sky-500" />
                        <div>
                            <p className="font-bold text-sm">{t('toolReason')}</p>
                            <p className="text-sm mt-1">{personalReason}</p>
                        </div>
                    </div>
                )}

                <div className="mt-4">
                     <div className="flex items-center mb-3">
                        <PriceIcon className="h-5 w-5 text-slate-500 mr-2 flex-shrink-0" />
                        <span className="text-base font-semibold text-slate-700">{tool.price}</span>
                    </div>

                    <ul className="space-y-2 text-sm border-t border-slate-200/50 pt-3">
                        {tool.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-2 border-t border-slate-200/50 pt-3 mt-auto">
                    <div className="flex items-start text-indigo-700 bg-indigo-100/60 rounded-lg p-3 mt-3">
                       <PlayIcon className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                       <div>
                           <p className="font-bold text-sm">{t('toolFirstStep')}</p>
                           <p className="text-base mt-1">{tool.firstStep}</p>
                       </div>
                    </div>
                </div>

            </a>
        </div>
    );
};


const ResultCard: React.FC<ResultCardProps> = ({ archetype, archetypeKey, tools, onRestart }) => {
  const { t } = useI18n();
  const [tool1, tool2] = tools;

  return (
    <div className="w-full max-w-4xl glass-card p-6 sm:p-10 rounded-2xl shadow-2xl">
      <div className="text-center">
        <p className="text-lg font-semibold text-indigo-500">{t('yourArchetype')}</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold mt-2 gradient-text">{archetype.name}</h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          {archetype.description}
        </p>
      </div>

      <div className="mt-10 border-t border-white/20 pt-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-slate-800 mb-6">{t('recommendationTitle')}</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-4 md:items-stretch">
            <ToolDisplay tool={tool1} archetypeKey={archetypeKey} isPrimary={true} />
            <ToolDisplay tool={tool2} archetypeKey={archetypeKey} />
        </div>
      </div>

      <div className="text-center">
        <button
            onClick={onRestart}
            className="mt-10 gradient-button text-white font-bold py-2 px-6 sm:py-3 sm:px-8 text-base sm:text-lg rounded-full transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-lg"
        >
            {t('restart')}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
