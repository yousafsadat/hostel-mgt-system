import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { getCookie, logout, checkAuth } from '../services/authService'; // Import checkAuth

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const dropdownRef = useRef(null); // Ref for dropdown
  const navigate = useNavigate();

  // Check if the user is authenticated on page load
  useEffect(() => {
    const verifyAuth = async () => {
      const token = getCookie('auth_token');
      if (token) {
        const authResponse = await checkAuth(token);
        if (authResponse) {
          setIsAuthenticated(true);
          setUserEmail(authResponse.email); // Assuming the response contains email
        } else {
          setIsAuthenticated(false);
        }
      }
    };

    verifyAuth();
  }, []);

  const handleLogin = () => {
    navigate('/login-signup'); // Redirect to login/signup page
  };

  const handleLogout = async () => {
    await logout(); // Call logout from authService
    setIsAuthenticated(false); // Update the state
    navigate('/'); // Optionally navigate to home page or landing page
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false); // Close dropdown if clicked outside
    }
  };

  useEffect(() => {
    // Close dropdown when clicking outside
    document.addEventListener('mousedown', closeDropdown);

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

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
          <div className="relative flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={toggleDropdown}
            >
              <FaUser className="text-gray-600 text-2xl cursor-pointer" />
            </motion.div>

            {/* Dropdown menu with user email and logout */}
            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4 w-48 border border-gray-200"
              >
                <p className="text-gray-700 font-medium">{userEmail}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  onClick={handleLogout}
                  className="mt-2 text-red-600 font-medium bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
                >
                  Logout
                </motion.button>
              </div>
            )}
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
