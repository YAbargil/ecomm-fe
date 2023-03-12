import { useContext, useEffect, useReducer } from "react";
import React, { createContext } from "react";
import reducer from "../reducers/cartItemReducer";

import { addToCart, getCart } from "../api";
import { useUserContext } from "./userContext";
import {
  ADD_TO_CART,
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  SET_CART,
} from "../utils/constants/constants";

const initialState = {
  cart_items_loading: false,
  cart_items: [],
  cart_items_error: null,
  cart_items_count: 0,
};
const CartItemContext = createContext(initialState);

export const CartItemProvider = ({ children }) => {
  const { user, isAuth } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchCartItems = async () => {
    if (isAuth) {
      const result = await getCart();
      const items = result.data.items;
      console.log(items);

      dispatch({
        type: SET_CART,
        payload: { items: items.orderItems, length: items.length },
      });
    }
  };

  useEffect(() => {
    fetchCartItems();
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

  return (
    <CartItemContext.Provider
      value={{
        ...state,
        addSingleProductToCart,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
};

export const useCartItemContext = () => {
  return useContext(CartItemContext);
};
