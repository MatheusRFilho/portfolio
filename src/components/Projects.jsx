import React, { useState } from 'react';
import { ProjectItem } from './ProjectItem';
import { SectionTitle } from './SectionTitle';
import projectsData from '@/data/projects.json';
import { useApp } from '@/context/AppContext';

export const Projects = () => {
  const { t } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div className="flex justify-center items-center py-8" id="projects">
        <SectionTitle className="pt-2 mt-8">{t('sections.projects')}</SectionTitle>
      </div>
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 pb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {projectsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-600'
                }`}
              >
                {t(`projects.${cat.id}`)}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const translatedTitle = t(`projects.${project.id}`);
              const title = translatedTitle && !translatedTitle.startsWith('projects.') ? translatedTitle : project.title;
              return (
              <ProjectItem
                key={project.id}
                title={title}
                tech={project.tech}
                img={project.image}
                linkGit={project.linkGit}
                linkLive={project.linkLive}
              />
            );})}
          </div>
        </div>
      </div>
    </>
  );
};
