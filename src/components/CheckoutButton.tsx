import { Button } from "@mantine/core";
import { IconLock } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useCartItemContext } from "../context/cartItemContext";

export const CheckoutButton = () => {
  const { clickOrderHandler, cart_items_loading } = useCartItemContext();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(cart_items_loading);
  }, [cart_items_loading]);

  return (
    <Button
      loading={disabled}
      loaderPosition="right"
      loaderProps={{ variant: "dots" }}
      size="xl"
      mt={-33}
      mb={10}
      variant="gradient"
      gradient={{ from: "orange", to: "red" }}
      styles={(theme) => ({
        root: {
          width: 350,
        },
      })}
      rightIcon={<IconLock stroke={2.2} />}
      onClick={() => clickOrderHandler()}
    >
      Checkout
    </Button>
  );
};
