import { Flex, Title } from "@mantine/core";
import { CurrentPath } from "../components/CurrentPath";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList";
import { Sort } from "../components/Sort";

export const ProductsPage = () => {
  return (
    <>
      <Title>Products</Title>
      <CurrentPath />
      <Sort />
      <Flex direction="row" align={"flex-start"} justify="flex-end">
        <Filter />
        <ProductList />
      </Flex>
    </>
  );
};
