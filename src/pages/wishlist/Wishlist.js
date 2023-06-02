import React, { useContext } from "react";
import { BooksContext } from "../../contexts/BooksProvider";
import ProductCard from "../../components/products/ProductCard";
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const {
    booksState: { wishlist },
  } = useContext(BooksContext);

  return (
    <section>
      <h1
        className={`${
          wishlist.length > 0 ? " mb-10" : ""
        } mt-32 font-bold tracking-tight text-center text-gray-100 md:text-xl lg:text-4xl`}
      >
        Wishlist
      </h1>
      {wishlist && wishlist.length > 0 && (
        <section className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center">
              {wishlist.map((product) => (
                <ProductCard
                  key={product._id}
                  fromWishlist={true}
                  product={product}
                />
              ))}
          </div>
        </section>
      )}

      {wishlist && wishlist.length === 0 && (
        <div className="grid h-60 place-items-center">
          <div>
            <p className="my-4 text-2xl font-semibold tracking-wide text-gray-100">
              Wishlist is Empty.
            </p>
            <Link to="/products"
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
