import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../contexts/BooksProvider";

import ProductCard from "../../components/products/ProductCard";
import Loader from "../../components/loader/Loader";
const Products = () => {
  const [showLoader, setShowLoader] = useState(true);
  const { booksState, allSortsAndFilters } =
    useContext(BooksContext);

    useEffect(() => {
    document.title="Products | The Book Shelf"
    const loader = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(loader);
  }, []);

  const { booksData } = booksState;
  if (showLoader) return <Loader />;
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {booksData &&
        booksData.length > 0 &&
        allSortsAndFilters()
          .map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
          {
             booksData && allSortsAndFilters().length===0 && <p className="text-4xl text-gray-100">No Data Available.</p>
          }
    </div>
  );
};

export default Products;
