import jwtDecode from "jwt-decode";
import { getAuth } from "./localstorage-service";

const isValidUser = () => {
  const token = getAuth();
  if (token === null) return false;
  return !!jwtDecode(token).email;
};
export default isValidUser;
