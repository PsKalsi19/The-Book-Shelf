import { useContext, useEffect, useState } from "react";
// import { Switch } from "@headlessui/react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getAddress,
  saveAddress,
  updateAddress,
} from "../../services/localstorage-service";
import { toast } from "react-hot-toast";
import { AddressContext } from "../../contexts/AddressProvider";
import { DUMMY_ADDRESSES, STATES } from "../../constants/addressData";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function AddressForm() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [addressForm, setAddressForm] = useState({
    name: "",
    number: "",
    line1: "",
    line2: "",
    pincode: "",
    city: "",
    state: STATES[0],
    isPrimary: false,
  });

  const { setAddress } = useContext(AddressContext);

  useEffect(() => {
      document.title="Address | The Book Shelf"
    if (location?.state?.selectedForm) {
      setAddressForm(location.state.selectedForm);
    }
  }, [location.state.selectedForm]);

  const handleFields = (e) => {
    setAddressForm({ ...addressForm, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      saveAddress({ ...addressForm, id: (getAddress().length + 1).toString(),isPrimary:!getAddress().length>0 });
      toast.success("Address Added");
    } else {
      updateAddress({...addressForm,isPrimary:!getAddress().length>0}, id);
      toast.success("Address Updated");
    }
    setAddress(getAddress());
    navigate(-1);
  };

  const back = () => {
    navigate(-1);
  };

  const handleMockData=()=>{
    const randomIndex=Math.floor(Math.random()*DUMMY_ADDRESSES.length)
    setAddressForm(DUMMY_ADDRESSES[randomIndex])
  }
  return (
    <div className="px-6 py-24 isolate sm:py-40 lg:px-8">
      <div className="max-w-2xl mx-auto mt-20 text-center sm:mt-0">
        <h1 className="font-bold tracking-tight text-gray-100 md:text-xl lg:text-4xl">
          Addresses
        </h1>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xl mx-auto mt-8 sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                placeholder="joe"
                onChange={handleFields}
                value={addressForm.name}
                type="text"
                name="name"
                id="name"
                required
                autoComplete="name"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="number"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Mobile Number
            </label>
            <div className="mt-2.5">
              <input
                placeholder="9293949596"
                type="number"
                onChange={handleFields}
                name="number"
                value={addressForm.number}
                maxLength="10"
                id="number"
                required
                max="9999999999"
                autoComplete="number"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="line1"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Line 1
            </label>
            <div className="mt-2.5">
              <input
                placeholder="21 street"
                onChange={handleFields}
                type="line1"
                name="line1"
                value={addressForm.line1}
                id="line1"
                required
                autoComplete="line1"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-6">
            <label
              htmlFor="line2"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Line 2
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleFields}
                placeholder="Golden yard, Magic lane"
                type="line2"
                value={addressForm.line2}
                name="line2"
                id="line2"
                required
                autoComplete="line2"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              State
            </label>
            <div className="mt-2.5">
              <select
              name="state"
              id="state"
              required
              value={addressForm.state}
              onChange={handleFields}
              className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800">
                {
                  STATES.map(state=><option key={state} value={state}>{state}</option>)
                }
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              City
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleFields}
                type="city"
                placeholder="Mumbai"
                value={addressForm.city}
                name="city"
                id="city"
                required
                autoComplete="city"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="pincode"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Pincode
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleFields}
                placeholder="400002"
                type="number"
                value={addressForm.pincode}
                name="pincode"
                id="pincode"
                required
                maxLength={999999}
                autoComplete="pincode"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="px-5 w-full py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
          >
            {id?"Update Address":"Save Address"}
          </button>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-10">
          <button
            onClick={handleMockData}
            type="button"
            className="px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-600 rounded-lg bg-cyan-50 focus:ring-4 focus:outline-none hover:text-gray-100 hover:bg-cyan-950 focus:ring-cyan-950"
          >
            Dummy Data
          </button>
          <button
            onClick={back}
            type="button"
            className="px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-600 rounded-lg bg-cyan-50 focus:ring-4 focus:outline-none hover:text-gray-100 hover:bg-cyan-950 focus:ring-cyan-950"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
