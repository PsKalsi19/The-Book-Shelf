import { createContext, useEffect, useState } from "react";
import getLoginDetails from "../services/login-service";
import {  getUser, handleLocalStorageLogOut, isExistingUser, setAuth, setUser } from "../services/localstorage-service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import signupUser from "../services/signup-service";
import { authInitialState } from "./initialStates/AuthInitialState";
import { useLocation } from "react-router-dom";
import { getAuth } from './../services/localstorage-service';
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
      isUserValid: !!getAuth(),
    });
  };

  useEffect(() => {
    if (userState.isUserValid) return;
    if(!isExistingUser()){
      handleLocalStorageLogOut()
    }
    setUserState({
      user: getUser(),
      isUserValid:!!getAuth(),
    });
  }, [userState.isUserValid]);

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



  return (
    <AuthContext.Provider
      value={{
        userState,
        setUserState,
        handleLoginFn,
        handleSignUpFn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
