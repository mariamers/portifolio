import React from 'react';
import { getColorClass } from './utils/Colors';

const sizeClasses = {
  s: "p-4 text-sm",      // Pequeno
  m: "p-8 text-sm justify-end pr-12",      // Médio
  b: "py-24 pl-12 pr-64 justify-center gap-6 ",     // Grande
};
const headingSizeClasses = {
  s: "text-xl",          // Pequeno
  m: "text-lg font-semibold",         // Médio
  b: "text-5xl font-bold",         // Grande
};

const Card = ({ title, children, color, size = 'default' }) => {
  const colorClass = getColorClass(color);
  const sizeClass = sizeClasses[size] || sizeClasses.m;
  const headingSizeClass = headingSizeClasses[size] || headingSizeClasses.m;


  return (
    <div className={`overflow-hidden flex flex-grow text-left flex-col items-start relative border-4 rounded-xl border-black ${colorClass} ${sizeClass}`}>
      <h2 className={`transition font-semibold  ${headingSizeClass}`}>{title ? title : "Title"}</h2>
      {children ? children : 'Body text for whatever you’d like to say. '}
    </div>
  );
};

export default Card;
