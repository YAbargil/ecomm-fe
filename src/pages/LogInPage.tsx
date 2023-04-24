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
  Center,
} from "@mantine/core";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LogInPage = () => {
  const { logUser, loading, user_error, message, user, isAuth } =
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
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 5 ? "Password must have at least 5 letters" : null,
    },
  });

  return (
    <Group position="center" p={"%30"} mt={100}>
      <Flex justify={"center"} direction="column">
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
              Login
            </Title>
          </Flex>
          <Flex align="center" justify={"center"} maw={600} mt={"lg"}>
            <form
              onSubmit={form.onSubmit(async (values) => {
                await logUser(values);
              })}
            >
              <TextInput
                size="md"
                label="Email"
                placeholder="email@email.com"
                {...form.getInputProps("email")}
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
                <Text c="blue">New here?</Text>
                <Text c="blue" fw={540} component="a" href="/signup">
                  Sign up
                </Text>
              </Flex>
            </form>
          </Flex>
        </Paper>
      </Flex>
    </Group>
  );
};
