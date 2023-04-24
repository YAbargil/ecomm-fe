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
  createStyles,
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

const useStyles = createStyles((theme) => ({
  carddetails: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
    paddingRight: 25,
    paddingLeft: 25,
    justifyContent: "space-around",
  },
}));

export const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <Card
      shadow="md"
      radius="md"
      sx={{
        border: "1px solid black",
      }}
    >
      <Flex direction={"column"}>
        <Card.Section>
          <Flex justify="center" sx={{ backgroundColor: "ButtonHighlight" }}>
            <Image
              src={product.images[0]}
              height={300}
              width={550}
              alt="product-img"
              fit="fill"
            />
          </Flex>
        </Card.Section>
        <div className={classes.carddetails}>
          <Text weight={650}>{product.title}</Text>
          <Text color="dimmed" fz={12}>
            {product.brand}
          </Text>
          <Flex justify={"space-between"} mt={10}>
            <Text size="md" fw={650}>
              {formatPrice(product.price)}
            </Text>
            <Group>
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
            </Group>
          </Flex>
        </div>
        <Button
          variant="default"
          fullWidth
          mt="md"
          radius="md"
          sx={{ border: "1px solid #ADADAD" }}
          onClick={() => navigate(`/products/${product._id}`)}
        >
          View Product
        </Button>
      </Flex>
    </Card>
  );
};
