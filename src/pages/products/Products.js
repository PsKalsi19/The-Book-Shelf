
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksProvider";

import ProductCard from "../../components/products/ProductCard"
const Products = () => {
  const {booksState:{booksData}}=useContext(BooksContext);
  return (
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {
        booksData && booksData.length>0 && booksData.map(product=> <ProductCard key={product._id} product={product} />)
      }
    </div>
  );
};

export default Products;
