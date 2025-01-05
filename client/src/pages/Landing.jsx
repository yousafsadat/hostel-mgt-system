import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { getCookie, checkAuth } from '../services/authService';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      const token = getCookie('auth_token'); // Retrieve the token from cookies

      if (token) {
        const authResponse = await checkAuth(token);
        if (authResponse) {
          navigate('/dashboard'); // Redirect to dashboard if authenticated
        } else {
          console.warn('Invalid or expired token');
        }
      }
    };

    verifyAuth(); // Run authentication check on page load
  }, [navigate]);

  const handleProceed = () => {
    const token = getCookie('auth_token');
    console.log(token)
    if (!token) {
      navigate('/login-signup'); // Redirect to login/signup page if no token
    } else {
      checkAuth(token)
        .then((authResponse) => {
          if (authResponse) {
            navigate('/dashboard'); // Proceed to the dashboard if valid token
          } else {
            navigate('/login-signup'); // Redirect to login/signup if token invalid
          }
        })
        .catch((error) => {
          console.error("Error during authentication check:", error);
          navigate('/login-signup'); // Redirect to login/signup if there's an error
        });
    }
  };
  

  return (
    <div className="flex flex-col gap-4">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="px-4 py-4 rounded-xl h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-center "
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1675615667752-2ccda7042e7e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-black bg-opacity-60 text-white p-6 rounded-lg shadow-lg"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4 rounded-xl"
          >
            Welcome to HMS Portal
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl font-semibold text-blue-500"
          >
            by QuantiAxionix
          </motion.p>
        </motion.div>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onClick={handleProceed}
          className="mt-8 px-6 py-3 bg-black text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-black transition delay-75"
        >
          Proceed To Dashboard
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
