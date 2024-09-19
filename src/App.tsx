import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowTo from './components/HowTo';
import Features from './components/Features';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import SurveyPage from './pages/Survey';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'survey') {
      return <SurveyPage />;
    }

    return (
      <>
        <Hero setCurrentPage={setCurrentPage} />
        <HowTo />
        <Features />
        <Team />
        <CallToAction />
      </>
    );
  };

  return (
    <div className="font-sans text-white bg-flow-black min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;