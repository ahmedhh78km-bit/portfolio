import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 group' key={technology.name}>
          <div className='w-full h-full relative'>
            <BallCanvas icon={technology.icon} />
            <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'>
              <span className='text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded'>{technology.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
