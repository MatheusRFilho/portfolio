import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { IoArrowRedo } from 'react-icons/io5';

export const ProjectItem = ({ title, tech, linkLive, img, linkGit }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-10 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image className="rounded-xl group-hover:opacity-10" src={img} alt="/" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center m-auto pb-4">
          {title}
        </h3>
        {tech != null ? (
          <div className="pb-4  text-white text-center">{tech}</div>
        ) : null}
        <div className="flex flex-row gap-2 justify-center items-center m-auto">
          {linkGit != null ? (
            <Link href={linkGit} target="_blank">
              <div className="bg-white py-2 px-3 rounded-lg hover:scale-110  ease-in duration-300">
                <AiFillGithub />
              </div>
            </Link>
          ) : null}
          {linkLive != null ? (
            <Link href={linkLive} target="_blank">
              <div className="bg-white py-2 px-3 rounded-lg hover:scale-110  ease-in duration-300">
                <IoArrowRedo className="text-green-300" />
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
