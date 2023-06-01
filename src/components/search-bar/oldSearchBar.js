// import { useContext } from "react";
// import { BooksContext } from "../../contexts/BooksProvider";

// const SearchBar = () => {
//   const { searchTerm, setSearchTerm } = useContext(BooksContext);

//   return (
//     <>
//       <label
//         htmlFor="products-search"
//         className="mb-2 text-sm font-medium text-gray-100 sr-only"
//       >
//         Search
//       </label>
//       <div className="relative">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//           <svg
//             aria-hidden="true"
//             className="w-5 h-5 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             ></path>
//           </svg>
//         </div>
//         <input
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           type="search"
//           id="products-search"
//           className="border text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
//           placeholder="Search Products"
//         />
//       </div>
//     </>
//   );
// };

// export default SearchBar;
