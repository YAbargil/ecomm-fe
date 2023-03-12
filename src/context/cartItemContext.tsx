import { useContext, useEffect, useReducer } from "react";
import React, { createContext } from "react";
import reducer from "../reducers/cartItemReducer";

import { addToCart, deleteOrderItem, getCart, updateOrderItem } from "../api";
import { useUserContext } from "./userContext";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  SET_CART,
  SET_CART_LOADING,
  EDIT_CART_ITEM,
} from "../utils/constants/constants";

const initialState = {
  edit_cart_items: false,
  set_cart_loading: false,
  cart_items_loading: false,
  cart_items: [],
  cart_items_error: null,
  cart_items_count: 0,
  total: 0,
};
const CartItemContext = createContext(initialState);

export const CartItemProvider = ({ children }) => {
  const { user, isAuth } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCartItems = async () => {
    if (isAuth) {
      dispatch({ type: SET_CART_LOADING });
      const result = await getCart();
      const items = result.data.items;
      console.log(items);

      dispatch({
        type: SET_CART,
        payload: {
          items: items.orderItems,
          length: items.length,
          total: items.total,
        },
      });
    }
  };

  const editQuantityHandler = async (
    orderItemId: string,
    productId: string,
    quantity: number
  ) => {
    try {
      dispatch({ type: ADD_TO_CART_LOADING });
      const temp = await updateOrderItem(orderItemId, productId, quantity);
      dispatch({ type: EDIT_CART_ITEM, payload: temp.data.orderItem });
      fetchCartItems();
    } catch (err) {
      dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
    }
  };

  useEffect(() => {
    fetchCartItems();
    console.log(state.cart_items);
  }, [isAuth, state.cart_items_loading]);

  const addSingleProductToCart = async (
    productId: string,
    quantity: number
  ) => {
    try {
      dispatch({ type: ADD_TO_CART_LOADING });
      const result = await addToCart({ productId, quantity });
      dispatch({ type: ADD_TO_CART, payload: result.data });
    } catch (err) {
      dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
    }
  };

  const removeOrderItem = async (productId, orderItemId) => {
    try {
      dispatch({ type: ADD_TO_CART_LOADING });
      await deleteOrderItem(productId, orderItemId);
      dispatch({ type: EDIT_CART_ITEM, payload: orderItemId });
      fetchCartItems();
    } catch (err) {
      dispatch({ type: ADD_TO_CART_ERROR, payload: err.message });
    }
  };

  return (
    <CartItemContext.Provider
      value={{
        ...state,
        editQuantityHandler,
        addSingleProductToCart,
        removeOrderItem,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export const useCartItemContext = () => {
  return useContext(CartItemContext);
};
