import AddressCard from "../../components/AddressCard";
import { useContext } from "react";
import { AddressContext } from "../../contexts/AddressProvider";

const Address = () => {
  const { addresses,setAddress,handleAddressForm } = useContext(AddressContext);

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
