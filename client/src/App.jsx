import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import LoginSignup from './pages/auth/LoginSignup';
import Dashboard from './pages/Dashboard';
import Rooms from './pages/dashboard/Rooms';
import Students from './pages/dashboard/Students';
import Staff from './pages/dashboard/Staff';
import Mess from './pages/dashboard/Mess';


const App = () => {
  return (
    <Router>
      <div className="px-4 py-10">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/rooms" element={<Rooms />} />
          <Route path="/dashboard/mess" element={<Mess />} />
          <Route path="/dashboard/students" element={<Students />} />
          <Route path="/dashboard/staff" element={<Staff />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
