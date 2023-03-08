import { Button, Flex, Header, Text, Image, HoverCard } from "@mantine/core";
import { IconShoppingCart, IconUserCircle } from "@tabler/icons-react";
import { ActionIcon } from "@mantine/core";

export const ShopyHeader = () => {
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
          <ActionIcon
            sx={{
              "&[data-disabled]": { opacity: 0.1 },
              "&[data-loading]": { backgroundColor: "red" },
            }}
            component="button"
          >
            <HoverCard>
              <Text>Profile</Text>
            </HoverCard>
          </ActionIcon>
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
