import { Navigate } from "react-router-dom";
import isValidUser from "../../services/auth-service";
const CanActivate = ({ children }) => {

  return isValidUser() ? children : <Navigate to="/login" replace / >;
};

export default CanActivate;
