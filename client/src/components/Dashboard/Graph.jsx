// Graph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RoomOccupancyGraph = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Occupancy',
        data: [30, 50, 80, 60, 90, 75],
        backgroundColor: '#4CAF50',
        borderRadius: 10,
      },
    ],
  };

  return <Bar data={data} />;
};

export default RoomOccupancyGraph;
