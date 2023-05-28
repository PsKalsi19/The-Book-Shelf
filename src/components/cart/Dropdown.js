import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Dropdown = ({ heading, setCouponHandler, dropdownData }) => {
  return (
    <Menu as="div" className="relative text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-800 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset ring-gray-700 hover:bg-gray-950">
          {heading}
          <ChevronDownIcon
            className="w-5 h-5 -mr-1 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 w-56 mt-2 text-gray-100 origin-top-right bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {dropdownData &&
              dropdownData.length > 0 &&
              dropdownData.map((coupon, index) => (
                <Menu.Item key={index}>
                  {() => (
                    <button
                      type="button"
                      onClick={() => setCouponHandler(coupon)}
                      className="block w-full px-4 py-2 text-sm text-left text-gray-100 hover:bg-gray-900"
                    >
                      {coupon.name} -{" "}
                      <span className="before:mr-1 before:content-['₹']">
                        {" "}
                        {coupon.value}{" "}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
