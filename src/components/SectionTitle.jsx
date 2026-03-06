import React from 'react';

export const SectionTitle = ({ children, className = '' }) => {
  return (
    <h3
      className={`text-center tracking-widest font-extrabold text-2xl p-3 pb-2 m-2 text-primary border-b-4 border-primary ${className}`}
    >
      {children}
    </h3>
  );
};
