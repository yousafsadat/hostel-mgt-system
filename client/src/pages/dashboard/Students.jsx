import React, { useState } from 'react';

const Students = () => {
  const [students, setStudents] = useState([
    { name: 'Sarah', roomNumber: '101', fee: '$500' },
    { name: 'Javeria', roomNumber: '101', fee: '$500' },
    { name: 'Rahima', roomNumber: '102', fee: '$400' },
  ]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Students</h2>
      
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student.name}
            className="p-4 bg-white shadow-md rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
            <p className="text-gray-600">Room Number: {student.roomNumber}</p>
            <p className="text-gray-600">Fee: {student.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
