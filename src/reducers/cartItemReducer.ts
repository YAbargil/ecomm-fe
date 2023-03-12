import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  SET_CART,
} from "../utils/constants/constants";

const cartItemReducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart_items_count: action.payload.items.length,
        cart_items: [...state.cart_items, action.payload.items],
      };
    case ADD_TO_CART_LOADING:
      return {
        ...state,
        cart_items_loading: true,
        cart_items_error: null,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart_items_loading: false,
        cart_items: [...state.cart_items, action.payload.items],
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        cart_items_loading: false,
        cart_items_error: action.payload,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cartItemReducer;
