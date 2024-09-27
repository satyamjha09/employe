import React, { useEffect, useState, useCallback } from 'react';
import { fetchEmployees } from '../api/employee'; // Import the fetchEmployees method

const EmployeeListPage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchEmployeeData = useCallback(async () => {
    try {
      // Call fetchEmployees from employee.js, passing the searchTerm as the query
      const employeeData = await fetchEmployees(searchTerm);
      console.log(employeeData); // Log the full response
      setEmployees(employeeData);
    } catch (error) {
      console.error('Error fetching employees:', error.message);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchEmployeeData();
  }, [fetchEmployeeData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.f_Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Employee Directory
        </h1>

        {/* Search Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <div
                key={employee._id}
                className="p-6 bg-gray-100 rounded-lg border border-gray-200 shadow-sm transition duration-300 ease-in-out hover:shadow-md hover:bg-gray-50"
              >
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-24 w-24 rounded-full object-cover"
                      src={employee.f_Image || 'https://via.placeholder.com/150'}
                      alt={employee.f_Name}
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800">{employee.f_Name}</h2>
                    <p className="text-gray-600">📧 {employee.f_Email}</p>
                    <p className="text-gray-600">📱 {employee.f_Mobile}</p>
                    <p className="text-gray-600">💼 {employee.f_Designation}</p>
                    <p className="text-gray-600">🎓 {employee.f_Course}</p>
                    <p className="text-gray-500 text-sm">📅 {new Date(employee.f_Createdate).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No employees found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeListPage;
