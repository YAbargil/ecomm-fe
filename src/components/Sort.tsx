import { Group } from "@mantine/core";
import { useFilterContext } from "../context/filterContext";
import {
  NAME_ASCENDING,
  NAME_DESCENDING,
  PRICE_ASCENDING,
  PRICE_DESCENDING,
} from "../utils/constants/constants";

export const Sort = () => {
  const { products: products, sort, updateSort } = useFilterContext();

  return (
    <>
      <Group>
        <h5>Product Found - ({products.length})</h5>
        <form>
          <select name="sort" id="sort" value={sort} onChange={updateSort}>
            <option value="" disabled hidden>
              Sort By
            </option>
            <option value={PRICE_ASCENDING}>Price (Lowest)</option>
            <option value={PRICE_DESCENDING}>Price (Highest)</option>
            <option value={NAME_ASCENDING}>Name (A-Z)</option>
            <option value={NAME_DESCENDING}>Name (Z-A)</option>
          </select>
        </form>
      </Group>
    </>
  );
};
