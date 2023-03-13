import {
  Group,
  Image,
  Card,
  Flex,
  Badge,
  Button,
  createStyles,
  Center,
  Divider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/productContext";
import { formatPrice } from "../utils/formats";
import { Loading } from "./Loading";
import { TrendingCard } from "./TrendingCard";

const useStyles = createStyles((theme) => ({
  container: {
    position: "relative",
    width: "50%",
  },

  image: {
    opacity: 1,
    display: "block",
    width: "100%",
    height: "auto",
    transition: "opacity 0.5s ease",
    backfaceVisibility: "hidden",
    hover: {
      opacity: 0.3,
    },
  },

  middle: {
    transition: "0.5s ease",
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    msTransform: "translate(-50%, -50%)",
    hover: {
      opacity: 1,
    },
  },
}));

export const TrendingProducts = () => {
  const { classes } = useStyles();
  const { products } = useProductsContext();
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    if (products.length > 0) {
      setTrending(products.slice(3, 6));
      // console.log(trending);
    }
  }, [products]);

  if (!trending) {
    <Group position="center" spacing="xl">
      <Loading />
    </Group>;
  } else if (trending.length > 0) {
    return (
      <>
        <div style={{ backgroundColor: "#DEE2E6", padding: "25px" }}>
          <Group position="center" spacing="xl">
            <h1 style={{ fontFamily: "cursive", fontSize: 35 }}>
              Featured Products
            </h1>
          </Group>
          <Group position="center" spacing="xl">
            {trending.map((product) => (
              <TrendingCard product={product} key={product._id} />
            ))}
          </Group>
        </div>
      </>
    );
  }
};
