import React from 'react';

import { Infos } from './infos';

export const About = () => {
  return (
    <div
      className="w-full md:h-screen flex items-center pt-24 m-auto "
      id="about"
    >
      <div className="m-auto">
        <div className="mb-8">
          <Infos />
        </div>
      </div>
    </div>
  );
};
