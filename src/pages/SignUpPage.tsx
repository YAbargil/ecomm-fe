import { useForm } from "@mantine/form";
import {
  TextInput,
  Button,
  Flex,
  Text,
  Image,
  Group,
  Paper,
  Title,
  PasswordInput,
  LoadingOverlay,
  Center,
} from "@mantine/core";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignUpPage = () => {
  const { signUpHandler, loading, user_error, message, isAuth } =
    useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      password: (value) =>
        value.length < 5 ? "Password must have at least 5 letters" : null,
    },
  });

  return (
    <Group position="center">
      <Flex justify={"center"} direction="column" maw={700} align="center">
        <Paper shadow="xl" radius="xs" p="xl" withBorder mt={"14%"}>
          <Image src={"https://i.ibb.co/PgYWQ6B/logo.jpg"} mt="xl" mb="xl" />
          <Flex mih={50} gap="xs" justify="center" align="flex-start" mb={"xl"}>
            <Title
              order={1}
              weight={700}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan", deg: 45 }}
              sx={{ fontFamily: "Greycliff CF, sans-serif" }}
            >
              Signup
            </Title>
          </Flex>
          <Flex align="center" justify={"center"} maw={600} mt={"lg"}>
            <LoadingOverlay visible={false} overlayBlur={2} />
            <form
              onSubmit={form.onSubmit((values) => {
                signUpHandler(values);
              })}
            >
              <TextInput
                size="md"
                label="Email"
                placeholder="email@email.com"
                {...form.getInputProps("email")}
              />
              <TextInput
                size="md"
                label="Name"
                placeholder="name"
                {...form.getInputProps("name")}
              />

              <PasswordInput
                size="md"
                label="Password"
                placeholder="Password"
                mt="md"
                {...form.getInputProps("password")}
              />
              {user_error && message && (
                <Center>
                  <Text
                    fw={550}
                    sx={{ fontVariant: "all-petite-caps" }}
                    color={"red"}
                  >
                    {message + " !"}
                  </Text>
                </Center>
              )}
              <Button
                type="submit"
                mt="xl"
                fullWidth
                loading={loading}
                loaderPosition="right"
                loaderProps={{ variant: "dots" }}
              >
                Submit
              </Button>
              <Flex
                mt={10}
                justify={"center"}
                direction="row"
                align={"flex-start"}
                gap="xs"
              >
                <Text c="blue">Already have an account?</Text>
                <Text c="blue" fw={540} component="a" href="/login">
                  Login now
                </Text>
              </Flex>
            </form>
          </Flex>
        </Paper>
      </Flex>
    </Group>
  );
};
