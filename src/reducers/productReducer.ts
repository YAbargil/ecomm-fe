import {
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_PRODUCTS_LOADING,
  SET_SINGLE_PRODUCT,
  SET_SINGLE_PRODUCT_ERROR,
  SET_SINGLE_PRODUCT_LOADING,
} from "../utils/constants/constants";

const productReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LOADING:
      return {
        ...state,
        products_loading: true,
      };
    case SET_PRODUCTS_ERROR:
      return { ...state, products_loading: false, products_error: true };

    case SET_PRODUCTS:
      return { ...state, products: action.payload, products_loading: false };

    case SET_SINGLE_PRODUCT_LOADING:
      return {
        ...state,
        single_product_loading: true,
        single_product_error: false,
      };
    case SET_SINGLE_PRODUCT_ERROR:
      return {
        ...state,
        products: action.payload,
        single_product_loading: false,
        single_product_error: true,
      };

    case SET_SINGLE_PRODUCT:
      return {
        ...state,
        single_product_loading: false,
        single_product: action.payload,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default productReducer;
