import { TrashIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import {
  deleteAddress,
  getAddress,
  togglePrimaryAddress,
} from "../services/localstorage-service";
import { toast } from "react-hot-toast";
const AddressCard = ({ address, setAddressHandler }) => {
  const {
    id,
    name,
    number,
    line1,
    line2,
    pincode,
    city,
    state,
    isPrimary,
  } = address;
  const removeAddress = (id) => {
    deleteAddress(id);
    setAddressHandler(getAddress());
    toast.success("Address Deleted");
  };

  const navigate = useNavigate();

  const editAddress = (payload) => {
    navigate(`/address/${id}`, { state: { selectedForm: payload } });
  };

  const setPrimaryAddress = (id) => {
    togglePrimaryAddress(id);
    setAddressHandler(getAddress());
    toast.success("Addresses Updated.");
  };

  return (
    <div
      id={id}
      className={`flex relative flex-row p-6 mb-6 border-b border-gray-700 hover:rounded-lg  ${
        isPrimary ? "bg-gray-800 rounded-lg" : "hover:bg-gray-800"
      }`}
    >
      <button className="flex" title="Set as primary" disabled={isPrimary} onClick={() => setPrimaryAddress(id)} type="button">
        <svg
          
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 absolute -bottom-3  ${
            isPrimary
              ? "text-cyan-800 cursor-not-allowed "
              : "text-gray-400 hover:text-cyan-800 cursor-pointer"
          }  fill-current right-6 h-6`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
      </button>

      <div className="flex flex-row items-start justify-between w-full">
        <div>
          <div className="flex flex-col items-start w-full">
            <h2 className="text-lg text-gray-100 sm:text-xl">
              {name}, {number}
            </h2>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-100">
            <p>
              {line1}, {line2}
            </p>
            <p>
              {city}-{pincode}, {state}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-100">
          {!isPrimary && (
            <TrashIcon
              onClick={(e) => removeAddress(id)}
              title="Remove Address"
              className="w-8 h-8 p-2 text-red-500 duration-150 bg-red-100 rounded-full cursor-pointer opacity-80"
            />
          )}
          <svg
            onClick={(e) => editAddress(address)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 p-2 text-gray-200 duration-150 rounded-full cursor-pointer bg-cyan-800"
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
