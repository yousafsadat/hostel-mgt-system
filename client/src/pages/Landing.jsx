import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/dashboard');
  };

  return (
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
  );
};

export default LandingPage;
