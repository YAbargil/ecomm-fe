import { useContext, useEffect, useReducer } from "react";
import React, { createContext } from "react";
import reducer from "../reducers/filterReducer";
import {
  SET_FILTERED,
  SET_PRODUCTS,
  PRICE_ASCENDING,
  PRICE_DESCENDING,
  NAME_ASCENDING,
  NAME_DESCENDING,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../utils/constants/constants";
import { useProductsContext } from "./productContext";

const initialState = {
  products: [],
  filtered_products: [],
  sort: "",
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

    // let d = document.getElementById("sort").value;
    // console.log(d);
    // let event.
    // dispatch({ type: sortType });
    // switch (sortType) {
    //   case PRICE_ASCENDING:
    //   case PRICE_DESCENDING:
    //   case NAME_ASCENDING:
    //   case NAME_DESCENDING:
    //   default:
    //     throw new Error(`No Matching "${sortType}" - sort type`);
    // }
  };
  useEffect(
    () => dispatch({ type: SET_PRODUCTS, payload: products }),
    [products]
  );

  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [state.sort]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
