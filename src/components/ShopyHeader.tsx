import { Button, Flex, Header, Text, Image, HoverCard } from "@mantine/core";
import { IconShoppingCart, IconUserCircle } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";
import { useUserContext } from "../context/userContext";
import { useEffect } from "react";

export const ShopyHeader = () => {
  const { isAuth, user } = useUserContext();

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
        <Flex justify={"space-between"} gap="xl" align={"center"} mt={20}>
          {user ? (
            <Button component="a" href="/profile" variant="default" size="xs">
              <Flex align={"center"} gap={3}>
                <p
                  style={{
                    font: "inherit",
                    fontWeight: "lighter",
                    fontSize: 13,
                    color: "MenuText",
                  }}
                >
                  Profile
                </p>
                <IconUserCircle stroke={1.3} />
              </Flex>
            </Button>
          ) : (
            <Button component="a" href="/login" variant="default"></Button>
          )}
          <Flex gap={2}>
            <ActionIcon component="a" href="/cart">
              <IconShoppingCart
                height={40}
                stroke={1.7}
                color="white"
                size={50}
              />
            </ActionIcon>
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};
