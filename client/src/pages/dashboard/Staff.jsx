import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";

const Staff = () => {
  const [staff, setStaff] = useState([
    { name: "Salman", responsibility: "Security" },
    { name: "Rahim", responsibility: "Mess" },
    { name: "Saba", responsibility: "Warden" },
  ]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Staff</h2>

        <div className="space-y-4">
          {staff.map((member) => (
            <div
              key={member.name}
              className="p-4 bg-white shadow-md rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">
                Responsibility: {member.responsibility}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
