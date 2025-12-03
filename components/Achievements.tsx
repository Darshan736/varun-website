import React from 'react';
import { Award, BookOpen } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-8 border-[#cfd8dc] pl-4">
          Achievements & Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Research Paper */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-[#ffb74d]">
              <BookOpen size={24} />
              <h3 className="text-xl font-bold text-gray-900">Research Paper</h3>
            </div>
            <p className="text-gray-700 italic mb-2">
              “A Comprehensive Speaker Diarization System Utilizing Pyannote audio for Segmentation, ECAPATDNN for Embedding, and SA-EEND for Speaker Assignment”
            </p>
            <p className="text-gray-600 text-sm">
              Selected for publication in Springer LNNS Series, ICT4SD Conference, 2025.
            </p>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-[#80deea]">
              <Award size={24} />
              <h3 className="text-xl font-bold text-gray-900">Certifications</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Advanced Semiconductor Packaging</h4>
                <p className="text-gray-600 text-sm">
                  Completed a course on Advanced Semiconductor Packaging by Arizona State University on Coursera.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;