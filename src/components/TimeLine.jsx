import React from 'react';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import timelineData from '@/data/timeline.json';
import { useApp } from '@/context/AppContext';

export const TimeLine = () => {
  const { t, lang } = useApp();
  return (
    <div className="container max-w-4xl mx-auto px-4 py-4">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2">
        {timelineData.items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const Icon = item.type === 'work' ? MdWorkOutline : HiOutlineBookOpen;
          const en = item.en;
          const title = lang === 'en' && en ? en.title : item.title;
          const institution = lang === 'en' && en ? (en.institution || en.company) : (item.institution || item.company);
          const duration = lang === 'en' && en ? en.duration : item.duration;
          const location = lang === 'en' && en ? en.location : item.location;
          const description = lang === 'en' && en ? en.description : item.description;

          if (isLeft) {
            return (
              <div key={index} className="flex flex-row-reverse md:contents">
                <div className="bg-white dark:bg-slate-800 col-start-1 col-end-5 p-4 rounded-lg my-3 ml-auto shadow-lg dark:shadow-slate-900 border-l-4 border-primary transition-shadow hover:shadow-xl mr-10 md:mr-0">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                    {title}
                  </h3>
                  <p className="leading-relaxed text-justify mb-1 text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      {item.type === 'work' ? t('timeline.company') : t('timeline.institution')}
                    </span>
                    {institution}
                  </p>
                  <p className="leading-relaxed text-justify mb-1 text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-gray-700 dark:text-gray-300">{t('timeline.duration')}</span>
                    {duration}
                  </p>
                  {location && (
                    <p className="leading-relaxed text-justify mb-1 text-gray-600 dark:text-gray-400">
                      <span className="font-bold text-gray-700 dark:text-gray-300">{t('timeline.location')}</span>
                      {location}
                    </p>
                  )}
                  <p className="leading-relaxed text-justify text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-gray-700 dark:text-gray-300">
                      {item.type === 'work' ? t('timeline.workedOn') : t('timeline.studied')}
                    </span>
                    {description}
                  </p>
                </div>
                <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-primary pointer-events-none"></div>
                  </div>
                  <div className="rounded-full bg-primary border-4 border-white shadow-md w-10 h-10 absolute top-1/2 -mt-5 left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                    <Icon className="text-white" size={20} />
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="flex md:contents">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-primary pointer-events-none"></div>
                </div>
                <div className="w-10 h-10 absolute top-1/2 -mt-3 rounded-full bg-primary border-4 border-white shadow-md left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                  <Icon className="text-white" size={20} />
                </div>
              </div>
              <div className="bg-white dark:bg-slate-800 col-start-6 col-end-10 p-4 rounded-lg my-3 mr-auto shadow-lg dark:shadow-slate-900 border-l-4 border-primary transition-shadow hover:shadow-xl">
                <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  {title}
                </h3>
                <p className="leading-relaxed text-justify mb-1 text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {item.type === 'work' ? t('timeline.company') : t('timeline.institution')}
                  </span>
                  {institution}
                </p>
                <p className="leading-relaxed text-justify mb-1 text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-700 dark:text-gray-300">{t('timeline.duration')}</span>
                  {duration}
                </p>
                {location && (
                  <p className="leading-relaxed text-justify mb-1 text-gray-600 dark:text-gray-400">
                    <span className="font-bold text-gray-700 dark:text-gray-300">{t('timeline.location')}</span>
                    {location}
                  </p>
                )}
                <p className="leading-relaxed text-justify text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    {item.type === 'work' ? t('timeline.workedOn') : t('timeline.studied')}
                  </span>
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
