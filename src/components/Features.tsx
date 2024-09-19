import React from 'react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
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

function Features() {
  const features: FeatureProps[] = [
    {
      icon: <SecurityIcon />,
      title: "Transacciones Seguras",
      description: "Nuestra plataforma garantiza el más alto nivel de seguridad para todas tus transacciones financieras, protegiendo tus datos y fondos."
    },
    {
      icon: <MobilityIcon />,
      title: "Soluciones Inteligentes de Movilidad",
      description: "Ofrecemos productos financieros a medida diseñados específicamente para el sector del transporte y la movilidad."
    },
    {
      icon: <AnalyticsIcon />,
      title: "Análisis en Tiempo Real",
      description: "Accede a análisis e insights completos para tomar decisiones informadas sobre tus finanzas de movilidad."
    },
    {
      icon: <SupportIcon />,
      title: "Soporte 24/7",
      description: "Nuestro equipo de soporte experto está disponible las 24 horas para ayudarte con cualquier consulta o problema."
    }
  ];

  return (
    <section className="py-20 px-8 bg-gray-100 transition-all duration-300 ease-in-out">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center"><span className="text-flow-vibrant-green">¿Cuáles son las mejores formas de potenciar tu movilidad?</span></h2>
        <p className="text-xl text-gray-600 mb-12 text-center">Hay diferentes maneras en que Flow Capital puede mejorar tus finanzas de movilidad.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl mb-8"><span className="text-flow-vibrant-green">
            Para elegir qué servicio de Flow Capital conectar, determina qué aspecto de las finanzas de movilidad necesitas mejorar,
            abre una de las aplicaciones de Flow y selecciona el servicio que mejor se adapte a tus necesidades. Es así de fácil desbloquear
            tu potencial de movilidad y acceder a las herramientas financieras que deseas.</span>
          </p>
          <button className="bg-flow-vibrant-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
            Comienza Ahora
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
