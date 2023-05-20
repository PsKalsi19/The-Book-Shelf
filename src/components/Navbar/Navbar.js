import React, { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import logonobackground from "../../assets/logo-no-background.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef()
  return (
    <nav className="fixed top-0 left-0 z-20 w-full bg-gray-900 border-b border-gray-600">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  className="h-10 w-28"
                  src={logonobackground}
                  alt="book-freaks-logo"
                />
              </NavLink>
            </div>

            <div className="hidden w-40 mx-10 md:block">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Search Products" />
              </div>
            </div>
          </div>
          <div>
            <div className="hidden md:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <NavLink
                  to="/mocks"
                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700"
                >
                  Mockman
                </NavLink>

                <NavLink

                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Team
                </NavLink>

                <NavLink

                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </NavLink>

                <NavLink

                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </NavLink>

                <NavLink

                  className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Reports
                </NavLink>
              </div>
            </div>

          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
            <NavLink

              className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-gray-700"
            >
              Dashboard
            </NavLink>

            <NavLink

              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Team
            </NavLink>

            <NavLink

              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Projects
            </NavLink>

            <NavLink

              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </NavLink>

            <NavLink

              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Reports
            </NavLink>
          </div>
        </div>

      </Transition>
    </nav>
  );
}

export default Navbar;