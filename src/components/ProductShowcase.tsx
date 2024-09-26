import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ProductShowcaseProps {
  setCurrentPage: (page: string) => void;
}

interface ProductInfo {
  name: string;
  description: string;
  icon: string;
}

const flowProducts: ProductInfo[] = [
  { name: 'Flow Mobility', description: 'Soluciones de transporte flexibles y asequibles para tu día a día.', icon: '🚗' },
  { name: 'Flow Seguros y pólizas', description: 'Protección integral para ti y tus bienes con planes personalizados.', icon: '🛡️' },
  { name: 'Flow Gasolina y consumibles', description: 'Financia tus gastos de combustible y mantenimiento vehicular.', icon: '⛽' },
];

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ setCurrentPage }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleSurveyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentPage('survey');
  };

  return (
    <section ref={ref} className="relative bg-flow-navy py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src="/images/flow-green-1.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>
      <div className={`container mx-auto px-4 relative z-10 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-flow-accent">Descubre el poder de Flow</h2>
        <p className="text-center mb-12 sm:mb-16 text-lg sm:text-xl max-w-3xl mx-auto">Soluciones financieras innovadoras diseñadas para impulsar tu éxito y transformar tu futuro económico.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {flowProducts.map((product, index) => (
            <div key={index} className="bg-flow-light-navy p-6 sm:p-8 rounded-xl text-center transition-all hover:scale-105 hover:shadow-xl duration-300 border border-flow-accent">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-flow-accent to-flow-accent-light rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                {product.icon}
              </div>
              <h3 className="font-bold text-xl sm:text-2xl mb-4 text-flow-accent">{product.name}</h3>
              <p className="text-base sm:text-lg">{product.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={handleSurveyClick}
            className="bg-flow-vibrant-green text-white font-bold py-2 px-4 sm:px-6 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Comienza tu viaje financiero
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 opacity-10">
        <img 
          src="/flow-green-image-1.png" 
          alt="Decorative" 
          className="w-full h-full object-contain object-bottom"
          style={{ transform: 'translateY(15%)' }}
        />
      </div>
    </section>
  );
}

export default ProductShowcase;