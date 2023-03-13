import { Loading } from "../components/Loading";
import { useCartItemContext } from "../context/cartItemContext";
import { Divider, Flex, Title, Table } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { IconShoppingBag } from "@tabler/icons-react";
import { CartItemContent } from "../components/CartItemContent";
import { formatPrice } from "../utils/formats";
import { useNavigate } from "react-router-dom";
import { CheckoutButton } from "../components/CheckoutButton";

export const CartPage = () => {
  const { cart_items, set_cart_loading, cart_items_loading, total } =
    useCartItemContext();
  const [summary, setSummary] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setSummary({
      total: total,
      items: cart_items.length,
    });
  }, [set_cart_loading]);

  if (set_cart_loading) {
    return <Loading />;
  }

  return (
    <>
      <Flex justify={"center"} gap="sm">
        <Title mb={20} weight={9}>
          Cart
        </Title>
        <IconShoppingBag size={44} stroke={0.6} />
      </Flex>
      <Divider sx={{ borderBlockEnd: "2px solid black" }}> </Divider>
      <CartItemContent />

      {cart_items.length > 0 && (
        <>
          <Flex justify={"center"} p="xl" m={"xl"}>
            <Table
              withBorder
              verticalSpacing="xl"
              sx={{
                width: 450,
                height: 175,
                border: "3px solid gray",
                marginBlock: "10px",
                paddingBlock: "50px",
              }}
            >
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <h4>Shipping Cost</h4>
                  </td>
                  <td>
                    <h4>Free</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>TAX</h4>
                  </td>
                  <td>
                    <h4>0%</h4>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Total</h4>
                  </td>
                  <td>
                    <h4 weight={500}>{formatPrice(summary?.total)}</h4>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Flex>
          <Divider variant="dashed"> </Divider>

          <Flex align={"end"} m={75} justify="center">
            <Divider my="sm" variant="dotted" />
            <CheckoutButton />
          </Flex>
        </>
      )}
    </>
  );
};
