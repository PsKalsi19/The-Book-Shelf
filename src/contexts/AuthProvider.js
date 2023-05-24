import { createContext, useState } from "react";
import getLoginDetails from "../services/login-service";
import { handleLocalStorageLogOut, setAuth, setUser } from "../services/localstorage-service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import signupUser from "../services/signup-service";
import { authInitialState } from "./initialStates/AuthInitialState";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState(authInitialState);

  const logInState = (foundUser, encodedToken) => {
    setAuth(encodedToken);
    setUser(foundUser);
    setUserState({
      user: foundUser,
      isUserValid:true
    });
  };

  const logOutState =()=>{
    handleLocalStorageLogOut();
    setUserState(authInitialState)
  }

  const handleLoginFn = async (payload) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await getLoginDetails(payload);
      logInState(foundUser, encodedToken);
      navigate("/");
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
      toast.success("Account Created!")
      navigate("/");
    } catch (error) {
        console.error(error);
      toast.error("Something Went Wrong. Try Later");
    }
  };

  return (
    <AuthContext.Provider value={{ userState,setUserState,logOutState, handleLoginFn, handleSignUpFn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
