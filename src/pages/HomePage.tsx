import {
  Image,
  Flex,
  Text,
  Title,
  Container,
  Center,
  Button,
} from "@mantine/core";
import { Link, redirect } from "react-router-dom";
// import story from "../../public/story.svg";

export const Home = () => {
  return (
    <Flex direction={"column"} p="xl">
      <Container p={"xl"}>
        <Flex direction="row" align="center" justify={"center"} mr={50}>
          <Flex direction="column" gap="md" align={"center"}>
            <Title order={1}> Our Story</Title>
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
          {/* <Image src={story} alt="story" width={350} height={550}></Image> */}
        </Flex>
        <Link to="/products">
          <Button
            variant="light"
            color="#F8F9FA"
            style={{ background: "#000000" }}
          >
            SHOP NOW
          </Button>
        </Link>
      </Container>
    </Flex>
  );
};
