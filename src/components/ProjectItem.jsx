import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoArrowRedo } from 'react-icons/io5';
import { TechIcons } from './TechIcons';
import { useApp } from '@/context/AppContext';

export const ProjectItem = ({ title, tech, linkLive, img, linkGit }) => {
  const { t } = useApp();
  const techArray = Array.isArray(tech) ? tech : null;

  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden rounded-xl shadow-lg shadow-gray-200 dark:shadow-slate-800 group transition-shadow duration-300 hover:shadow-xl">
      <div className="relative w-full aspect-[4/3]">
        <Image
          className="rounded-xl object-cover transition-opacity duration-300 group-hover:opacity-20"
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-r from-primary to-[#709dff] opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
          <h3 className="text-xl md:text-2xl text-white font-semibold tracking-wide text-center mb-3 drop-shadow-sm">
            {title}
          </h3>
          {techArray && techArray.length > 0 ? (
            <div className="mb-4 text-white flex gap-2 justify-center items-center">
              <TechIcons tech={techArray} />
            </div>
          ) : null}
          <div className="flex flex-row gap-3 justify-center items-center">
            {linkGit != null ? (
              <Link
                href={linkGit}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white py-2 px-4 rounded-lg hover:scale-110 transition-transform duration-300 border border-gray-100"
                aria-label={t('projectItem.viewGitHub')}
              >
                <AiFillGithub className="text-gray-800" size={24} />
              </Link>
            ) : null}
            {linkLive != null ? (
              <Link
                href={linkLive}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white py-2 px-4 rounded-lg hover:scale-110 transition-transform duration-300 border border-gray-100"
                aria-label={t('projectItem.openProject')}
              >
                <IoArrowRedo className="text-primary" size={24} />
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
