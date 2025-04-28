import React from 'react';
import { cn } from '../lib/utils';


const EducationCard = ({ type, title, details, ageRange }) => {
  const typeColors = {
    kindergarten: 'bg-[#ce5bfa] text-white',
    primary: 'bg-[#3186e3] text-white',
    secondary: 'bg-[#f7a046] text-white',
    advanced: 'bg-[#c4322f] text-white',
  };

  const typeSquareColors = {
    kindergarten: 'bg-[#b347e2]',
    primary: 'bg-[#4394f7]',
    secondary: 'bg-[#f7a046]',
    advanced: 'bg-[#c4322f]',
  };

  return (
    <div className="relative flex flex-col">
      <div className={cn("absolute mt-8 py-1 px-4 rounded-md w-fit z-30 font-medium shadow-md", typeColors[type])}>
        {title}
      </div>
      <div className="mt-10 ml-1.5 mr-1.5 bg-white p-4 rounded-lg shadow-lg w-54 pt-10 z-10">
        <p className="w-30 font-semibold text-gray-800">{details}</p>
        <p className="text-gray-600 mt-1">Age: {ageRange}</p>
      </div>
      <div className={cn("w-16 h-16 absolute right-0 z-20 top-8 rounded-bl-3xl rounded-tr-2xl shadow-2xl", typeSquareColors[type])}></div>
    </div>
  );
};

const Education = () => {
  return (
    <div className=" grid-background py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#f7a046]">
          Our Education Pathway
        </h1>

        <div className="relative">
          
          {/* Education pathway timeline */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center px-20 md:mt-55 gap-2 md:gap-6 ">
            <div className="md:mt-0">
              <EducationCard 
                type="kindergarten"
                title="Kindergarten"
                details="Early Childhood Education"
                ageRange="(N1 – K2) 2 – 6"
              />
            </div>
            
            <div className="md:-mt-35">
              <EducationCard 
                type="primary"
                title="Primary"
                details="Primary Education"
                ageRange="(P1 – P6) 6 – 12"
              />
            </div>
            
            <div className="md:-mt-65">
              <EducationCard 
                type="secondary"
                title="Secondary"
                details="Secondary Education"
                ageRange="(S1 – S6) 12 – 15"
              />
            </div>
            
            <div className="md:-mt-95">
              <EducationCard 
                type="advanced"
                title="Advanced Level"
                details="As/A Level Education"
                ageRange="15 – 16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
