import { Flex, Text } from "@mantine/core";
import { Link, useLocation } from "react-router-dom";

export const CurrentPath = () => {
  const location = useLocation().pathname;

  return (
    <>
      <Flex direction={"row"} gap="xl" mt={3} align="center">
        <Link to={"/"}>
          <Text fz={14}>Home</Text>
        </Link>
        <Text> / </Text>
        <Text fz={14} sx={{ ":first-letter": { textTransform: "uppercase" } }}>
          {location.slice(1)}
        </Text>
      </Flex>
    </>
  );
};
