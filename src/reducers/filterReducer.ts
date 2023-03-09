import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  NAME_ASCENDING,
  NAME_DESCENDING,
  PRICE_ASCENDING,
  PRICE_DESCENDING,
  SET_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_FILTER,
  UPDATE_SORT,
} from "../utils/constants/constants";
import { getUniqueValues } from "../utils/formats";

const filterReducer = (state, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      const brands = getUniqueValues(action.payload.map((p) => p.brand));

      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        products: action.payload,
        filtered_products: action.payload,
        brands,
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };

    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
        filtered_products_loading: true,
      };

    //sorting products
    case SORT_PRODUCTS:
      let tempProducts = [];
      const { filtered_products } = state;

      switch (state.sort) {
        case PRICE_ASCENDING:
          tempProducts = filtered_products.sort((a, b) => a.price - b.price);
          break;

        case PRICE_DESCENDING:
          tempProducts = filtered_products.sort((a, b) => b.price - a.price);
          break;

        case NAME_ASCENDING:
          tempProducts = filtered_products.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;

        case NAME_DESCENDING:
          tempProducts = filtered_products.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
          break;
        default:
          tempProducts = [...state.filtered_products];
          break;
      }
      return {
        ...state,
        filtered_products_loading: false,
        filtered_products: tempProducts,
      };
    // end sorting products

    //filtering products
    case UPDATE_FILTER:
      const name = action.payload.name;
      if (name === "price") {
        action.payload.value = parseInt(action.payload.value);
      }
      if (name === "brand") {
        let filteredBrands = [...state.filters.brand];
        if (filteredBrands.includes(action.payload.value)) {
          filteredBrands = filteredBrands.filter(
            (b) => b !== action.payload.value
          );
        } else {
          filteredBrands = [...state.filters.brand, action.payload.value];
        }

        return {
          ...state,
          filters: { ...state.filters, brand: filteredBrands },
        };
      }
      return {
        ...state,
        filters: { ...state.filters, [name]: action.payload.value },
      };

    case FILTER_PRODUCTS:
      const { products } = state;
      let filteredProducts = [...products];

      if (state.filters.search) {
        filteredProducts = filteredProducts.filter((p) => {
          if (p.title.toLowerCase().startsWith(state.filters.search)) {
            return p;
          }
        });
      }

      if (state.filters.price !== state.filters.max_price) {
        filteredProducts = filteredProducts.filter((p) => {
          if (p.price < state.filters.price) {
            return p;
          }
        });
      }

      if (state.filters.brand.length > 0) {
        filteredProducts = filteredProducts.filter((p) => {
          if (state.filters.brand.includes(p.brand)) {
            return p;
          }
        });
      }
      return { ...state, filtered_products: filteredProducts };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: "",
          price: state.filters.max_price,
          brand: [],
        },
      };
    //end filtering products

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filterReducer;
