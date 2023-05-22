import { BOOKS_ACTIONS } from "../../constants/dispatchTypes"

const books=(state,{type,payload})=>{
    switch (type) {
        case BOOKS_ACTIONS.SAVE_CATEGORY:
            return({...state,categories:payload})
        case BOOKS_ACTIONS.SAVE_BOOKS_DATA:
            return({...state,booksData:payload})
        default:
            return state
    }
}

export default books