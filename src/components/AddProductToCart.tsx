import { Button, Center, Divider, Flex, Text } from "@mantine/core";
import { IconPlus, IconMinus, IconShoppingCartPlus } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useCartItemContext } from "../context/cartItemContext";
import { AmountToggle } from "./AmountToggle";
import { IProduct } from "../utils/types/types";
import { useUserContext } from "../context/userContext";

type Props = {
  single_product: IProduct;
};

export const AddProductToCart = ({ single_product }) => {
  const { isAuth } = useUserContext();
  const { addSingleProductToCart, add_product_loading, cart_items_error } =
    useCartItemContext();
  const [amount, setAmount] = useState(1);
  useEffect(() => {}, [add_product_loading, isAuth]);

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
      {isAuth ? (
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
      ) : (
        <Flex direction="column" justify={"center"} m="xl">
          <Button
            style={{
              height: "25px",
              width: "auto",
              background: "#0f172a",
              color: "#f8fafc",
            }}
            component="a"
            href="/login"
          >
            Login
          </Button>
          <Text color={"dimmed"} sx={{ font: "status-bar" }}>
            *Please login in order to fill your cart
          </Text>
        </Flex>
      )}
    </>
  );
};
