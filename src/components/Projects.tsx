import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import RR from '../assests/rrchits.png'
import NGO from '../assests/NGO.png'
import REC from '../assests/react.png'

const projects = [
  {
    title: 'RRchits',
    description: 'A full-stack RRchits solution built with Python, Django, and MySql.',
    image: RR,
    technologies: ['Frontend', 'Pyhton', 'MySql', 'Django'],
    githubUrl: 'https://github.com/MAHESHBOOSA/FINANCE.git'
  },
  {
    title: 'NGO Management System',
    description: 'A collaborative Ngo management System application with real-time updates.',
    image: NGO,
    technologies: ['Frontend', 'Python', 'Django', 'MySql'],
    githubUrl: 'https://github.com/MAHESHBOOSA/New-code_b.git'
  },
  {
    title: 'Portfolio',
    description: 'Portfolio is a personal project that showcase my skills and projects.',
    image: REC,
    technologies: ['React', 'Frontend'],
    githubUrl: 'https://github.com/MAHESHBOOSA/Portfoilo.git'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;