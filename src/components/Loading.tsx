import { Container, Loader } from "@mantine/core";

export const Loading = () => {
  return (
    <>
      <Container size="10rem" py={"10rem"} px={"10rem"}>
        <Loader color="indigo" variant="dots" />
      </Container>
    </>
  );
};
