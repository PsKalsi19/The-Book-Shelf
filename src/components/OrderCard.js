
const OrderCard = ({order}) => {
    const { _id, imgUrl, author, price, qty, title, discount } = order
    return (
        <div
        id={_id}
        className="flex flex-col justify-between p-6 border-b border-gray-700 sm:flex-row hover:rounded-lg hover:bg-gray-800 sm:justify-start"
      >
        <img
          className="self-center w-32 h-48 sm:h-40 sm:w-18"
          src={imgUrl}
          alt={title}
        />
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:ml-4 sm:w-full sm:justify-between">
          <div className="flex flex-col items-center justify-between mt-5 sm:items-start align-center sm:mt-0">
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-lg font-bold text-gray-100 lg:text-xl">
                {title}
              </h2>
              <p className="mt-1 text-xs text-gray-200 sm:text-sm">{author}</p>
            </div>
            <div className="flex flex-row items-center mt-4 space-x-4 text-gray-100">
              <p className="text-xs before:mr-1 before:content-['₹'] line-through text-gray-200">
                {price}
              </p>
              <p className="text-xl before:mr-1 before:content-['₹'] font-bold sm:text-2xl">
                {price - discount}
              </p>
            </div>
              <p className="font-bold text-gray-600 text-md">
               X {qty}
              </p>
          </div>
        </div>
      </div>
    );
};

export default OrderCard;