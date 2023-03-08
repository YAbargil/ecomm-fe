import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/productContext";
import {
  Divider,
  Title,
  Image,
  Flex,
  Card,
  Button,
  Group,
  Text,
  ActionIcon,
  NumberInput,
  NumberInputHandlers,
  Accordion,
  Box,
  Container,
  HoverCard,
  Rating,
} from "@mantine/core";
import {
  IconCheck,
  IconTruckDelivery,
  IconStarFilled,
  IconStar,
} from "@tabler/icons-react";
import { Loading } from "../components/Loading";
import { formatPrice } from "../utils/formats";
import { AddProductToCart } from "../components/AddProductToCart";

export const SingleProductPage = () => {
  const {
    fetchSingleProduct,
    single_product,
    single_product_error,
    single_product_loading,
  } = useProductsContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  if (single_product_loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <Flex direction="column" gap={"xl"} align="baseline" mt={"4%"}>
        <Title weight={650}>{single_product.title}</Title>
        <Text color="dimmed">{single_product.brand}</Text>
        <Text mt={11} weight={710} fz={22}>
          Description
        </Text>
        <Text color={"dimmed"}>{single_product.description}</Text>
        <Flex direction="row" gap="sm">
          <IconCheck color="green" stroke={2.2} height={29} />
          <Text fz={18} fw={550}>
            Stock - {single_product.stock}
          </Text>
        </Flex>
        <Flex direction="row" gap="sm">
          <Text fz={30} weight={670}>
            {formatPrice(single_product.price)}
          </Text>
          <Text color="dimmed" mt={11}>
            Incl. VAT plus shipping
          </Text>
        </Flex>
        <Flex direction="row" gap="sm">
          <IconTruckDelivery stroke={0.7} />
          <Text color="dimmed">2-4 day shipping guaranteed</Text>
        </Flex>
      </Flex>
      <AddProductToCart />
    </>
  );
};
