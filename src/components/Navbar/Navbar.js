import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ShoppingBagIcon, HeartIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 right-0 z-30 py-2 overflow-hidden bg-gray-900">
        <div
          aria-label="Top"
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        >
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <div className="flex w-3/4 ml-4 overflow-hidden md:w-1/5 lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">The Book Shelf</span>
                  <img
                    src="https://ik.imagekit.io/pb97gg2as/E-Commerce-Assets/logo-color.png?updatedAt=16845975291388"
                    alt="THE BOOK SHELF"
                  />
                </NavLink>
              </div>
              <div className="flex items-center justify-end w-4/5 md:justify-normal">
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
                <div className="flex order-last sm:order-none lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  <NavLink
                    to="login"
                    className="px-3 py-2 text-sm font-medium text-gray-100 rounded-lg hover:bg-gray-50 hover:bg-opacity-10 hover:text-white"
                  >
                    Login
                  </NavLink>
                  <span className="hidden w-px h-6 bg-gray-700 lg:block" aria-hidden="true" />
                  <NavLink
                    to="create-account"
                    className="hidden px-3 py-2 text-sm font-medium text-gray-100 rounded-lg lg:block hover:bg-gray-50 hover:bg-opacity-10 hover:text-white"
                  >
                    Create account
                  </NavLink>
                </div>
                <div className="flow-root ml-4 lg:ml-6">
                  <NavLink
                    to="wishlist"
                    className="flex items-center p-2 -m-2 group"
                  >
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
                <span
                  className="w-px h-6 ml-4 bg-gray-700 lg:ml-6"
                  aria-hidden="true"
                />
                <div className="hidden ml-4 md:flow-root lg:ml-6">
                  <NavLink
                    to="cart"
                    className="flex items-center p-2 -m-2 group"
                  >
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
          {/* Search bar */}
          <div className="w-full my-2 md:hidden">
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
        </div>
      </div>
    </header>
  );
};

export default Navbar;
