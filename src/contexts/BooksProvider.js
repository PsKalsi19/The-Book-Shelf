import { createContext, useEffect, useState } from "react";
import axios from "axios"


export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        getCategories("/api/categories",setCategories)
    }, [])
    return (
        <BooksContext.Provider value={{ categories }}>
            {children}
        </BooksContext.Provider>
    );
}

export default BooksProvider;


const getCategories = async (url,setter) => {
    try {
        const data = await axios.get(url)
        setter(data.data.categories)
    } catch (error) {
        console.error(error)
    }
}