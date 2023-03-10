import { useContext, useEffect, useReducer } from "react";
import React, { createContext } from "react";
import reducer from "../reducers/productReducer";
import { getProducts, getSingleProduct } from "../api";
import {
  SET_PRODUCTS,
  SET_PRODUCTS_ERROR,
  SET_PRODUCTS_LOADING,
  SET_SINGLE_PRODUCT_LOADING,
  SET_SINGLE_PRODUCT,
  SET_SINGLE_PRODUCT_ERROR,
} from "../utils/constants/constants";

const initialState = {
  products_loading: false,
  products_error: false,
  products: [],
  branding_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};
const ProductsContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSingleProduct = async (productId: string) => {
    try {
      dispatch({ type: SET_SINGLE_PRODUCT_LOADING });
      if (!productId) {
        dispatch({ type: SET_SINGLE_PRODUCT_ERROR });
        return;
      }
      const result = await getSingleProduct(productId);
      const product = result.data.product;
      dispatch({ type: SET_SINGLE_PRODUCT, payload: product });
    } catch (error) {
      dispatch({ type: SET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {}, [state.single_product_loading]);

  const fetchProducts = async () => {
    try {
      dispatch({ type: SET_PRODUCTS_LOADING });
      const result = await getProducts();
      const products = result.data.products;
      dispatch({ type: SET_PRODUCTS, payload: products });
    } catch (error) {
      dispatch({ type: SET_PRODUCTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
