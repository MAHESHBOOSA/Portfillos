import React from 'react';
import EXP from '../assests/intern.pdf';
import { FaCode, FaDownload } from 'react-icons/fa';

interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  pdfUrl?: string;
  icon?: React.ReactNode;
}

const experiences: ExperienceItem[] = [
  {
    company: "Code-B",
    position: "Full Stack Developer Intern",
    duration: "Feb 2024 - April 2024",
    description: [
      "Developed a full-stack web application to manage NGO activities, donor information, and beneficiary data.",
      "Utilized Django (Python) for backend development, ensuring rapid development with built-in security features and an admin interface.",
      "Designed and implemented RESTful APIs using Django REST Framework to allow modular interaction between frontend and backend.",
      "Managed relational data efficiently with a MySQL database, including designing normalized schema for optimal performance.",
      "Built a responsive frontend using HTML, CSS, and vanilla JavaScript to ensure usability across devices and browsers.",
      "Integrated CRUD functionalities for managing donor profiles, donations, events, and user roles.",
      "Implemented user authentication and authorization using Django's built-in auth system to protect sensitive data.",
      "Optimized application performance through query optimization and caching mechanisms.",
      "Deployed the application on a cloud platform (e.g., Heroku or AWS) for accessibility and scalability.",
      "Applied form validation and error handling on both frontend and backend to improve data integrity and user experience."
    ],
    technologies: ["Python", "Django", "JavaScript", "HTML/CSS", "MySQL"],
    pdfUrl: EXP,
    icon: <FaCode className="text-blue-600" />
  }
];

const Experience: React.FC = () => {
  const handleDownload = () => {
    window.open(EXP, '_blank');
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Professional Experience</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My journey in software development, starting with my internship experience
          and continuing to grow through hands-on projects and learning.
        </p>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800">{exp.position}</h3>
                    <p className="text-xl text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 mt-1">{exp.duration}</p>
                  </div>
                </div>
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 hover:scale-105 transform"
                >
                  <FaDownload />
                  <span>Experience Letter</span>
                </button>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 