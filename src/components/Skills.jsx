import React from 'react';
import { SectionTitle } from './SectionTitle';
import { useApp } from '@/context/AppContext';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { TbBrandCss3, TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb';
import { DiJavascript1, DiScrum, DiGit } from 'react-icons/di';
import {
  SiTailwindcss,
  SiDart,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiBootstrap,
  SiPrisma,
  SiStrapi,
  SiJenkins,
  SiRancher,
  SiMaterialui,
  SiChakraui,
} from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { RiFlutterFill } from 'react-icons/ri';
import { BsKanban } from 'react-icons/bs';
import { FaGithub, FaGitlab, FaBitbucket } from 'react-icons/fa';
import { ButtonWithText } from './Button';

const iconClass = 'text-6xl md:text-7xl';

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    skills: [
      { text: 'HTML', icon: <AiOutlineHtml5 className={iconClass} /> },
      { text: 'CSS', icon: <TbBrandCss3 className={iconClass} /> },
      { text: 'JavaScript', icon: <DiJavascript1 className={iconClass} /> },
      { text: 'TypeScript', icon: <SiTypescript className={iconClass} /> },
      { text: 'Dart', icon: <SiDart className={iconClass} /> },
    ],
  },
  {
    id: 'frontend',
    skills: [
      { text: 'React', icon: <GrReactjs className={iconClass} /> },
      { text: 'Next.js', icon: <TbBrandNextjs className={iconClass} /> },
      { text: 'React Native', icon: <TbBrandReactNative className={iconClass} /> },
      { text: 'Flutter', icon: <RiFlutterFill className={iconClass} /> },
      { text: 'Tailwind', icon: <SiTailwindcss className={iconClass} /> },
      { text: 'Bootstrap', icon: <SiBootstrap className={iconClass} /> },
      { text: 'Material UI', icon: <SiMaterialui className={iconClass} /> },
      { text: 'Chakra UI', icon: <SiChakraui className={iconClass} /> },
    ],
  },
  {
    id: 'backend',
    skills: [
      { text: 'Node.js', icon: <SiNodedotjs className={iconClass} /> },
      { text: 'Nest.js', icon: <SiNestjs className={iconClass} /> },
      { text: 'MongoDB', icon: <SiMongodb className={iconClass} /> },
      { text: 'MySQL', icon: <SiMysql className={iconClass} /> },
      { text: 'PostgreSQL', icon: <SiPostgresql className={iconClass} /> },
      { text: 'Prisma', icon: <SiPrisma className={iconClass} /> },
      { text: 'TypeORM', icon: <SiPrisma className={iconClass} /> },
      { text: 'Strapi', icon: <SiStrapi className={iconClass} /> },
    ],
  },
  {
    id: 'tools',
    skills: [
      { text: 'Git', icon: <DiGit className={iconClass} /> },
      { text: 'GitHub', icon: <FaGithub className={iconClass} /> },
      { text: 'GitLab', icon: <FaGitlab className={iconClass} /> },
      { text: 'Bitbucket', icon: <FaBitbucket className={iconClass} /> },
      { text: 'Jenkins', icon: <SiJenkins className={iconClass} /> },
      { text: 'Rancher', icon: <SiRancher className={iconClass} /> },
      { text: 'Scrum', icon: <DiScrum className={iconClass} /> },
      { text: 'Kanban', icon: <BsKanban className={iconClass} /> },
    ],
  },
];

export const Skills = () => {
  const { t } = useApp();
  return (
    <div id="skills" className="py-8">
      <div className="flex flex-col justify-center items-center text-center">
        <SectionTitle>{t('sections.skills')}</SectionTitle>

        <div className="w-full max-w-6xl mx-auto px-4">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.id} className="mb-8 last:mb-0">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                {t(`skills.${category.id}`)}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {category.skills.map((skill) => (
                  <ButtonWithText
                    key={skill.text}
                    text={skill.text}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
