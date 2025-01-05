import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Replace with real login logic
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Replace with real logout logic
    setIsAuthenticated(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-4 bg-white shadow-md flex justify-between items-center w-full rounded-xl"
    >
      {/* Logo with routing */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link to="/">
          <h1 className="text-black text-4xl font-extrabold cursor-pointer">
            HMS PORTAL
          </h1>
        </Link>
      </motion.div>

      {/* Login or User Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="flex items-center space-x-4"
      >
        {isAuthenticated ? (
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaUser className="text-gray-600 text-2xl cursor-pointer" />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={handleLogout}
              className="text-gray-700 font-medium bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Logout
            </motion.button>
          </div>
        ) : (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={handleLogin}
            className="text-white font-semibold bg-black px-4 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            LOGIN
          </motion.button>
        )}
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
