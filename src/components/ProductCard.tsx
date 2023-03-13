import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Flex,
  Grid,
  Divider,
  Center,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formats";

interface Product {
  averageRating: number;
  brand: string;
  description: string;
  images: string[];
  numOfReviews: number;
  price: number;
  stock: number;
  title: string;
  _id: string;
}
export const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  return (
    <Card
      shadow="sm"
      p="xl"
      radius="md"
      withBorder
      sx={{
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <Flex direction={"column"} gap={7}>
        <Card.Section>
          <Flex
            align={"center"}
            justify="center"
            sx={{ backgroundColor: "ButtonHighlight" }}
          >
            <Image
              src={product.images[0]}
              height={300}
              width={550}
              alt="product-img"
              fit="contain"
            />
          </Flex>
        </Card.Section>
        <Flex direction={"column"} mt={20}>
          <Text weight={650}>{product.title}</Text>
          <Text color="dimmed" fz={12}>
            {product.brand}
          </Text>
        </Flex>
        <Flex justify={"space-between"} gap={210} mt={10}>
          <Text size="md" fw={650}>
            {formatPrice(product.price)}
          </Text>
          <Flex gap={7}>
            {product.stock > 0 ? (
              <>
                <IconCheck color="green" stroke={2.2} height={27} />
                <Text fw={650}>Stock :{product.stock}</Text>
              </>
            ) : (
              <>
                <IconX color="red" stroke={1.7} height={27} />
                <Text color="red" fw={550}>
                  Out Of Stock
                </Text>
              </>
            )}
          </Flex>
        </Flex>
        <Button
          variant="default"
          fullWidth
          mt="md"
          radius="md"
          sx={{ color: "#000000" }}
          onClick={() => navigate(`/products/${product._id}`)}
        >
          View Product
        </Button>
      </Flex>
    </Card>
  );
};
