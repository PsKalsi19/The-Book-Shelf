import { Fragment, useContext } from "react";
import { Combobox, Transition } from "@headlessui/react";
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
    <div className="fixed w-9/12 md:w-3/4 sm:top-4 md:top-20 lg:top-4 lg:w-96">
      <Combobox onChange={handleCardSelect}>
        <div className="relative">
          <div className="relative w-full overflow-hidden text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 sm:text-sm">
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
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setSearchTerm("")}
          >
            <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-gray-900 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {searchProductsHandler().length === 0 && searchTerm !== "" ? (
                <div className="relative px-4 py-2 text-gray-100 cursor-default select-none">
                  Nothing found.
                </div>
              ) : (
                searchProductsHandler().map((product) => (
                  <Combobox.Option
                    key={product.id}
                    className={({ active }) =>
                      `relative flex h-20 items-center  text-gray-100 cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-gray-800" : "bg-gray-900"
                      }`
                    }
                    value={product}
                  >
                    {({ selected }) => (
                      <>
                        <img
                          src={product.imgUrl}
                          alt={product.title}
                          className="w-12 h-16 mr-4"
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
