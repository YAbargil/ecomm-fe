import { updateOrderItem } from "../api";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  EDIT_CART_ITEM,
  EDIT_CART_ITEM_LOADING,
  REMOVE_CART_ITEM,
  SET_CART,
  SET_CART_LOADING,
} from "../utils/constants/constants";

const cartItemReducer = (state, action) => {
  switch (action.type) {
    case SET_CART_LOADING:
      return {
        ...state,
        set_cart_loading: true,
      };
    case SET_CART:
      return {
        ...state,
        edit_cart_item: false,
        set_cart_loading: false,
        cart_items_loading: false,
        cart_items_count: action.payload.length,
        total: action.payload.total,
        cart_items: action.payload.items,
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

    case EDIT_CART_ITEM_LOADING:
      return {
        ...state,
        cart_items_error: null,
        edit_cart_item: true,
      };
    case EDIT_CART_ITEM:
      const updatedItem = action.payload;
      const newOrderItems = [...state.cart_items].map((orderItem) => {
        if (orderItem._id === updatedItem.id) {
          return updatedItem;
        } else {
          return orderItem;
        }
      });
      return {
        ...state,
        edit_cart_item: true,
        cart_items: newOrderItems,
      };

    case REMOVE_CART_ITEM:
      const tempOrderItems = [...state.cart_items];
      const index = tempOrderItems.findIndex(
        (oi) => oi._id === action.payload.orderItemId
      );
      if (index > -1) {
        tempOrderItems.splice(index, 1);
      }
      return {
        ...state,
        cart_items_loading: false,
        cart_items: tempOrderItems,
      };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default cartItemReducer;
