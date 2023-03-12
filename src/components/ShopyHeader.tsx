import { Button, Flex, Header, Text, Image, HoverCard } from "@mantine/core";
import { IconShoppingCart, IconUserCircle } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useUserContext } from "../context/userContext";
import { useEffect } from "react";
import { useCartItemContext } from "../context/cartItemContext";

export const ShopyHeader = () => {
  const { isAuth, user } = useUserContext();
  const { cart_items_count } = useCartItemContext();
  useEffect(() => {}, [isAuth]);

  return (
    <Header
      height={62}
      styles={(theme) => ({
        root: {
          backgroundColor: theme.colors.indigo,
          color: "white",
        },
      })}
    >
      <Flex px="lg" align={"center"} justify={"space-between"} gap="md">
        <Button component="a" href="/" variant="default" mt={13} ml={"45%"}>
          <Image
            src={"https://i.ibb.co/PgYWQ6B/logo.jpg"}
            alt="Logo"
            width={200}
            height={55}
            fit="contain"
          ></Image>
        </Button>
        <Flex gap="xs" align={"center"} mt={20}>
          {user && isAuth ? (
            <Button
              component="a"
              href="/profile"
              variant="subtle"
              size="xs"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <Flex align={"center"} gap={5}>
                <p
                  style={{
                    font: "inherit",
                    fontWeight: "lighter",
                    fontSize: 15,
                    color: "white",
                  }}
                >
                  Profile
                </p>
                <IconUserCircle stroke={1.3} color="white" />
              </Flex>
            </Button>
          ) : (
            <Button
              component="a"
              href="/login"
              variant="subtle"
              style={{
                backgroundColor: "transparent",
              }}
            >
              <p
                style={{
                  font: "inherit",
                  fontWeight: "lighter",
                  fontSize: 15,
                  color: "white",
                }}
              >
                Login
              </p>
            </Button>
          )}
          <Flex>
            <ActionIcon
              component="a"
              href="/cart"
              style={{
                backgroundColor: "",
                width: "33px",
              }}
            >
              <IconShoppingCart
                height={40}
                stroke={1.7}
                color="white"
                size={50}
              />
            </ActionIcon>
            {cart_items_count > 0 && (
              <span
                style={{
                  backgroundColor: "red",
                  height: "18px",
                  width: "18px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    fontFamily: "inherit",
                    fontWeight: "bold",
                  }}
                >
                  {cart_items_count}
                </p>
              </span>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};
