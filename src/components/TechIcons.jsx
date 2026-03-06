import React from 'react';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiNodedotjs, SiTypescript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';

const TECH_ICONS = {
  react: GrReactjs,
  'react-native': TbBrandReactNative,
  node: SiNodedotjs,
  typescript: SiTypescript,
};

export const TechIcons = ({ tech = [] }) => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      {tech.map((name) => {
        const Icon = TECH_ICONS[name.toLowerCase()];
        return Icon ? <Icon key={name} size={24} /> : null;
      })}
    </div>
  );
};
