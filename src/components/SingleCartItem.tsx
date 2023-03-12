import {
  Button,
  Image,
  Divider,
  Flex,
  Group,
  Text,
  LoadingOverlay,
  Title,
  Box,
  Card,
  Table,
  Loader,
  Center,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useCartItemContext } from "../context/cartItemContext";
import { formatPrice } from "../utils/formats";
import { AmountToggle } from "./AmountToggle";

export const SingleCartItem = ({ cart_item }) => {
  const { editQuantityHandler, removeOrderItem, edit_cart_items } =
    useCartItemContext();
  const [cartItem, setCartItem] = useState(null);
  useEffect(() => {
    setCartItem(cart_item);
  }, [edit_cart_items]);
  if (cartItem) {
    return (
      <tr key={cart_item._id}>
        <td>
          <Flex direction={"row"} align="center" gap={"md"} key={cart_item._id}>
            <Image
              key={cart_item._id}
              src={cartItem.image}
              alt="cart_img"
              width={256}
              height={124}
              fit="fill"
            />
            <Flex direction="column" style={{ width: "100%" }}>
              <Text weight={300} color="dimmed">
                {cart_item.itemName}
              </Text>
              <Text mt={7} color="dimmed" fz={12} weight={350}>
                {cart_item.itemBrand}
              </Text>
              <Text mt={7} color="dimmed" weight={550}>
                {cart_item.itemPrice}$
              </Text>
            </Flex>
          </Flex>
        </td>
        <td>
          <Flex
            direction={"row"}
            align="center"
            justify={"flex-start"}
            gap={"lg"}
          >
            <AmountToggle
              amount={cart_item.quantity}
              increase={() => {
                editQuantityHandler(
                  cart_item._id,
                  cart_item.productId,
                  cart_item.quantity + 1
                );
              }}
              decrease={() => {
                if (cart_item.quantity > 1) {
                  editQuantityHandler(
                    cart_item._id,
                    cart_item.productId,
                    cart_item.quantity - 1
                  );
                }
              }}
            />
          </Flex>
        </td>
        <td>
          <Text color="dimmed">{formatPrice(cart_item.total)}</Text>
        </td>
        <td>
          <Button
            style={{ background: "transparent" }}
            onClick={() => removeOrderItem(cart_item.productId, cartItem._id)}
          >
            <IconTrash color="red" stroke={1.6} />
          </Button>
        </td>
      </tr>
    );
  }
};
