import { Box, Container, Flex, Title, createStyles } from "@mantine/core";
import { CurrentPath } from "../components/CurrentPath";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList";
import { Sort } from "../components/Sort";

const useStyles = createStyles((theme) => ({
  products: {
    fontFamily: "Poppins",
    margin: "8rem 5rem",
  },
  data: {
    display: "flex",
    flexDirection: "column",
  },
  sort: {
    display: "flex",
    justifyContent: "flex-end",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const ProductsPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <div className={classes.products}>
        <Title>Products</Title>
        <CurrentPath />
        <div className={classes.data}>
          <div className={classes.sort}>
            <Sort />
          </div>
          <div className={classes.container}>
            <Filter />
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};
