import React from 'react';
import SurveyBox from '../components/SurveyBox';

const SurveyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-flow-black flex flex-col transition-all duration-300 ease-in-out">
      <div className="flex-grow flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 5rem)' }}>
          <div className="flex-grow">
            <SurveyBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
