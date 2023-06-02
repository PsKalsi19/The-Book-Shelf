import { FILTERS_ACTION } from "../../constants/dispatchTypes";
import { filtersInitialState } from "../initialStates/FilterInitialState";

const filters = (state, { type, payload }) => {
  switch (type) {
    case FILTERS_ACTION.RESET:
      return filtersInitialState;

    case FILTERS_ACTION.UPDATE_CATEGORY:
      return { ...state, selectedCategory: [...payload] };

    case FILTERS_ACTION.CHANGE_PRICE_SORT:
      return { ...state, priceSort: payload };

    case FILTERS_ACTION.UPDATE_PRICE_SLIDER:
      return { ...state, priceSlider: payload };

    case FILTERS_ACTION.UPDATE_RATING_SLIDER:
      return { ...state, ratingSlider: payload };
      
    default:
      return state;
  }
};
export default filters;
