import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  setCurrentPage: (page: string) => void;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:transform hover:scale-105 hover:bg-gray-50">
    <div className="w-16 h-16 rounded-full bg-flow-vibrant-green flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-12">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SecurityIcon = () => (
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 border-4 border-white rounded-full"></div>
    <div className="absolute inset-2 bg-white"></div>
    <div className="absolute top-1/2 left-1/2 w-2 h-3 bg-flow-vibrant-green transform -translate-x-1/2 -translate-y-1/2 rounded-sm"></div>
  </div>
);

const MobilityIcon = () => (
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 border-4 border-white rounded-md"></div>
    <div className="absolute top-1 left-1 right-1 h-2 bg-white"></div>
    <div className="absolute bottom-1 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2"></div>
  </div>
);

const AnalyticsIcon = () => (
  <div className="relative w-8 h-8">
    <div className="absolute bottom-0 left-0 w-2 h-3 bg-white"></div>
    <div className="absolute bottom-0 left-3 w-2 h-5 bg-white"></div>
    <div className="absolute bottom-0 left-6 w-2 h-7 bg-white"></div>
  </div>
);

const SupportIcon = () => (
  <div className="relative w-8 h-8">
    <div className="absolute inset-0 border-4 border-white rounded-full"></div>
    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
  </div>
);

function Features({ setCurrentPage }: FeaturesProps) {
  const features: FeatureProps[] = [
    {
      icon: <SecurityIcon />,
      title: "SOAT Y TECNOMECANICA",
      description: "Compra tu soat y pagalo hasta en 24 cuotas"
    },
    {
      icon: <MobilityIcon />,
      title: "LICENCIA DE CONDUCCIÓN Y COMPARENDOS",
      description: "Financia tu licencia de conducir y tus comparendos para que puedas conducir tranquilo"
    },
    {
      icon: <AnalyticsIcon />,
      title: "GASOLINA Y CONSUMIBLES",
      description: "Compra tu gasolina y consumibles para tu vehículo y paga hasta en 12 cuotas"
    },
    {
      icon: <SupportIcon />,
      title: "PASAJES DE TRANSPORTE PÚBLICO",
      description: "Paga tus pasajes de transporte público y no te preocupes por el cambio"
    }
  ];

  const handleSurveyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Survey button clicked'); // Debug log
    setCurrentPage('survey');
  };

  return (
    <section className="py-20 px-8 bg-gray-100 transition-all duration-300 ease-in-out">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center"><span className="text-flow-vibrant-green">Cuotas que se adaptan a ti</span></h2>
        <p className="text-xl text-gray-600 mb-12 text-center">Adquiere tus productos y servicios favoritos para tu movilidad y paga hasta en 12 cuotas.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-12 text-left mt-5">*Sujeto a criterios de elegibilidad.</p>
        <div className="mt-16 text-center">
          <h2 className="text-2xl mb-8 font-semibold mb-2 justify text-gray-600">
            Para elegir qué servicio de <span className="text-flow-vibrant-green">Flow Capital</span> conectar, determina qué aspecto de las <span className="text-flow-vibrant-green">finanzas de movilidad</span> necesitas mejorar,
            abre una de las aplicaciones de Flow y <span className="text-flow-vibrant-green">selecciona el servicio</span> que mejor se adapte a tus necesidades. Es así de fácil <span className="text-flow-vibrant-green">desbloquear
            tu potencial de movilidad</span> y acceder a las <span className="text-flow-vibrant-green">herramientas financieras</span> que deseas.
          </h2>
          <button
          onClick={handleSurveyClick}
          className="bg-flow-vibrant-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
            Comienza Ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
