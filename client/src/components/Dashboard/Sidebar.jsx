// Sidebar.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <motion.div
      className="w-64 bg-black text-white min-h-screen p-6"
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <Link to="/">
        <h1 className="text-3xl font-extrabold mb-8">HMS Portal</h1>
      </Link>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block text-lg hover:text-gray-400">
          Dashboard
        </Link>
        <Link
          to="/dashboard/rooms"
          className="block text-lg hover:text-gray-400"
        >
          Rooms
        </Link>
        <Link
          to="/dashboard/students"
          className="block text-lg hover:text-gray-400"
        >
          Students
        </Link>
        <Link
          to="/dashboard/staff"
          className="block text-lg hover:text-gray-400"
        >
          Staff
        </Link>
        <Link
          to="/dashboard/mess"
          className="block text-lg hover:text-gray-400"
        >
          Mess
        </Link>
      </nav>
    </motion.div>
  );
};

export default Sidebar;
