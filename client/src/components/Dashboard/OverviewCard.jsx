// OverviewCard.js
import React from 'react';
import { motion } from 'framer-motion';

const OverviewCard = ({ title, value, icon }) => {
  return (
    <motion.div
      className="bg-white shadow-xl rounded-lg p-6 flex items-center justify-between"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl text-gray-900 mt-2">{value}</p>
      </div>
      <div className="text-3xl text-gray-600">{icon}</div>
    </motion.div>
  );
};

export default OverviewCard;
