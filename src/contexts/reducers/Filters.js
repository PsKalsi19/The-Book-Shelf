import { FILTERS_ACTION } from "../../constants/dispatchTypes"
import { filtersInitialState } from "../initialStates/FilterInitialState"

const filters=(state,{type,payload})=>{
    switch (type) {
        case FILTERS_ACTION.RESET:
            return filtersInitialState
    
        default:
            return state
    }
}
export default filters