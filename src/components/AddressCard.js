import { TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { deleteAddress, getAddress } from "../services/localstorage-service";
import { toast } from "react-hot-toast";
const AddressCard = ({ address,setAddressHandler }) => {
  const {
    id,
    name,
    number,
    line1,
    line2,
    pincode,
    city,
    state,
    country,
    isDefault,
  } = address;
  const removeAddress = (id) => {
    deleteAddress(id);
    setAddressHandler(getAddress())
    toast.success("Address Deleted")
  };

  const navigate = useNavigate();

  const editAddress = (payload) => {
    navigate(`/address/${id}`, { state: { selectedForm: payload } });
  };

  return (
    <div
      id={id}
      className={`flex flex-row p-6 mb-6 border-b border-gray-700 hover:rounded-lg  ${isDefault?'bg-gray-800 rounded-lg':'hover:bg-gray-800'}`}
    >
      <div className="flex justify-between items-start flex-row sm:w-full">
        <div>
          <div className="flex flex-col items-start">
            <h2 className="text-lg text-gray-100 sm:text-xl">
              {name}, {number}
            </h2>
          </div>
          <div className="mt-4 text-sm space-y-2 text-gray-100">
            <p>
              {line1}, {line2}
            </p>
            <p>
              {city}-{pincode}, {state}, {country}
            </p>
          </div>
        </div>
        <div className="space-x-2 flex text-gray-100">
         { !isDefault && <TrashIcon
            onClick={(e) => removeAddress(id)}
            title="Remove Address"
            className="w-8 h-8 p-2 text-red-500 duration-150 bg-red-100 rounded-full cursor-pointer opacity-80"
          />}
          <svg
            onClick={(e) => editAddress(address)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 p-2 text-gray-200 duration-150 bg-cyan-800 rounded-full cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
      
      </div>
    </div>
  );
};

export default AddressCard;
