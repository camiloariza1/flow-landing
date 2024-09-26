import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

function Hero({ setCurrentPage }: HeroProps) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSurveyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('survey');
  };

  return (
    <section ref={ref} className="bg-flow-vibrant-green pt-8 pb-24 sm:pt-16 sm:pb-32 relative overflow-hidden">
      <div className={`container mx-auto px-4 sm:px-6 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/3 order-2 lg:order-1 lg:mt-[-4rem]">
            <div className="rounded-2xl overflow-hidden">
              <img src="/logo-flow-t.png" alt="Flow Logo" className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 md:max-w-[120%] md:ml-[-10%]" />
            </div>
          </div>
          <div className="w-full lg:w-2/3 space-y-6 text-left mt-16 sm:mt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Muévete ahora, paga después
            </h1>
            <p className="text-xl sm:text-2xl text-white text-justify">
              Bienvenido a bordo de Flow Capital, tu socio de confianza en transacciones financieras. Automatizamos la navegación financiera para que puedas concentrarte en avanzar rápido.
            </p>
            <div className="space-y-4">
              <button
                onClick={handleSurveyClick}
                className="inline-block bg-white text-flow-vibrant-green px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse cursor-pointer z-10 relative"
              >
                Registrarme en Flow
              </button>
              <div className="flex items-start text-sm sm:text-base text-white">
                <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                <p className="text-left bold">
                  Regístrate y participa por uno de los 5 bonos de combustible por $100.000 pesos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg className="absolute bottom-0 left-0 w-full text-flow-black" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  );
}

export default Hero;