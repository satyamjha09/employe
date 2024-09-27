import axios from 'axios';

const API_URL = 'http://localhost:4000/api/employee';  // Updated base URL for employee routes

// Create employee
export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(`${API_URL}/createEmployee`, employeeData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error creating employee');
  }
};

// Get all employees (with optional search query)
export const fetchEmployees = async (searchQuery = '') => {
  try {
    const response = await axios.get(`${API_URL}/getAllEmployees?search=${searchQuery}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching employees');
  }
};

// Get employee by ID
export const fetchEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/getEmployeeById/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error fetching employee');
  }
};

// Delete employee by ID
export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/deleteEmployee/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error deleting employee');
  }
};

// Update employee by ID
export const updateEmployee = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/updateEmployee/${id}`, updatedData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error updating employee');
  }
};
