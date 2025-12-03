import React from 'react';
import { SkillCategory } from '../types';

const skillsData: SkillCategory[] = [
  {
    category: "EDA Tools",
    skills: [
      "Cadence Virtuoso", 
      "Cadence Quantus", 
      "Cadence Genus", 
      "Cadence Innovus", 
      "Allegro Package Designer", 
      "Proteus VSM"
    ]
  },
  {
    category: "Languages & Others",
    skills: ["C", "Verilog"]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-8 border-[#80deea] pl-4">
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <span key={skill} className="bg-[#e0f7fa] text-[#006064] px-4 py-2 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;