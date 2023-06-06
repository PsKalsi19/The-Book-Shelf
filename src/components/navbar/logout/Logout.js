import { useContext } from 'react';
import { BiLogOut } from "react-icons/bi";
import { handleLocalStorageLogOut } from '../../../services/localstorage-service';
import { BooksContext } from '../../../contexts/BooksProvider';
import { AuthContext } from '../../../contexts/AuthProvider';
import { authInitialState } from '../../../contexts/initialStates/AuthInitialState';
import { useNavigate } from 'react-router-dom';
import { BOOKS_ACTIONS, FILTERS_ACTION } from '../../../constants/dispatchTypes';

const Logout = () => {
const navigate=useNavigate()
const {booksDispatch,filtersDispatch}=useContext(BooksContext)
const {setUserState}=useContext(AuthContext)

      const handleLogout = () => {
        handleLocalStorageLogOut();
        booksDispatch({type:BOOKS_ACTIONS.RESET_PRODUCTS,payload:''})
        booksDispatch({type:BOOKS_ACTIONS.RESET_CART_WISHLIST,payload:''})
        filtersDispatch({type:FILTERS_ACTION.RESET,payload:''})
        setUserState(authInitialState);
        navigate("/");
      };
    return (
        <button
                        type="button"
                        onClick={handleLogout}
                        className="flex items-center p-2 px-3 py-2 -m-2 text-sm font-medium text-gray-100 rounded-lg hover:bg-gray-50 hover:bg-opacity-10 hover:text-white group"
                      >
                        <span className="hidden mr-2 md:block">
                          Log Out
                        </span>
                        <BiLogOut
                          title="log out"
                          className="flex-shrink-0 w-6 h-6 text-gray-100 group-hover:text-white"
                          aria-hidden="true"
                        />

                        <span className="sr-only">log out</span>
                      </button>
    );
};

export default Logout;