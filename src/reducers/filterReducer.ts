import {
  NAME_ASCENDING,
  NAME_DESCENDING,
  PRICE_ASCENDING,
  PRICE_DESCENDING,
  SET_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../utils/constants/constants";

const filterReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filtered_products: action.payload,
      };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      if (!state.sort) {
        return state;
      }
      let tempProducts = [...state.products];
      switch (state.sort) {
        case PRICE_ASCENDING:
          tempProducts.sort((a, b) => a.price - b.price);
          return {
            ...state,
            filtered_products: tempProducts,
          };

        case PRICE_DESCENDING:
          tempProducts.sort((a, b) => b.price - a.price);
          return {
            ...state,
            filtered_products: tempProducts,
          };
        case NAME_ASCENDING:
          tempProducts.sort((a, b) => a.title.localeCompare(b.title));
          return { ...state, filtered_products: tempProducts };
        case NAME_DESCENDING:
          tempProducts.sort((a, b) => b.title.localeCompare(a.title));

          return { ...state, filtered_products: tempProducts };
        default:
          console.log(state.sort);
          return state;
      }

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filterReducer;
