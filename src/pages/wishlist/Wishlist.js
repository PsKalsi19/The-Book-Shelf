import { useContext, useEffect } from "react";
import { BooksContext } from "../../contexts/BooksProvider";
import ProductCard from "../../components/products/ProductCard";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const {
    booksState: { wishlist, booksData },
  } = useContext(BooksContext);
  const wishListedItems = booksData.filter((ele) =>
    wishlist.find(({ _id }) => ele._id === _id)
  );

  useEffect(()=>{
    document.title="Wishlist | The Book Shelf"
  },[])
  return (
    <section>
      <h1
        className={`${
          wishListedItems.length > 0 ? "mb-10" : ""
        } mt-40 sm:mt-32 font-bold tracking-tight text-center text-gray-100 md:text-xl lg:text-4xl`}
      >
        Wishlist
      </h1>
      {wishListedItems && wishListedItems.length > 0 && (
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center">
            {wishListedItems.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}

      {wishListedItems && wishListedItems.length === 0 && (
        <div className="grid h-60 place-items-center">
          <div>
            <p className="my-4 text-2xl font-semibold tracking-wide text-gray-100">
              Wishlist is Empty.
            </p>
            <Link
              to="/products"
              className="w-full px-5 block py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Wishlist;
