import React, { useState, useContext } from 'react';
import { login } from '../api/auth'; // Adjust the import path accordingly
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const { login: loginUser } = useContext(AuthContext); // Get the login function from context
  const [f_userName, setUserName] = useState('');
  const [f_Pwd, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = { f_userName, f_Pwd }; // Prepare user data

      const response = await login(userData); // Call your login API function
      loginUser(response.token, { id: response.user.id, role: response.user.role }); // Call login function from context
      navigate('/admin'); // Redirect on success (change to appropriate route)
    } catch (err) {
      setError(err.message); // Set error message to state
      toast.error('Login failed: ' + err.message); // Show error toast
      console.error('Login error:', err); // Log error for debugging
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <img
          src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" // Replace with your image URL
          alt="Login Illustration"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-10">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back!</h1>
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
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
