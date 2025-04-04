import React, { useState } from 'react';
import UploadMaterials from './UploadMaterials'; // First Component
import ManageCourses from './ManageCourses';     // Second Component

function CourseCreation() {
  const [activeTab, setActiveTab] = useState('upload');

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
            activeTab === 'upload'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('upload')}
        >
          📤 Upload Materials
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ${
            activeTab === 'manage'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveTab('manage')}
        >
          📚 Manage Courses
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        {activeTab === 'upload' ? <UploadMaterials /> : <ManageCourses />}
      </div>
    </div>
  );
}

export default CourseCreation;
