import { useEffect, useState } from "react";
import { getAddress, saveAddress } from "../../services/localstorage-service";
import { useNavigate } from "react-router-dom";
import AddressCard from "../../components/AddressCard";

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
    isDefault: true,
  },
];

const Address = () => {
  const [addresses, setAddress] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (getAddress().length === 0) {
      saveAddress(...defaultAddress);
    }
    setAddress(getAddress());
  }, []);

  const handleAddressForm = (payload = null) => {
    navigate("/address", { state: { selectedForm: payload } });
  };

  return (
    <div>
      <div className="flex justify-end my-4">
        <button
          onClick={() => handleAddressForm()}
          className="px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
          type="button"
        >
          Add Address{" "}
        </button>
      </div>
      <div className="rounded-lg">
        {addresses &&
          addresses.length > 0 &&
          addresses.map((address) => (
            <AddressCard
              setAddressHandler={setAddress}
              key={address.id}
              address={address}
            />
          ))}
      </div>
    </div>
  );
};

export default Address;
