import React from 'react';

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 80 },
    { name: "Java", level: 75 },
    { name: "C++", level: 80 },
    { name: "Mysql", level: 70 },
    { name: "API rest", level: 70 },
    { name: "Railway", level: 75 },
    { name: "CSS/Tailwind", level: 70 }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Habilidades</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tecnologías y herramientas que utilizo en mis proyectos
        </p>
        
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 font-medium">{skill.name}</span>
                <span className="text-blue-600 font-bold">{skill.level}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;