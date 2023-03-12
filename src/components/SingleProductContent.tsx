import { Title, Flex, Text, Center } from "@mantine/core";
import { IconCheck, IconTruckDelivery } from "@tabler/icons-react";
import { formatPrice } from "../utils/formats";

export const SingleProductContent = ({ single_product }) => {
  return (
    <Flex direction="column" gap={"xl"} align="baseline" mt={"4%"}>
      <Title weight={650} sx={{ fontFamily: "sans-serif" }}>
        {single_product.title}
      </Title>
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
      <Flex direction="row" gap="sm" align={"center"}>
        <IconTruckDelivery stroke={0.7} />
        <Text
          color="dimmed"
          style={{ font: "small-caption", fontVariant: "historical-forms" }}
        >
          2-4 day shipping guaranteed
        </Text>
      </Flex>
    </Flex>
  );
};
