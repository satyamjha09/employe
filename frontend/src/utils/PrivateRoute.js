import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
