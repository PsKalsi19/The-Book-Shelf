import { Navigate, useLocation } from "react-router-dom";
import { getAuth } from "../../services/localStorage-service";
const CanActivate = ({ children }) => {
  const location = useLocation();
  return getAuth() !== null ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default CanActivate;
