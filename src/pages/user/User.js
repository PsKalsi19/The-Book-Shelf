import { useEffect, useState } from "react";
import {
  getUserEmail,
  getUserName,
} from "./../../services/localstorage-service";
import Address from "./Address";
import OrderHistory from "./OrderHistory";
import { useParams } from "react-router-dom";

const User = () => {
  const { tab } = useParams();
  const [selectedTab, setSelectedTab] = useState(tab ?? "address");

  useEffect(()=>{
    document.title="User | The Book Shelf"
  },[])
  return (
    <div className="mx-4 mt-40">
      <ul className="flex flex-wrap max-w-4xl mx-auto text-sm font-medium text-center text-gray-400 border-b border-gray-700">
        <li className="mr-2">
          <button
            onClick={() => setSelectedTab("profile")}
            type="button"
            aria-current="page"
            className={`${
              selectedTab === "profile" ? "bg-gray-800" : "hover:bg-gray-800"
            } inline-block p-4 text-gray-100 rounded-t-lg`}
          >
            Profile
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setSelectedTab("address")}
            type="button"
            className={`${
              selectedTab === "address" ? "bg-gray-800" : "hover:bg-gray-800"
            } inline-block p-4 text-gray-100 rounded-t-lg`}
          >
            Address
          </button>
        </li>
        <li className="mr-2">
          <button
            onClick={() => setSelectedTab("orders")}
            type="button"
            className={`${
              selectedTab === "orders" ? "bg-gray-800" : "hover:bg-gray-800"
            } inline-block p-4 text-gray-100 rounded-t-lg`}
          >
            Orders
          </button>
        </li>
        {/* <li className="mr-2">
          <button
            onClick={() => setSelectedTab("payments")}
            type="button"
            className={`${
              selectedTab === "payments" ? "bg-gray-800" : "hover:bg-gray-800"
            } inline-block p-4 text-gray-100 rounded-t-lg`}
          >
            Payments
          </button>
        </li> */}
      </ul>
      <div className="max-w-4xl mx-auto my-4 text-gray-100 ">
        {/* For profile */}
        {selectedTab === "profile" && (
          <>
           { <p className="text-lg font-semibold">{getUserName()}</p>}
            <p className="font-semibold text-md">{getUserEmail()}</p>
          </>
        )}
        {/* For Address */}
        {selectedTab === "address" && (
          <>
            <Address />
          </>
        )}
        {/* For Orders */}
        {selectedTab === "orders" && (
          <>
            <OrderHistory />
          </>
        )}
      </div>
    </div>
  );
};

export default User;
