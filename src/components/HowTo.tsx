import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface HowToProps {
  setCurrentPage: (page: string) => void;
}

function HowTo({ setCurrentPage }: HowToProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSurveyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('survey');
  };

  return (
    <section ref={ref} className="bg-flow-black py-16 sm:py-24 px-4 sm:px-8">
      <div className={`max-w-7xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-lg">
              <img 
                src="/flow-green-image-3.png"
                alt="Ilustración de Proceso Fácil" 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              ¿Cómo obtengo mi primer producto financiero con <span className="text-flow-vibrant-green">Flow Capital</span>?
            </h2>
            <p className="text-white text-base sm:text-lg text-justify">
              En Flow Capital, hemos simplificado el proceso para que obtengas tu primer producto financiero de movilidad. Sin papeleo, sin obstáculos, y al alcance de todos. Solo unos pocos clics te separan de impulsar tu movilidad financiera.
            </p>
            <button 
              onClick={handleSurveyClick} 
              className="bg-flow-vibrant-green text-white font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Comienza Ahora
            </button>
            <p className="text-white flex items-center justify-center lg:justify-start text-sm">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Solo necesitas tu cédula y WhatsApp.
            </p>
            <p className="text-white flex items-center justify-center lg:justify-start text-sm">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              Puedes comprar a través de nuestro sitio web o canal de whatsapp.
            </p>
            <p className="text-white flex items-center justify-center lg:justify-start text-sm">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              En minutos te contamos si aprobamos tu compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowTo;
