import { createContext, useContext, useEffect, useState } from "react";
import { getAddress, isExistingUser, saveAddress } from "../services/localstorage-service";
import { useNavigate } from "react-router-dom";
import { DEFAULT_ADDRESS } from "../constants/addressData";
import { AuthContext } from "./AuthProvider";



export const AddressContext = createContext();
const AddressProvider = ({ children }) => {
  const [addresses, setAddress] = useState();
  const {userState}=useContext(AuthContext)
  const navigate = useNavigate();

  const handleAddressForm = (payload = null) => {
    navigate("/address", { state: { selectedForm: payload } });
  };

  useEffect(() => {
    if ( isExistingUser() && getAddress().length === 0) {
      saveAddress(...DEFAULT_ADDRESS);
    }
    setAddress(getAddress());
  }, [userState]);

  return (
    <AddressContext.Provider
      value={{
        addresses,
        setAddress,
        handleAddressForm
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default AddressProvider;
