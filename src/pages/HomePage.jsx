import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FileText,
  BarChart2,
  BookOpen,
  ClipboardList,
  Users,
  FolderOpen,
} from "lucide-react";

const HomePage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Assignment Management",
      desc: "Teachers can upload and review student submissions effortlessly.",
      icon: FileText,
    },
    {
      title: "Progress Tracking",
      desc: "Visual dashboards help educators monitor student performance.",
      icon: BarChart2,
    },
    {
      title: "Course Enrollment",
      desc: "Students can browse and join personalized learning paths.",
      icon: BookOpen,
    },
    {
      title: "Online Testing",
      desc: "Integrated assessments with instant feedback and scores.",
      icon: ClipboardList,
    },
    {
      title: "Admin Tools",
      desc: "Admins manage users, courses, and the platform efficiently.",
      icon: Users,
    },
    {
      title: "Assignment Access",
      desc: "Students access and submit assignments with deadline tracking.",
      icon: FolderOpen,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Navbar */}
      <nav className="w-full fixed top-0 left-0 bg-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow-md z-50">
        <h1 className="text-2xl font-bold">📘 CampusHub</h1>
        <div className="space-x-6">
          <button onClick={() => navigate("/")} className="hover:underline">Home</button>
          <button onClick={() => navigate("/courses")} className="hover:underline">Courses</button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-indigo-700 px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 px-6 md:px-20">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mb-20">
          {/* Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-800 mb-4">
              One Platform, Endless Learning
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              CampusHub bridges teachers, students, and admins with powerful tools to manage assignments, track progress, and deliver an engaging learning experience.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition"
            >
              Get Started
            </button>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="e-learn.jpg"
              alt="e-learning"
              className="w-full max-w-md mx-auto drop-shadow-xl rounded-2xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">
            🚀 Why Choose CampusHub?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ title, desc, icon: Icon }, idx) => (
              <div
                key={idx}
                className="bg-indigo-100 rounded-2xl p-6 h-60 flex flex-col justify-center items-center text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-10 h-10 text-indigo-700 mb-4" />
                <h4 className="text-xl font-semibold text-indigo-800 mb-2">{title}</h4>
                <p className="text-gray-700 text-xl">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white text-center py-6 mt-auto">
        <p>© {new Date().getFullYear()} CampusHub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
