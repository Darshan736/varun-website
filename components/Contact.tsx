import React from 'react';
import { Mail, Linkedin, MapPin, Download, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I am actively looking for opportunities in VLSI Design. Feel free to reach out!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
          
          <a href="mailto:salimathvarunkumar@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 shadow-sm transition-colors group">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-full group-hover:bg-blue-200 transition-colors">
              <Mail size={20} />
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
              <p className="text-gray-900 font-medium truncate">salimathvarunkumar@gmail.com</p>
            </div>
          </a>

          <a href="tel:+918197670562" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 shadow-sm transition-colors group">
             <div className="p-3 bg-green-100 text-green-700 rounded-full group-hover:bg-green-200 transition-colors">
              <Phone size={20} />
            </div>
             <div className="text-left">
              <p className="text-xs text-gray-500 uppercase font-semibold">Phone</p>
              <p className="text-gray-900 font-medium">+91-8197670562</p>
            </div>
          </a>
          
          <a href="https://linkedin.com/in/varunkumar-salimath" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50 shadow-sm transition-colors group">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-full group-hover:bg-blue-200 transition-colors">
              <Linkedin size={20} />
            </div>
             <div className="text-left">
              <p className="text-xs text-gray-500 uppercase font-semibold">LinkedIn</p>
              <p className="text-gray-900 font-medium">Varunkumar Salimath</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
             <div className="p-3 bg-red-100 text-red-700 rounded-full">
              <MapPin size={20} />
            </div>
             <div className="text-left">
              <p className="text-xs text-gray-500 uppercase font-semibold">Location</p>
              <p className="text-gray-900 font-medium">Hubballi, India</p>
            </div>
          </div>
        </div>

        {/* Scroll Target for Resume Navigation */}
        <div id="resume" className="flex justify-center scroll-mt-32">
            <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium shadow-md hover:shadow-lg">
                <Download size={20} />
                Download Resume
            </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;