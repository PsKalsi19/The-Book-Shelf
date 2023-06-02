import { Fragment, useContext, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/20/solid";
import Radio from "../components/products/filters/Radio";
import Checkbox from "../components/products/filters/Checkbox";
import Range from "../components/products/filters/Range";

import { Outlet } from "react-router-dom";
import { BooksContext } from "../contexts/BooksProvider";
import { FILTERS_ACTION } from "../constants/dispatchTypes";

const sortOptions = [
  { name: "A to Z", href: "#", current: true },
  { name: "Best Sellers", href: "#", current: false },
  { name: "Ratings: High to Low", href: "#", current: false },
  { name: "Ratings: Low to High", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductLayout = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const {
    filtersState: { priceSlider, ratingSlider },
    filtersDispatch,
    handleFilterReset
  } = useContext(BooksContext);

  const ratingsRange = {
    value: ratingSlider,
    dispatch: filtersDispatch,
    heading: ratingSlider===5?`Ratings (${ratingSlider})`:`Ratings (${ratingSlider} and above)`,
    max: 5,
    step: 0.5,
    dispatchType: FILTERS_ACTION.UPDATE_RATING_SLIDER,
  };

  const priceRange = {
    value: priceSlider,
    dispatch: filtersDispatch,
    heading: `Price (0 to ${priceSlider})`,
    max: 1500,
    step: 50,
    dispatchType: FILTERS_ACTION.UPDATE_PRICE_SLIDER,
  };
  return (
    <div className="mx-auto md:max-w-2xl lg:max-w-7xl">
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 ml-auto overflow-y-auto bg-gray-900 shadow-xl">
                <div className="flex justify-end px-4">
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-gray-900 rounded-md"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="flex items-center justify-between px-4 mt-8">
                  <h2 className="text-lg font-medium text-gray-100">Filters</h2>
                  <span className="w-px h-6 bg-gray-700" aria-hidden="true" />
                  <button
                  onClick={handleFilterReset}
                    className="flex items-center p-2 text-sm text-gray-400 rounded-lg bg-gray-50 bg-opacity-10"
                    type="button"
                  >
                    {" "}
                    <XMarkIcon className="w-4 h-4 mr-2" /> Clear All
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <div className="px-4 mt-12 space-y-2">
                    <Range {...priceRange} />
                    <Radio />
                    <Range {...ratingsRange} />
                    <Checkbox />
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="relative px-4 mx-auto md:ml-36 mt-18 max-w-7xl sm:px-6 lg:px-8">
        <div className="sticky top-0 z-20 flex items-baseline justify-between pt-40 pb-8 bg-gray-900 md:pt-24 mb-30">
          <h1 className="font-bold tracking-tight text-gray-100 md:text-xl lg:text-4xl">
            Books
          </h1>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-100 group-hover:text-white">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-100"
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
                <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-gray-900 rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-100"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 md:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          {/* Filters */}
          <aside
            id="default-sidebar"
            aria-label="Sidebar"
            className="fixed left-0 h-screen mx-6 transition-transform -translate-x-full md:w-52 lg:w-64 sm:top-16 sm:translate-x-0"
          >
            <div className="h-full px-3 py-4 overflow-y-auto">
              <form className="hidden md:block">
                <div className="flex items-center justify-between pb-6 my-4 text-gray-100 ">
                  <span className="font-bold tracking-wide md:text-xl lg:text-4xl">
                    Filters
                  </span>
                  <span className="w-px h-6 bg-gray-700" aria-hidden="true" />
                  <button
                                    onClick={handleFilterReset}
                    className="flex items-center p-2 text-sm text-gray-400 rounded-lg hover:bg-gray-50 hover:bg-opacity-10"
                    type="button"
                  >
                    {" "}
                    <XMarkIcon className="w-4 h-4 mr-2" /> Clear All
                  </button>
                </div>
                <h3 className="sr-only">Categories</h3>
                <div className="mt-12 space-y-4">
                  <Range {...priceRange} />
                  <Radio />
                  <Range {...ratingsRange} />
                  <Checkbox />
                </div>
              </form>
            </div>
          </aside>

          {/* Product grid */}
          <div className="p-4">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductLayout;
