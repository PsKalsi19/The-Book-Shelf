import { useContext, useEffect, useState } from "react";
import AddToCartButton from "../../components/AddToCartButton";
import { useParams } from "react-router";
import { BooksContext } from "../../contexts/BooksProvider";
import WishlistButton from "../../components/WishlistButton";
import Loader from "../../components/loader/Loader";

const ProductOverview = () => {
  const { id } = useParams();
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    document.title = "Product Overview | The Book Shelf";
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);
  const {
    booksState: { booksData },
  } = useContext(BooksContext);
  const product = booksData.find((ele) => ele._id === id) ?? {};

  if (showLoader) return <Loader />;

  return (
    <section className="overflow-hidden text-gray-100">
      {product && (
        <div className="container px-5 pt-32 pb-4 mx-auto sm:py-24">
          <div className="flex flex-wrap items-center mx-auto lg:max-w-5xl">
            <img
              alt={product.title}
              className="object-cover object-center w-full rounded h-1/2 lg:w-1/4"
              src={product.imgUrl}
            />

            <div className="w-full mt-6 lg:w-2/3 lg:pl-10 lg:py-6 lg:mt-0">
              <h2 className="relative text-sm tracking-widest text-gray-500 title-font">
                {product.author}
                <div className="absolute right-0 sm:bottom-4 sm:relative bottom-24">
                  <WishlistButton product={product} />
                </div>
              </h2>
              <h1 className="mb-1 text-3xl font-medium text-gray-100 title-font">
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <span className="text-xs mr-3 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
                    {product.rating}
                  </span>
                  |
                  <span className="ml-3 text-gray-600">
                    {product.pages} Pages
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">{product.description}</p>

              <div className="flex items-baseline my-4">
                <span className="text-2xl before:mr-1 before:content-['₹'] font-medium text-gray-100 title-font">
                  {product.price - product.discount}
                </span>
                <span className="text-md ml-2 before:mr-1 line-through before:content-['₹'] font-medium text-gray-500 title-font">
                  {product.price}
                </span>
                <div className="flex ml-auto">
                  <AddToCartButton product={product} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto border-t border-gray-700 lg:max-w-5xl">
            <h2 className="my-2 text-sm tracking-widest text-gray-500 title-font">
              Recent Reviews
            </h2>
            {product.reviews &&
              product.reviews.length > 0 &&
              product.reviews.map(
                ({ username, date, rating, comment }, index) => (
                  <div
                    key={index}
                    className="flex content-center py-4 border-b border-gray-700"
                  >
                    <div className="grid grid-cols-4 grid-rows-1 gap-4">
                      <div className="flex flex-wrap items-center col-span-2">
                        <p className="w-40 truncate sm:w-60">{username}</p>
                        <div className="flex flex-col items-start justify-between w-full space-y-2 sm:flex-row">
                          <p className="text-xs text-gray-500">{date} </p>
                          <span className="text-xs mr-3 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-gray-100">
                            {rating}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <p className="text-md">{comment}</p>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductOverview;
