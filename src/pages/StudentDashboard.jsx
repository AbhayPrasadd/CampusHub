import React from "react";

const cardData = [
  {
    title: "Attendance",
    value: "92%",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    title: "Assignments Due",
    value: "3",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    title: "Upcoming Exams",
    value: "2",
    bgColor: "bg-red-100",
    textColor: "text-red-800",
  },
  {
    title: "Notifications",
    value: "5",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    title: "Grades",
    value: "A-",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
];

function StudentDashboard() {
  return (
    <div className="p-4 bg-gray-100 ">
      

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`rounded-xl p-5 shadow-md ${card.bgColor} ${card.textColor}`}
          >
            <h2 className="text-lg font-medium">{card.title}</h2>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentDashboard;
