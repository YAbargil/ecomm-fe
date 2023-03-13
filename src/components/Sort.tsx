import { Flex, Group, Input } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useFilterContext } from "../context/filterContext";
import {
  NAME_ASCENDING,
  NAME_DESCENDING,
  PRICE_ASCENDING,
  PRICE_DESCENDING,
} from "../utils/constants/constants";

export const Sort = () => {
  const {
    products: products,
    filtered_products: filtered,
    filtered_products_error: error,
    filtered_products_loading: loading,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <>
      <Flex direction="row" justify={"space-evenly"}>
        <Group>
          <h4 style={{ fontFamily: "sans-serif" }}>
            {products.length} - Product Found
          </h4>
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
      </Flex>
    </>
  );
};
