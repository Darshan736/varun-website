import React, { useState } from 'react';
import CircleButton from './CircleButton';
import { User } from 'lucide-react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="pt-28 pb-16 min-h-screen flex items-center bg-[#f8f9fa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-5/12 flex justify-center md:justify-end">
             {/* 
                Profile Image Container 
             */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {!imageError ? (
                <img 
                  src="profile.jpg" 
                  alt="Varunkumar Salimath"
                  className="w-full h-full object-cover rounded-full drop-shadow-xl" 
                  onError={(e) => {
                    // Prevent infinite loop if fallback fails or standard error logging
                    setImageError(true);
                  }}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-100 flex flex-col items-center justify-center text-gray-400 shadow-inner border border-gray-200">
                   <User size={64} className="opacity-50 mb-2" />
                   <span className="text-xs font-bold text-gray-500">Image not found</span>
                   <span className="text-[10px] text-gray-400 mt-1">Check "profile.jpg"</span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-7/12 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 tracking-tight">
                Varunkumar Salimath
              </h1>
              
              <h2 className="text-sm font-bold tracking-widest text-black uppercase mb-4">
                A BIT ABOUT ME
              </h2>
              
              <div className="text-gray-600 space-y-4 leading-relaxed text-lg">
                <p>
                  I am currently pursuing my <strong>B.E. in Electronics Engineering (VD&T)</strong> at KLE Technological University, Hubballi. 
                  My academic foundation is built on a strong performance in my Diploma in Electronics and Communication Engineering.
                </p>
                
                <p>
                  I have developed technical proficiency in <strong>VLSI Design</strong> and <strong>Semiconductor Packaging</strong>. 
                  My skillset includes working with industry-standard EDA tools like <strong>Cadence Virtuoso, Innovus, and Allegro Package Designer</strong>.
                </p>

                <p>
                  My work spans from Standard Cell Library Design to Advanced Packaging (UCIe) and IoT-based system development. 
                  I am passionate about bridging the gap between schematic logic and silicon reality.
                </p>
              </div>
            </div>

            {/* Circular Buttons Grid - Widgets */}
            <div className="flex flex-wrap gap-6 pt-4 justify-start">
              <CircleButton 
                label="Resume" 
                colorClass="bg-[#dce775] hover:bg-[#d4e157]" // Lime
                href="#resume"
              />
              <CircleButton 
                label="Projects" 
                colorClass="bg-[#ffb74d] hover:bg-[#ffa726]" // Orange
                href="#projects"
              />
              <CircleButton 
                label="Skills" 
                colorClass="bg-[#80deea] hover:bg-[#4dd0e1]" // Cyan/Teal
                href="#skills"
              />
              <CircleButton 
                label="Education" 
                colorClass="bg-[#b39ddb] hover:bg-[#9575cd]" // Lavender
                href="#education"
              />
              <CircleButton 
                label="Contact" 
                colorClass="bg-[#cfd8dc] hover:bg-[#b0bec5]" // Grey
                href="#contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;