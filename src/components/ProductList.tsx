import {
  Flex,
  Grid,
  Text,
  Divider,
  Container,
  Input,
  Checkbox,
  Collapse,
  Button,
  Loader,
} from "@mantine/core";
import { useEffect } from "react";
import { useFilterContext } from "../context/filterContext";
import { useProductsContext } from "../context/productContext";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { products_loading: isLoading } = useProductsContext();
  const { filtered_products: products } = useFilterContext();

  if (isLoading) {
    return (
      <Container size="10rem" py={"10rem"} px={"10rem"}>
        <Loader color="indigo" variant="dots" />
      </Container>
    );
  }

  return (
    <Container my="xl">
      <Grid gutter="lg">
        {products.map((p) => (
          <Grid.Col span={6} key={p._id}>
            <ProductCard product={p} key={p._id} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};
