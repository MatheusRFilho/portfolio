import Image from 'next/image';
import React from 'react';
import code from '../../public/assets/about-pt.png';
import { SectionTitle } from './SectionTitle';
import aboutData from '@/data/social';
import { useApp } from '@/context/AppContext';

export const Infos = () => {
  const { t } = useApp();
  const sobre = t('about.sobre') || '';
  const stack = aboutData.stack || [];
  const idiomas = (t('about.idiomas') || '').split(' • ').filter(Boolean);

  return (
    <div className="flex justify-between sm:flex flex-col md:flex-row items-center">
      <div className="md:w-[50%] text-center p-4 sm:w-full sm:p-3 items-center">
        <div className="flex justify-center items-center">
          <SectionTitle>{t('sections.about')}</SectionTitle>
        </div>
        <div className="text-left mt-3 md:px-8 tracking-wide text-gray-600 dark:text-gray-400 leading-relaxed space-y-3">
          {sobre.split('\n\n').map((paragrafo, i) => (
            <p key={i}>{paragrafo}</p>
          ))}
          {stack.length > 0 && (
            <div className="mt-4">
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-2">{t('about.stack')}</p>
              <p>{stack.join(' • ')}</p>
            </div>
          )}
          {idiomas.length > 0 && (
            <div className="mt-2">
              <p className="font-bold text-gray-700 dark:text-gray-300 mb-2">{t('about.languages')}</p>
              <p>{idiomas.join(' • ')}</p>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-[50%] p-4 sm:w-full">
        <Image src={code} alt={t('alt.codeImage')} />
      </div>
    </div>
  );
};
