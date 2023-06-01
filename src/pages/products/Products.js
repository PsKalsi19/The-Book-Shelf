import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../contexts/BooksProvider";

import ProductCard from "../../components/products/ProductCard";
import Loader from "../../components/loader/Loader";
const Products = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);
  const {
    booksState: { booksData },
  } = useContext(BooksContext);

  if(showLoader) return <Loader/>
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {booksData &&
        booksData.length > 0 &&
        booksData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Products;
