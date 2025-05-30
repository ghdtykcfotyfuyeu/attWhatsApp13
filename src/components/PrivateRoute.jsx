import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "../Auth/AuthContext";

export function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}