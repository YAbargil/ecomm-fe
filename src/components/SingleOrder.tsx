import {
  Group,
  Text,
  Badge,
  Button,
  useMantineTheme,
  Modal,
  Flex,
  Image,
  Divider,
} from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { useState } from "react";
import { formatDate, formatName, formatPrice } from "../utils/formats";

export const SingleOrder = ({ order }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        sx={{ height: 1000, width: 1000 }}
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Text fz={15}>Products</Text>}
      >
        {order.items.map((i) => (
          <Flex direction="column" key={i._id}>
            <Divider mt={3} mb={3}></Divider>
            <Flex direction="row" gap={20}>
              <Image src={i.image} width={100} height={100} fit="fill"></Image>
              <Flex direction="column" gap={1} align="flex-start">
                <Text color={"dimmed"}>{i.itemName}</Text>
                <Text color={"dimmed"}>{i.itemPrice} $</Text>
                <Text color={"dimmed"}>Quantity :{i.quantity}</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Modal>

      <tr key={order._id}>
        <td>
          <Group spacing="md">
            <button
              style={{
                background: "transparent",
              }}
              onClick={() => setOpened(true)}
            >
              <Flex align={"center"} gap="md">
                <Text size="sm" weight={500} color="dimmed">
                  {order._id}
                </Text>
                <IconEye color="grey" stroke={1.1} />
              </Flex>
            </button>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500} color="dimmed">
              {formatDate(order.createdAt)}
            </Text>
          </Group>
        </td>
        <td>
          <Badge variant={theme.colorScheme === "dark" ? "light" : "outline"}>
            {order.status}
          </Badge>
        </td>
        <td>
          <Button size="xs" variant="subtle" onClick={() => setOpened(true)}>
            ( {order.items?.length} )
          </Button>
        </td>
        <td>
          <Text size="sm" color="dimmed">
            {formatName(order.payment)}
          </Text>
        </td>
        <td>
          <Text size="sm" color="dimmed">
            {formatPrice(order.total)}{" "}
          </Text>
        </td>
      </tr>
    </>
  );
};
