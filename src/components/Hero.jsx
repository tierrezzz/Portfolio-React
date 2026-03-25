import React from "react";
import miFoto from "../assets/Facundo-paisaje.webp";
import cvFile from "../assets/FacundoGutierrez.cv.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Hola, soy <span className="text-blue-600">Facundo</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Desarrollador Full Stack apasionado por crear soluciones digitales
              innovadoras
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg text-center min-w-[140px]"
              >
                Proyectos
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition text-center min-w-[140px]"
              >
                Contactar
              </a>
              <a
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition text-center min-w-[140px]"
              >
                CV
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
              <img
                src={miFoto}
                alt="Facundo Gutiérrez"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
