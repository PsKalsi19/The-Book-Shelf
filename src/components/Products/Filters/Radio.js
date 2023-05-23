import React from 'react';



const Radio = () => {
    return (
        <fieldset className='pb-4 border-b border-gray-500'>
            <legend className='text-base text-gray-100'>Price</legend>
              <ul className="text-sm font-medium text-gray-100 ">
                  <li className="w-full">
                    <div className="flex items-center pl-3">
                      <input
                        id="desc"
                        type="radio"
                        value="desc"
                        name="price-sort-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2"
                      />
                      <label
                        htmlFor="desc"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-100"
                      >
                        High to Low
                      </label>
                    </div>
                  </li>
                  <li className="w-full border-gray-600">
                    <div className="flex items-center pl-3">
                      <input
                        id="asc"
                        type="radio"
                        value="asc"
                        name="price-sort-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2"
                      />
                      <label
                        htmlFor="asc"
                        className="w-full py-3 ml-2 text-sm font-medium text-gray-100"
                      >
                        Low To High
                      </label>
                    </div>
                  </li>
                </ul>
        </fieldset>
    );
};

export default Radio;