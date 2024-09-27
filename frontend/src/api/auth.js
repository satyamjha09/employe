import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth'; // Replace with your backend URL

export const signup = async (userData) => {

  try {

    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
    
  } catch (error) {
    throw new Error(error.response?.data?.msg || 'Error signing up');
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Login error response:', error.response);
    throw new Error(error.response?.data?.msg || 'Error logging in');
  }
};
