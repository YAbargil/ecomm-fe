import { Button, Center, Flex, Text } from "@mantine/core";
import { IconPlus, IconMinus, IconShoppingCartPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useCartItemContext } from "../context/cartItemContext";
import { AmountToggle } from "./AmountToggle";

export const AddProductToCart = ({ single_product }) => {
  const { addSingleProductToCart, add_product_loading, cart_items_error } =
    useCartItemContext();
  const [amount, setAmount] = useState(1);
  useEffect(() => {}, [add_product_loading]);

  const decrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const increase = () => {
    if (single_product.stock > amount) {
      setAmount(amount + 1);
    }
  };

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
            loading={add_product_loading}
          >
            <Text fw={780} fz={29}>
              Add To Cart
            </Text>
          </Button>
          <AmountToggle
            amount={amount}
            decrease={decrease}
            increase={increase}
          />
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
