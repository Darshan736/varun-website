import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Varunkumar Salimath. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm text-gray-500">
           <span>Designed with React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;