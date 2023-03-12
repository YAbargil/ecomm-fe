import { Button, Center, Flex, Text } from "@mantine/core";
import { IconPlus, IconMinus, IconShoppingCartPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useCartItemContext } from "../context/cartItemContext";

export const AddProductToCart = ({ single_product }) => {
  const { addSingleProductToCart, cart_items_loading, cart_items_error } =
    useCartItemContext();
  const [amount, setAmount] = useState(1);
  useEffect(() => {}, [cart_items_loading]);
  return (
    <>
      <Flex direction="column">
        <Flex direction="row" align="center" gap={10} mt="xl">
          <Button
            style={{
              height: "auto",
              width: 500,
              background: "#0f172a",
              color: "#f8fafc",
            }}
            radius="md"
            size="lg"
            variant="outline"
            rightIcon={<IconShoppingCartPlus />}
            onClick={() => addSingleProductToCart(single_product._id, amount)}
            loading={cart_items_loading}
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
          <h3
            style={{
              font: "caption",
              fontSize: 29,
            }}
          >
            {amount}
          </h3>
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
        {cart_items_error && (
          <h3 style={{ color: "red", fontFamily: "monospace" }}>
            {cart_items_error}
          </h3>
        )}
      </Flex>
    </>
  );
};
