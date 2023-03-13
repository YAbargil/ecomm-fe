import { Box, Container, Flex, Title } from "@mantine/core";
import { CurrentPath } from "../components/CurrentPath";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList";
import { Sort } from "../components/Sort";

export const ProductsPage = () => {
  return (
    <>
      <Title>Products</Title>
      <CurrentPath />
      <Container>
        <Sort />
      </Container>
      <Flex direction="row" align={"flex-start"} justify="flex-end">
        <Filter />
        <Container size={"xl"}>
          <ProductList />
        </Container>
      </Flex>
    </>
  );
};
