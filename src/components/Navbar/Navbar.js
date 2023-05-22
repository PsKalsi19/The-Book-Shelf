import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ShoppingBagIcon,HeartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-30 py-2 overflow-hidden bg-gray-900">
        <div
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="flex items-center h-16">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 text-gray-700 bg-gray-900 rounded-md lg:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
            <div className="flex items-center">
              <div className="flex w-1/5 ml-4 overflow-hidden lg:ml-0">
                <NavLink  to="/">
                  <span className="sr-only">The Book Shelf</span>
                  <img
                    src="https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/logo-color.png?updatedAt=16845975291388"
                    alt="THE BOOK SHELF"
                  />
                </NavLink>
              </div>
              <div className="flex items-center w-4/5">
                {/* Search bar */}
                <div className="hidden w-1/2 mx-10 md:block">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-100 sr-only"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="border  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                      placeholder="Search Products"
                    />
                  </div>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  <NavLink
                    to="login"
                    className="px-3 py-2 text-sm font-medium text-gray-100 rounded-lg hover:bg-gray-50 hover:bg-opacity-10 hover:text-white"
                  >
                    Login
                  </NavLink>
                  <span className="w-px h-6 bg-gray-700" aria-hidden="true" />
                  <NavLink
                    to="sign-up"
                    className="px-3 py-2 text-sm font-medium text-gray-100 rounded-lg hover:bg-gray-50 hover:bg-opacity-10 hover:text-white"
                  >
                    Create account
                  </NavLink>
                </div>
                <div className="flow-root ml-4 lg:ml-6">
                  <NavLink to="wishlist" className="flex items-center p-2 -m-2 group">
                    <HeartIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-white"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-100 group-hover:text-white">
                      0
                    </span>
                    <span className="sr-only">favorite items view</span>
                  </NavLink>
                </div>
                <span className="w-px h-6 ml-4 bg-gray-700 lg:ml-6" aria-hidden="true" />
                <div className="flow-root ml-4 lg:ml-6">
                  <NavLink to="cart" className="flex items-center p-2 -m-2 group">
                    <ShoppingBagIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-gray-50"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-100 group-hover:text-gray-50">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink className="block px-3 py-2 text-base font-medium text-gray-100 rounded-md hover:bg-gray-700">
              Dashboard
            </NavLink>

            <NavLink className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-gray-100">
              Team
            </NavLink>

            <NavLink className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-gray-100">
              Projects
            </NavLink>

            <NavLink className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-gray-100">
              Calendar
            </NavLink>

            <NavLink className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-gray-100">
              Reports
            </NavLink>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Navbar;
