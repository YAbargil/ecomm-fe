import {
  Card,
  Image,
  Text,
  Button,
  Group,
  Flex,
  Grid,
  Divider,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { Link } from "react-router-dom";
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
      <Flex align="start" direction={"column"} gap={7}>
        <Card.Section>
          <Image
            src={product.images[0]}
            height={300}
            width={450}
            alt=" product-img"
            fit="contain"
          />
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
                <Text fw={550}>Stock :{product.stock}</Text>
              </>
            ) : (
              <>
                <IconX color="red" stroke={1.7} height={27} />
                <Text color="red">Out Of Stock</Text>
              </>
            )}
          </Flex>
        </Flex>
        <Link to={`/products/${product._id}`}>
          <Button
            variant="default"
            fullWidth
            mt="md"
            radius="md"
            sx={{ color: "#000000" }}
          >
            View Product
          </Button>
        </Link>
      </Flex>
    </Card>
  );
};
