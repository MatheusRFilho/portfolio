import React from 'react';

export const ButtonWithText = ({ text, icon }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center p-4 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-900 hover:shadow-lg hover:scale-105 hover:border-primary transition-all duration-300 group">
      <div className="transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <p className="uppercase text-center font-bold pt-2 tracking-wider text-gray-700 dark:text-gray-200">
        {text}
      </p>
    </div>
  );
};
