import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
      <h1 className="text-6xl font-bold animate-bounce transform transition duration-300 hover:scale-110">404</h1>
      <p className="mt-4 text-2xl animate-pulse">Oops! Page Not Found</p>
      <p className="mt-2">The page you're looking for does not exist.</p>
      <button 
        onClick={handleGoHome} 
        className="mt-6 px-6 py-3 bg-yellow-400 text-gray-800 rounded-lg shadow-lg transition duration-300 hover:bg-yellow-300 transform hover:scale-105 animate-bounce"
      >
        Go Back Home
      </button>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <svg
          className="animate-pulse h-24 w-24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20h6M9 16h6m-7-6h8m-7 0V4m-4 4h-2a1 1 0 00-1 1v2m0 0h2m-2 0l1-1m8 1l1-1m-1 1h2m-2 0v-2a1 1 0 00-1-1h-2m0 0H9m0 0l1 1m-1-1v-2" />
        </svg>
      </div>
    </div>
  );
};

export default NotFoundPage;
