import { createContext, useState } from "react";
import getLoginDetails from "../services/login-service";
import { getAuth, setAuth, setUser } from "../services/localStorage-service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import signupUser from "../services/signup-service";
import { authInitialState } from "./initialStates/AuthInitialState";
import { useLocation } from "react-router-dom";
import { getWishlist } from "../services/wishlist-service";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [userState, setUserState] = useState(authInitialState);

  const logInState = (user, encodedToken) => {
    setAuth(encodedToken);
    setUser(user);
    setUserState({
      user: user,
      isUserValid: true,
    });
  };

  const handleLoginFn = async (payload) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await getLoginDetails(payload);
      logInState(foundUser, encodedToken);
      const redirectionPath = location?.state?.from?.pathname || "/";
      navigate(redirectionPath);
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong. Try Later");
    }
  };

  const handleSignUpFn = async (payload) => {
    try {
      const {
        data: { createdUser, encodedToken },
      } = await signupUser(payload);
      logInState(createdUser, encodedToken);
      toast.success("Account Created!");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong. Try Later");
    }
  };

  const getWishlistState = async () => {
    if (getAuth() === null) return;
    try {
      const data = await getWishlist();
      return data;
    } catch (error) {
      console.error(error);
      toast.error("Something Went Wrong, Try Later");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userState,
        setUserState,
        handleLoginFn,
        handleSignUpFn,
        getWishlistState
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
