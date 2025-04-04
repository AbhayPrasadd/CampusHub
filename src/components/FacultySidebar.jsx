import React from "react";
import { Link } from "react-router-dom";

const FacultySidebar = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Faculty Menu</h2>
    <ul className="space-y-2">
      <li>
        <Link to="/faculty/course-creation" className="block hover:text-blue-400">Course Management</Link>
      </li>
      <li>
        <Link to="/faculty/assignment-management" className="block hover:text-blue-400">Assignment Management</Link>
      </li>
      <li>
        <Link to="/faculty/quiz-management" className="block hover:text-blue-400">Quiz Management</Link>
      </li>
      <li>
        <Link to="/faculty/student-tracking" className="block hover:text-blue-400">Student Tracking</Link>
      </li>
    </ul>
  </div>
);

export default FacultySidebar;
