import React from 'react';

function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-12 sm:py-20 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-flow-vibrant-green">Adopta el Futuro</h2>
        <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700">
          ¿Listo para emprender el camino rápido hacia la libertad financiera?<br />
          Abróchate el cinturón y vamos juntos hacia un mañana más brillante.
        </p>
        <button className="bg-flow-vibrant-green text-white font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-bounce">
          Unete a nuestra lista de espera
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
