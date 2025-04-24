import React from 'react';

const skills = {
  'Frontend': [
    { name: 'HTML', level: 91},
    { name: 'CSS', level: 90 },
    { name: 'Bootstrap', level: 80 },
    { name: 'React', level: 60 },
    { name: 'JavaScript', level: 60},
    
  ],
  'Backend': [
    { name: 'Python', level: 80 },
    { name: 'MYSQL', level: 75 },
    { name: 'DJANGO', level: 70 },
  ],
  'Tools & Others': [
    { name: 'Git', level: 88 },
    { name: 'PyCharm', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Visual Studio Code', level: 80 },
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category}
              </h3>
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
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