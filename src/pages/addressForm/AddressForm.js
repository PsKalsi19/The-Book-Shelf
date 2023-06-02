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
    state: "",
    country: "",
    isPrimary: false,
  });

  const { setAddress } = useContext(AddressContext);

  useEffect(() => {
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
      saveAddress({ ...addressForm, id: (getAddress().length + 1).toString() });
      toast.success("Address Added");
    } else {
      updateAddress(addressForm, id);
      toast.success("Address Updated");
    }
    setAddress(getAddress());
    navigate(-1);
  };

  const back = () => {
    navigate(-1);
  };
  return (
    <div className="px-6 py-24 isolate sm:py-32 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="font-bold tracking-tight text-gray-100 md:text-xl lg:text-4xl">
          Addresses
        </h1>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-xl mx-auto mt-16 sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
          <div className="sm:col-span-2">
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
                autoComplete="name"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="number"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Number
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
                autoComplete="number"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
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
                autoComplete="line1"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-4">
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
                autoComplete="line2"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
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
                autoComplete="city"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-1">
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
                autoComplete="pincode"
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
              <input
                onChange={handleFields}
                placeholder="Maharashtra"
                name="state"
                id="state"
                value={addressForm.state}
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="country"
              className="block text-sm font-semibold leading-6 text-gray-100"
            >
              Country
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleFields}
                name="country"
                id="country"
                value={addressForm.country}
                placeholder="India"
                className="border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 focus:ring-cyan-800 focus:border-cyan-800"
              />
            </div>
          </div>
          {/* <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex items-center h-6">
              <Switch
                checked={addressForm.isPrimary}
                onChange={(e) =>
                  setAddressForm({ ...addressForm, isPrimary: e })
                }
                className={classNames(
                  addressForm.isPrimary ? "bg-cyan-800" : "bg-gray-700",
                  "flex w-8 flex-none cursor-pointer border-gray-600 rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-800"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    addressForm.isPrimary ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-gray-100 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-100">
              Set as Default Address.
            </Switch.Label>
          </Switch.Group> */}
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="px-5 w-full py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
          >
            Save Address
          </button>
        </div>
        <div className="mt-10">
          <button
            onClick={back}
            type="button"
            className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-600 rounded-lg bg-cyan-50 focus:ring-4 focus:outline-none hover:text-gray-100 hover:bg-cyan-950 focus:ring-cyan-950"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
