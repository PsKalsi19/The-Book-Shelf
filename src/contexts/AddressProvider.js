import { createContext, useEffect, useState } from "react";
import { getAddress, saveAddress } from "../services/localstorage-service";
import { useNavigate } from "react-router-dom";

const defaultAddress = [
  {
    id: 1,
    name: "Joe Russo",
    number: "2132434645",
    line1: "Vasant Colony",
    line2: "Shivaji Road",
    landmark: "Near XYZ Garden",
    pincode: "403021",
    city: "Nagpur",
    state: "Maharashtra",
    country: "India",
    isPrimary: true,
  },
];

export const AddressContext = createContext();
const AddressProvider = ({ children }) => {
  const [addresses, setAddress] = useState();
  const navigate = useNavigate();

  const handleAddressForm = (payload = null) => {
    navigate("/address", { state: { selectedForm: payload } });
  };

  useEffect(() => {
    if (getAddress().length === 0) {
      saveAddress(...defaultAddress);
    }
    setAddress(getAddress());
  }, []);

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
