import { useState } from "react";
import { Card, Center, Image, Group, Flex, Badge, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formats";

import "./TrendingCard.css";

export const TrendingCard = ({ product }) => {
  return (
    <div className="container">
      <Card shadow="lg" radius="xs" withBorder m="md">
        <Image
          className="image"
          src={product.images[0]}
          fit="cover"
          width={300}
          height={125}
        />
        <div className="overlay">
          <div className="text">
            <Button
              variant="white"
              radius="sm"
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
            sx={{ borderBlockEnd: "2px solid grey", paddingBlockEnd: "5px" }}
          ></Group>
        </Card.Section>
        <Card.Section>
          <Flex direction="row" justify="space-evenly" m="xs">
            <Flex direction="column" align="flex-start">
              <p>{product.title}</p>
              <p>{formatPrice(product.price)}</p>
            </Flex>
            <Badge
              size="lg"
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
