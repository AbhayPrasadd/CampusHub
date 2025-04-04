import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">📚 E-Learning Platform</h1>
      <p className="text-gray-600 text-lg mb-8">Empowering students and faculty through digital learning.</p>
      <button
        onClick={() => navigate("/login")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
