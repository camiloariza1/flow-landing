import React from 'react';

interface CallToActionProps {
  setCurrentPage: (page: string) => void;
}

function CallToAction({ setCurrentPage }: CallToActionProps) {
  const handleSurveyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('survey');
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-12 sm:py-20 transition-all duration-300 ease-in-out overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-flow-vibrant-green">Muevete bien , muévete con Flow</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700">
          ¿Listo para emprender el camino rápido hacia la libertad financiera?<br />
          Abróchate el cinturón y vamos juntos hacia un mañana más brillante.
        </p>
        <button 
          onClick={handleSurveyClick}
          className="bg-flow-vibrant-green text-white font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce"
        >
          Registrarme en Flow
        </button>
      </div>
      <div className="absolute top-0 left-10 w-2/3 h-full opacity-50">
        <img
          src="/flow-green-image-2.png"
          alt="Decorative Left"
          className="w-full h-full object-contain object-left"
        />
      </div>
    </section>
  );
}

export default CallToAction;
