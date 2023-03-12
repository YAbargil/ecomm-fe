import { Avatar, Box, Text, Center, Flex, Group } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";
import { useUserContext } from "../context/userContext";
import { formatName } from "../utils/formats";
import { Loading } from "./Loading";

export const ProfileInfo = () => {
  const { user, isAuth } = useUserContext();

  if (!user) {
    <Loading></Loading>;
  } else {
  }
  return (
    <>
      <Flex justify={"center"} m="15%">
        {isAuth && user ? (
          <Box style={{ border: "1px solid black", padding: "10%" }}>
            <Center>
              <Group noWrap>
                <Avatar size={94} radius="xl" variant="gradient">
                  {user?.name[0]}
                </Avatar>
                <div>
                  <Text fz="lg" fw={500}>
                    {formatName(user?.name)}
                  </Text>

                  <Group noWrap spacing={10} mt={3}>
                    <IconAt stroke={1.5} size="1rem" />
                    <Text fz="sm" c="dimmed">
                      {user.email}
                    </Text>
                  </Group>
                </div>
              </Group>
            </Center>
          </Box>
        ) : (
          <Loading />
        )}
      </Flex>
    </>
  );
};
