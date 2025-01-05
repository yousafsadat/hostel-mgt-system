import React, { useState } from 'react';

const Rooms = () => {
  const [rooms, setRooms] = useState([
    { roomNumber: '101', students: ['Sara', 'Javeriya'] },
    { roomNumber: '102', students: ['Rahima'] },
    { roomNumber: '103', students: ['Ruhma', 'Hammad'] },
  ]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Rooms</h2>
      
      <div className="space-y-4">
        {rooms.map((room) => (
          <div
            key={room.roomNumber}
            className="p-4 bg-white shadow-md rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-800">Room {room.roomNumber}</h3>
            <ul className="mt-2">
              {room.students.map((student, index) => (
                <li key={index} className="text-gray-600">
                  {student}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
