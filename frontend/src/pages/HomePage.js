import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-purple-200 min-h-screen p-8">
      {/* Company Logo */}
      <img
        src="https://www.dealsdray.com/wp-content/uploads/2023/11/logo_B2R.png"
        alt="DealsDray Logo"
        className="h-24 mb-6 rounded-full shadow-lg" // Adjust height as needed
      />
      
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Employee Management System</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        
        {/* Section 1: Employee List */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Employee List</h2>
          <p className="mb-4 text-gray-600">View and manage all employees in one place.</p>
          <Link to="/employees" className="text-blue-500 hover:underline">Go to Employee List</Link>
        </div>

        {/* Section 2: Add Employee */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add Employee</h2>
          <p className="mb-4 text-gray-600">Easily add new employees to the system.</p>
          <Link to="/signup" className="text-blue-500 hover:underline">Add New Employee</Link>
        </div>

        {/* Section 3: Reports */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reports</h2>
          <p className="mb-4 text-gray-600">Generate detailed reports of employee performance.</p>
          <Link to="/reports" className="text-blue-500 hover:underline">View Reports</Link>
        </div>

        {/* Section 4: Admin Panel */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Admin Panel</h2>
          <p className="mb-4 text-gray-600">Access administrative features and settings.</p>
          <Link to="/admin" className="text-blue-500 hover:underline">Go to Admin Panel</Link>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
