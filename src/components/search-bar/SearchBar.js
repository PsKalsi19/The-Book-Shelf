import { Fragment, useContext } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { BooksContext } from "../../contexts/BooksProvider";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const { searchTerm, setSearchTerm, searchProductsHandler } =
    useContext(BooksContext);
  const navigate = useNavigate();

  const handleCardSelect = ({ _id }) => {
    navigate(`/product-overview/${_id}`);
  };

  return (
    <div className="fixed w-11/12 sm:top-4 sm:w-96">
      <Combobox onChange={handleCardSelect}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg  text-left shadow-md focus:outline-none focus-visible:ring-2  sm:text-sm">
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
            <Combobox.Input
              className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
              displayValue={(person) => person.name}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchTerm("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-900 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {searchProductsHandler.length === 0 && searchTerm !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-100">
                  Nothing found.
                </div>
              ) : (
                searchProductsHandler.map((product) => (
                  <Combobox.Option
                    key={product.id}
                    className={({ active }) =>
                      `relative flex h-20 items-center  text-gray-100 cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-gray-800" : "bg-gray-900"
                      }`
                    }
                    value={product}
                  >
                    {({ selected, active }) => (
                      <>
                        <img
                          src={product.imgUrl}
                          alt={product.title}
                          className="h-16 w-12 mr-4"
                        />
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {product.title}
                        </span>
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchBar;
