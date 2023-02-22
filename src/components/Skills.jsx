import React from 'react';
import { AiOutlineHtml5, AiFillGithub } from 'react-icons/ai';
import {
  TbBrandCss3,
  TbBrandNextjs,
  TbBrandBitbucket,
  TbBrandReactNative,
} from 'react-icons/tb';
import { DiJavascript1, DiScrum, DiGit } from 'react-icons/di';
import {
  SiTailwindcss,
  SiDart,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiClickup,
  SiJira,
  SiNodedotjs,
  SiTypescript,
} from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { RiFlutterFill, RiGitlabLine } from 'react-icons/ri';
import { BsKanban } from 'react-icons/bs';

import { ButtonWithText } from './Button';

export const Skills = () => {
  return (
    <div id="skills" className="pt-12">
      <div className="flex flex-col  justify-center items-center text-center">
        <h3 className="text-center tracking-widest font-extrabold text-2xl p-5 pb-3 m-4 text-[#5651e5] border-b-4 border-[#5651e5]">
          Habilidades
        </h3>

        <div className="flex flex-col  justify-center  gap-5 ">
          <div className="grid grid-cols-2  md:grid-cols-5 gap-10">
            <ButtonWithText
              text="html"
              icon={<AiOutlineHtml5 className="text-8xl" />}
            />
            <ButtonWithText
              text="Css"
              icon={<TbBrandCss3 className="text-8xl" />}
            />
            <ButtonWithText
              text="Dart"
              icon={<SiDart className="text-8xl" />}
            />
            <ButtonWithText
              text="Flutter"
              icon={<RiFlutterFill className="text-8xl" />}
            />
            <ButtonWithText text="Git" icon={<DiGit className="text-8xl" />} />
            <ButtonWithText
              text="JavaScript"
              icon={<DiJavascript1 className="text-8xl" />}
            />
            <ButtonWithText
              text="TypeScript"
              icon={<SiTypescript className="text-8xl" />}
            />
            <ButtonWithText
              text="React"
              icon={<GrReactjs className="text-8xl" />}
            />
            <ButtonWithText
              text="React Native"
              icon={<TbBrandReactNative className="text-8xl" />}
            />
            <ButtonWithText
              text="NextJs"
              icon={<TbBrandNextjs className="text-8xl" />}
            />
            <ButtonWithText
              text="Tailwind"
              icon={<SiTailwindcss className="text-8xl" />}
            />
            <ButtonWithText
              text="NestJs"
              icon={<SiNestjs className="text-8xl" />}
            />
            <ButtonWithText
              text="NodeJs"
              icon={<SiNodedotjs className="text-8xl" />}
            />
            <ButtonWithText
              text="MongoDb"
              icon={<SiMongodb className="text-8xl" />}
            />
            <ButtonWithText
              text="MySql"
              icon={<SiMysql className="text-8xl" />}
            />
            <ButtonWithText
              text="Scrum"
              icon={<DiScrum className="text-8xl" />}
            />
            <ButtonWithText
              text="Kanbam"
              icon={<BsKanban className="text-8xl" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
