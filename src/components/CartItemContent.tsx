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
import {
  IconShoppingCartOff,
  IconShoppingBag,
  IconLock,
  IconTrash,
} from "@tabler/icons-react";
import { useCartItemContext } from "../context/cartItemContext";
import { Loading } from "./Loading";
import { useEffect } from "react";
import { formatPrice } from "../utils/formats";
import { AmountToggle } from "./AmountToggle";
import { SingleCartItem } from "./SingleCartItem";

export const CartItemContent = () => {
  const {
    cart_items,
    set_cart_loading,
    cart_items_loading,
    cart_items_count,
    edit_cart_items,
  } = useCartItemContext();

  useEffect(() => {}, [set_cart_loading, edit_cart_items]);

  if (set_cart_loading) {
    return <Loading />;
  } else if (cart_items_count === 0 && set_cart_loading === false) {
    return (
      <>
        <Flex justify={"center"} mt={280} gap="lg">
          <Title color="black" fw={3}>
            Cart Is Empty
          </Title>
          <IconShoppingCartOff size={50} stroke={0.6} />
        </Flex>
      </>
    );
  }

  const ths = (
    <tr>
      <th>Product</th>
      <th>Quantiy</th>
      <th>Subtotal</th>
      <th> </th>
    </tr>
  );

  return (
    <>
      <Table
        horizontalSpacing="lg"
        verticalSpacing="xl"
        fontSize="md"
        highlightOnHover
        m={"md"}
        withBorder
      >
        <thead>{ths}</thead>
        <tbody>
          {cart_items.map((cart_item) => (
            <SingleCartItem cart_item={cart_item} key={cart_item._id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
