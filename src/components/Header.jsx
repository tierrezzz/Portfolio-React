import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Facundo Gutierrez</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition">Inicio</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">Sobre Mí</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Proyectos</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Habilidades</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contacto</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#home" className="block text-gray-600 hover:text-blue-600 transition">Inicio</a>
            <a href="#about" className="block text-gray-600 hover:text-blue-600 transition">Sobre Mí</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600 transition">Proyectos</a>
            <a href="#skills" className="block text-gray-600 hover:text-blue-600 transition">Habilidades</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600 transition">Contacto</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;