import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
      <ul className="space-y-2">
        <li>
          <NavLink to="/dashboard" className="hover:underline">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/admin/user-management" className="hover:underline">User Management</NavLink>
        </li>
        <li>
          <NavLink to="/admin/report-generation" className="hover:underline">Report Generation</NavLink>
        </li>
        <li>
          <NavLink to="/admin/announcements" className="hover:underline">Announcements</NavLink>
        </li>
        <li>
          <NavLink to="/admin/course-management" className="hover:underline">Course Management</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
