import { Button, Flex, Text } from "@mantine/core";
import { IconPlus, IconMinus, IconShoppingCartPlus } from "@tabler/icons-react";
import { useState } from "react";

export const AddProductToCart = ({ single_product }) => {
  const [amount, setAmount] = useState(1);
  return (
    <>
      <Flex
        direction="row"
        align="center"
        justify="flex-start"
        gap={10}
        mt="xl"
      >
        <Button
          style={{
            width: 400,
            background: "#0f172a",
            color: "#f8fafc",
          }}
          radius="md"
          size="lg"
          variant="outline"
          rightIcon={<IconShoppingCartPlus />}
        >
          <Text fw={780} fz={29}>
            Add To Cart
          </Text>
        </Button>
        <Button
          style={{
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            color: "black",
            border: "none",
            padding: "0",
            margin: "5px",
          }}
          onClick={() => {
            if (amount > 1) {
              setAmount(amount - 1);
            }
          }}
        >
          <IconMinus />
        </Button>
        <h3 style={{ font: "caption", fontSize: 29 }}>{amount}</h3>
        <Button
          style={{
            backgroundColor: "transparent",
            backgroundRepeat: "no-repeat",
            color: "black",
            border: "none",
            padding: "0",
            margin: "5px",
          }}
          onClick={() => {
            if (single_product.stock > amount) {
              setAmount(amount + 1);
            }
          }}
        >
          <IconPlus />
        </Button>
      </Flex>
    </>
  );
};
