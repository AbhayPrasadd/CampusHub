import React from "react";
import { useNavigate } from "react-router-dom";

const adminCardData = [
  {
    title: "User Management",
    value: "120 Users",
    path: "/admin/user-management",
  },
  {
    title: "Report Generation",
    value: "15 Reports",
    path: "/admin/report-generation",
  },
  {
    title: "Announcements",
    value: "3 Active",
    path: "/admin/announcements",
  },
  {
    title: "Course Management",
    value: "10 Courses",
    path: "/admin/course-management",
  },
  
];

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {adminCardData.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center h-40 cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-200"
            onClick={() => navigate(card.path)}
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2 text-center">{card.title}</h2>
            <p className="text-3xl font-bold text-indigo-600">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;