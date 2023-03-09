import { useContext, useEffect, useReducer } from "react";
import React, { createContext } from "react";
import reducer from "../reducers/filterReducer";
import {
  SET_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTER,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../utils/constants/constants";
import { useProductsContext } from "./productContext";

const initialState = {
  products: [],
  filtered_products: [],
  sort: "",
  filtered_products_loading: false,
  brands: [],
  filters: {
    search: "",
    brand: [],
    max_price: 0,
    min_price: 0,
    price: 0,
  },
};
const FilterContext = createContext(initialState);

interface Props {
  children: React.ReactNode;
}

export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  const updateFilter = (e) => {
    if (typeof e === "string") {
      dispatch({ type: UPDATE_FILTER, payload: { value: e, name: "brand" } });
      return;
    }
    let value = e.target ? e.target.value : e;
    const name = e.target.name;
    dispatch({ type: UPDATE_FILTER, payload: { value, name } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  useEffect(
    () => dispatch({ type: SET_PRODUCTS, payload: products }),
    [products]
  );

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
        updateFilter,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
