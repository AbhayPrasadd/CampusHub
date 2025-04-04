import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import FacultyDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
      <Route path="/student/dashboard" element={<StudentDashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
