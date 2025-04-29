import React from 'react';

const skills = {
  'Frontend': [ 'HTML', 'CSS','Bootstrap', 'React','JavaScript'
  ],
  'Backend': [ 'Python','MYSQL','DJANGO'
  ],
  'Tools & Others': ['Github','PyCharm','Visual Studio Code','AWS'
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
              <div className="space-y-2">
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm flex items-center justify-between"
                  >
                    <span className="text-gray-700">{skill}</span>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
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