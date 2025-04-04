import { Link } from "react-router-dom";

const StudentSidebar = () => (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Student Menu</h2>
    <ul className="space-y-2">
      <li><Link to="/student/courses" className="hover:text-blue-500">Course Enrolment</Link></li>
      <li><Link to="/student/lectures" className="hover:text-blue-500">Lecture Access</Link></li>
      <li><Link to="/student/assignments" className="hover:text-blue-500">Assignments</Link></li>
      <li><Link to="/student/quizzes" className="hover:text-blue-500">Quizzes & Exams</Link></li>
      <li><Link to="/student/grades" className="hover:text-blue-500">Grades & Feedback</Link></li>
    </ul>
  </div>
);

export default StudentSidebar;
