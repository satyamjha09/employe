import React, { useState } from 'react';
import { signup } from '../api/auth'; // Adjust the import path accordingly
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const [f_userName, setUserName] = useState('');
  const [f_Pwd, setPassword] = useState('');
  const [role, setRole] = useState('employee'); // Default role can be 'employee'
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { f_userName, f_Pwd, role }; 
      const response = await signup(userData); 
      toast.success('Signup successful! You can now log in.'); // Success toast
      navigate('/login'); 
    } catch (err) {
      setError(err.message); 
      toast.error('Signup failed: ' + err.message); // Error toast
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h1>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={f_userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={f_Pwd}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="employee">Employee</option>
              <option value="admin">Admin</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-1 items-center justify-center bg-gray-100">
        <img
          src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" // Replace with your image URL
          alt="Signup Illustration"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default SignupPage;
