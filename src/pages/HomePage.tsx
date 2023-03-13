import {
  Image,
  Flex,
  Text,
  Title,
  Container,
  Center,
  Button,
  Divider,
  Group,
} from "@mantine/core";
import { Link } from "react-router-dom";
import story from "../assets/story.svg";
import { TrendingProducts } from "../components/TrendingProducts";
import logo from "../assets/logo.svg";

export const Home = () => {
  return (
    <Flex direction={"column"} p={"xl"}>
      <Container p={"xl"}>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                    quidem ullam qui corrupti sint ipsa suscipit. Odit
                    voluptatum dignissimos necessitatibus cumque eius obcaecati
                    eligendi eum ducimus aliquam rerum esse soluta, totam, sequi
                    id eaque laudantium error repellat ex, veritatis optio
                    officiis accusantium molestias deleniti libero! Provident
                    pariatur, quam molestias amet eius vero consequuntur alias
                    obcaecati beatae, ipsum nulla odio qui soluta ad ut quaerat
                    nesciunt. Voluptatem, praesentium corporis quisquam optio
                    accusantium, aspernatur quam quidem sit asperiores
                    exercitationem eius nemo facere est quos facilis cumque
                    atque alias amet. Doloribus obcaecati facere, nesciunt
                    laborum, incidunt, harum deserunt non vitae quae amet
                    voluptatem.
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
      <Divider sx={{ border: "1px  solid black" }}></Divider>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        <Group position={"center"} size={"xl"} mt="xl">
          <p style={{ color: "white", fontFamily: "monospace" }}>
            MyShopy | E-Commerce{" "}
          </p>
        </Group>
      </div>
    </Flex>
  );
};
