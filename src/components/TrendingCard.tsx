import { useState } from "react";
import { Card, Center, Image, Group, Flex, Badge, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formats";

import "./TrendingCard.css";

export const TrendingCard = ({ product }) => {
  return (
    <div className="container">
      <Card shadow="lg" radius="md" withBorder m="md">
        <Image
          className="image"
          src={product.images[0]}
          fit="contain"
          width={300}
          height={125}
        />
        <div className="overlay">
          <div className="text">
            <Button
              variant="gradient"
              radius="md"
              component={Link}
              size="lg"
              to={`/products/${product._id}`}
            >
              View product
            </Button>
          </div>
        </div>
        <Card.Section>
          <Group
            sx={{
              borderBlockEnd: "2px solid grey",
              paddingBlockEnd: "5px",
              paddingBlockStart: "5px",
            }}
          ></Group>
        </Card.Section>
        <Card.Section>
          <Flex
            direction="row"
            justify="space-between"
            align="start"
            mt="md"
            mb="md"
            pl={15}
            pr={15}
          >
            <p
              style={{
                fontFamily: "Poppins",
              }}
            >
              {product.title} <br />
              {formatPrice(product.price)}
            </p>
            <Badge
              size="md"
              color="red"
              radius="xs"
              variant="gradient"
              gradient={{ from: "orange", to: "red" }}
            >
              TRENDING 🔥
            </Badge>
          </Flex>
        </Card.Section>
      </Card>
    </div>
  );
};
