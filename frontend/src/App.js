import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

// Lazy load pages
const AdminPage = lazy(() => import('./pages/AdminPage'));
const EmployeeListPage = lazy(() => import('./pages/EmployeeListPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage')); // Create a NotFoundPage component

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/employees" element={<EmployeeListPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<NotFoundPage />} /> {/* 404 Page */}
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
};

export default App;
