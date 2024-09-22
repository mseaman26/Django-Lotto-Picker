import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../utils/authContext'; // Adjust the path if needed
import Auth from '../utils/auth';

const ProtectedRoute = ({ element }) => {
  const { accesToken  } = useContext(AuthContext);
  return (accesToken && !Auth.isTokenExpired(accesToken)) ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
