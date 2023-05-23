import { createContext, useState } from "react";
import getLoginDetails from "../services/login-service";
import { setAuth, setUser } from "../services/localstorage-service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import signupUser from "../services/signup-service";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState({
    user: {},
    isUserValid:false
  });

  const setAuths = (foundUser, encodedToken) => {
    setAuth(encodedToken);
    setUser(foundUser);
    setUserState({
      auth: encodedToken,
      user: foundUser,
      isUserValid:true
    });
  };
  const handleLoginFn = async (payload) => {
    try {
      const {
        data: { foundUser, encodedToken },
      } = await getLoginDetails(payload);
      setAuths(foundUser, encodedToken);
      navigate("/");
    } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong. Try Later");
    }
};

  const handleSignUpFn = async (payload) => {
      try {
          const {
        data: { createdUser, encodedToken },
    } = await signupUser(payload);
      setAuths(createdUser, encodedToken);
      toast.success("Account Created!")
      navigate("/");
    } catch (error) {
        console.log(error);
      toast.error("Something Went Wrong. Try Later");
    }
  };

  return (
    <AuthContext.Provider value={{ userState,setUserState, handleLoginFn, handleSignUpFn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
