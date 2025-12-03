import React from 'react';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    title: "Standard Cell Library Design & Characterization (180nm)",
    description: "Designed schematics and full-custom layouts for 10+ standard cells, performing rigorous DRC and LVS checks to ensure physical correctness and manufacturability. Characterized the library’s timing and power performance to generate industry-standard Liberty (.lib) models and LEF abstracts for use in Place & Route (P&R) tools.",
    tags: ["Cadence Virtuoso", "Layout Design", "Characterization", "Liberty (.lib)", "LEF Abstracts", "DRC/LVS"]
  },
  {
    title: "UCIe-Based Multi-Die Substrate Design",
    description: "Designed a substrate interconnecting two identical dies using the UCIe “standard package” D2D interface; created bump maps for UCIe, JTAG, I2C, and GPIO signals. Generated ball maps for non-UCIe interfaces and completed substrate routing using extracted MCM technology data in APD+.",
    tags: ["UCIe", "Substrate Design", "APD+", "Bump Mapping", "D2D Interface"]
  },
  {
    title: "SMART ENERGY METER USING IoT",
    description: "Built an IoT-enabled smart energy meter using ESP32, voltage/current sensors, and LCD-I2C, enabling real-time monitoring of voltage, current, power, and energy consumption. Implemented Blynk Cloud for remote data logging and visualization, achieving accurate measurement, calibration, and improved energy management efficiency.",
    tags: ["IoT", "ESP32", "Blynk Cloud", "Sensors", "Embedded Systems"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 border-l-8 border-[#ffb74d] pl-4">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col h-full">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600">
                    {tag}
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

export default Projects;