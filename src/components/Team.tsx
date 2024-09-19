import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface TeamMember {
  name: string;
  role: string;
}

const teamMembers: TeamMember[] = [
  { name: 'JORGE CERON', role: 'La mente maestra' },
  { name: 'EDUARDO MONTANEZ', role: 'El capo de las finanzas' },
  { name: 'JUAN JOSE RUIZ', role: 'El man que se consigue el billete' },
  { name: 'CAMILO ARIZA', role: 'El que se la juega' }
];

const Team: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="bg-flow-navy py-12 sm:py-20 transition-all duration-300 ease-in-out">
      <div className={`container mx-auto px-4 transition-opacity duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-12">El equipo</h2>
        <p className="text-center mb-8 sm:mb-12 text-sm sm:text-base">Conoce a las personas que gestionan tus finanzas.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-flow-light-navy p-4 sm:p-6 rounded-lg text-center transition-transform hover:scale-105 duration-300">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="font-bold text-base sm:text-lg">{member.name}</h3>
              <p className="text-sm sm:text-base">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;