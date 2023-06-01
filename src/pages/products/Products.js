import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../contexts/BooksProvider";

import ProductCard from "../../components/products/ProductCard";
import Loader from "../../components/loader/Loader";
const Products = () => {
  const [showLoader, setShowLoader] = useState(true);
  const { booksState, searchProductsHandler } = useContext(BooksContext);

  useEffect(() => {
    const loader = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(loader);
  }, []);

  // useEffect(()=>{
  //   const searchTimeout=setTimeout(() => {
      
  //     searchProductsHandler()
  //   }, 10000);
  //   return ()=>clearTimeout(searchTimeout)
  // },[searchTerm])



  const { booksData } = booksState;
  if (showLoader) return <Loader />;
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {booksData &&
        booksData.length > 0 &&
        searchProductsHandler().map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
    </div>
  );
};

export default Products;
