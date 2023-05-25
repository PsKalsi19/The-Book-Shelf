import { useContext } from "react";
import { BooksContext } from "../../../contexts/BooksProvider";

const Checkbox = () => {
  const {
    booksState: { categories },
    // filtersState: { category },
  } = useContext(BooksContext);
  return (
    <fieldset className='pb-4'>
      <legend className="text-base text-gray-100">Category</legend>
      <ul className="text-sm font-medium text-gray-100">
        {categories.map(({ categoryName, _id }) => (
          <li key={_id} className="w-full">
            <div className="flex items-center pl-3">
              <input
                id={_id}
                name="categories"
                value={categoryName}
                type="checkbox"
                // checked={category === categoryName}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-500 focus:ring-blue-600 ring-offset-gray-700 focus:ring-offset-gray-700 focus:ring-2"
              />
              <label
                htmlFor={_id}
                className="w-full py-3 ml-2 text-sm font-medium text-gray-100"
              >
                {categoryName}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </fieldset>
  );
};

export default Checkbox;
