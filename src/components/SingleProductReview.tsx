import {
  Title,
  Image,
  Flex,
  Card,
  Button,
  Group,
  Text,
  Accordion,
  Rating,
  Avatar,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useProductsContext } from "../context/productContext";
import { formatDate, formatName } from "../utils/formats";
import { RatingIcon } from "./RatingIcon";

export const SingleProductReview = ({ product }) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {}, [product]);

  {
    return product ? (
      <Flex align={"flex-end"} gap="sm" m={"lg"}>
        <Accordion
          sx={{ width: "100%" }}
          variant="contained"
          defaultValue="review"
          value={value}
          onChange={setValue}
        >
          <Accordion.Item value="review">
            <Accordion.Control>
              <Group position="center" mb={3} align="baseline">
                <Text fz={21} weight={600} sx={{ fontFamily: "sans-serif" }}>
                  Reviews ({product.reviews?.length})
                </Text>
                <Rating
                  value={product.averageRating}
                  readOnly
                  size={20}
                ></Rating>

                {product.averageRating && (
                  <Text mb={3} weight={600} sx={{ fontFamily: "sans-serif" }}>
                    {`${product.averageRating}.0`}
                  </Text>
                )}
              </Group>
            </Accordion.Control>
            <Accordion.Panel>
              <Card p="xl">
                {product.reviews?.map((review, index) => {
                  let name = formatName(review.userId.name);
                  return (
                    <Card.Section
                      withBorder
                      inheritPadding
                      py="xs"
                      key={review._id}
                    >
                      <Flex mr={2} direction="column" gap="xl">
                        <Flex direction="row" gap={3}>
                          <Avatar color="cyan" radius="xl">
                            {name[0]}
                          </Avatar>
                          <Text mt={7} weight={550}>
                            {name}
                          </Text>
                          <Text></Text>
                        </Flex>
                        <Flex direction="column" ml={50} mt={-10} gap="md">
                          <Flex gap={"xs"}>
                            <Title order={4}>{review.title}</Title>
                            <RatingIcon
                              numOfStars={review.rating}
                              size={12}
                              height={27}
                            />
                            <Text fz={10} mt={5}>
                              {formatDate(review.createdAt)}
                            </Text>
                          </Flex>
                          <Flex direction="column" justify={"center"} mt={-10}>
                            <Text>{review.description}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                    </Card.Section>
                  );
                })}
              </Card>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Flex>
    ) : (
      <p>s</p>
    );
  }
};
