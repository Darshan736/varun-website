import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-8 border-[#dce775] pl-4">
          Education
        </h2>
        
        <div className="space-y-12">
          
          {/* BE */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-100 pb-8">
            <div className="md:w-3/4">
               <h3 className="text-2xl font-bold text-gray-900">KLE Technological University, Hubballi</h3>
               <p className="text-xl text-gray-600 mb-1">B.E. Electronics Engineering (VD&T)</p>
               <p className="text-lg text-gray-800 font-medium">CGPA: 7.42</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">
                10/2023 – Present
              </span>
            </div>
          </div>

          {/* Diploma */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-gray-100 pb-8">
            <div className="md:w-3/4">
               <h3 className="text-2xl font-bold text-gray-900">M.L. Bharatesh Polytechnic, Belagavi</h3>
               <p className="text-xl text-gray-600 mb-1">Diploma in Electronics and Communication Engineering</p>
               <p className="text-lg text-gray-800 font-medium">CGPA: 9.68</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">
                02/2020 – 08/2023
              </span>
            </div>
          </div>

          {/* School */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="md:w-3/4">
               <h3 className="text-2xl font-bold text-gray-900">Little Scholars Academy High School, Belagavi</h3>
               <p className="text-xl text-gray-600 mb-1">Secondary School</p>
               <p className="text-lg text-gray-800 font-medium">Percentage: 69.6%</p>
            </div>
            <div className="mt-4 md:mt-0 md:text-right">
              <span className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm font-semibold text-gray-700">
                06/2019 – 03/2020
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;