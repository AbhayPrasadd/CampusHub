import React from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: "Course Enrolment",
    value: "5 Courses",
    path: "/student/courses",
  },
  {
    title: "Lecture Access",
    value: "12 Videos",
    path: "/student/lectures",
  },
  {
    title: "Assignments",
    value: "3 Pending",
    path: "/student/assignments",
  },
  {
    title: "Quizzes & Exams",
    value: "2 Upcoming",
    path: "/student/quizzes",
  },
  {
    title: "Grades & Feedback",
    value: "A- Average",
    path: "/student/grades",
  },
  {
    title: "Announcements",
    value: "From Admin",
    path: "/student/announcementlist",
  },
];

function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Student Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
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

export default StudentDashboard;
