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
  Center,
  Group,
} from "@mantine/core";
import { IconMoodEmpty } from "@tabler/icons-react";
import { useFilterContext } from "../context/filterContext";
import { useProductsContext } from "../context/productContext";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const { products_loading: isLoading } = useProductsContext();
  const {
    filtered_products: products,
    filtered_products_loading: isLoadingFiltered,
  } = useFilterContext();

  if (isLoading || isLoadingFiltered) {
    return (
      <Container size="10rem" py={"10rem"} px={"10rem"}>
        <Loader color="indigo" variant="dots" />
      </Container>
    );
  }

  return (
    <Container my="xl">
      <Grid gutter="lg">
        {products && products.length > 0 ? (
          products.map((p) => (
            <Grid.Col span={6} key={p._id}>
              <ProductCard product={p} key={p._id} />
            </Grid.Col>
          ))
        ) : (
          <Group position="center" mt={"50%"}>
            <Center>
              <div>
                <h2>No Products Match Your Filters </h2>
                <Flex justify={"center"}>
                  <IconMoodEmpty stroke={2.1} size={40} />
                </Flex>
              </div>
            </Center>
          </Group>
        )}
      </Grid>
    </Container>
  );
};
