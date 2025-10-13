import React from 'react';
import miFoto from '../assets/fg-perfil.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Sobre Mí</h2>
        <p className="text-lg text-center text-gray-600 mb-6">
          Soy un desarrollador full stack apasionado por crear soluciones digitales 
          innovadoras y eficientes. 
        </p>
        <p className="text-lg text-center text-gray-600 mb-6">
          Me especializo en tecnologías como 
          React, Node.js y Mysql.
        </p>
        <p className="text-lg text-center text-gray-600 mb-8">
          Disfruto transformar ideas en realidad a través del código, siempre 
          buscando las mejores prácticas y soluciones escalables.
        </p> 
        <p className="text-lg text-center text-gray-600 mb-6">
          Herramientas de gestión de proyectos y tareas.
        </p>

        {/* Contenedor centrado */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Trello</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">Jira - Met. Scrum</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;