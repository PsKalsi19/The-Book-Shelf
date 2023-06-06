import { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound=()=> {
    useEffect(()=>{
            document.title="Page Unavailable | The Book Shelf"
    },[])
  return (
    <>
      <main className="grid min-h-full px-6 py-40 place-items-center sm:py-48 lg:px-8">
        <div className="w-3/4 text-center sm:w-1/2">
          <p className="text-2xl font-semibold text-cyan-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
          Oops! It seems you've wandered into a literary void of mysteries. The book you seek is as elusive as a hidden chapter. Let's navigate back together and find literary treasures anew!
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              to="/"
              className="w-full sm:w-1/4 px-5 block py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950"
            >
              Explore Books 
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound