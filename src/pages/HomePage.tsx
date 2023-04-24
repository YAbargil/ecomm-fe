import {
  Image,
  Flex,
  Text,
  Title,
  Container,
  Center,
  Button,
  Divider,
} from "@mantine/core";
import { Link } from "react-router-dom";
import story from "../assets/story.svg";
import { TrendingProducts } from "../components/TrendingProducts";
import logo from "../assets/logo.svg";

export const Home = () => {
  return (
    <Flex direction={"column"} sx={{ backgroundColor: "#ADADA" }}>
      <Container p={"xl"} mt={150}>
        <Image
          src={logo}
          width={"100%"}
          height={"100%"}
          style={{ borderBlock: "4px solid black" }}
        />
      </Container>
      <Container p={"xl"}>
        <Flex direction="row" align="center" justify={"center"} mr={50}>
          <Flex direction="column" gap="xs" align={"center"}>
            <h1 style={{ fontFamily: "cursive", fontSize: 35 }}></h1>

            <Title
              order={1}
              sx={{
                fontFamily: "cursive",
                fontSize: 35,
              }}
            >
              Our Story
            </Title>
            <Container size="xl" px="xl">
              <Center>
                <Text>
                  <p>
                    Welcome to our online store , We offer a wide range of
                    high-quality products at competitive prices. Whether you're
                    looking for the latest electronics, stylish fashion, or
                    unique gifts, we have something for everyone. Our
                    user-friendly website makes it easy to browse and purchase
                    products, and our fast and reliable shipping ensures that
                    you receive your order quickly. We're committed to providing
                    excellent customer service and making your shopping
                    experience as smooth and enjoyable as possible. Start
                    shopping today and discover why so many customers choose us
                    for all their online shopping needs.
                  </p>
                </Text>
              </Center>
            </Container>
          </Flex>
          <Image src={story} alt="story" width={350} height={550}></Image>
        </Flex>
        <Flex justify={"center"} mr={100} mb="xl">
          <Link to="/products">
            <Button
              variant="default"
              color="#F8F9FA"
              style={{ background: "#000000", textAlign: "center" }}
              size={"xl"}
            >
              <Text color={"white"}>SHOP NOW</Text>
            </Button>
          </Link>
        </Flex>
      </Container>
      <Divider sx={{ border: "1px  solid black" }}></Divider>
      <TrendingProducts />
    </Flex>
  );
};
