import {
  Avatar,
  Button,
  Divider,
  Flex,
  Group,
  LoadingOverlay,
  Tabs,
  Text,
} from "@mantine/core";
import {
  IconStar,
  IconTruckDelivery,
  IconSettings,
  IconLogout,
  IconInfoSquareRounded,
  IconUser,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router";
import { ProfileInfo } from "../components/ProfileInfo";
import { ProfileOrders } from "../components/ProfileOrders";
import { MyReviews } from "../components/MyReviews";

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useUserContext();

  return (
    <>
      <Tabs variant="pills" orientation="vertical" defaultValue="info" m={"xs"}>
        <Tabs.List>
          <Flex direction="column">
            <Flex direction={"column"} mr={25} sx={{ height: "100vh" }}>
              <Tabs.Tab
                value="info"
                sx={{ height: 100 }}
                icon={<IconUser size={21} stroke={1.4} />}
              >
                Info
              </Tabs.Tab>
              <Tabs.Tab
                value="reviews"
                sx={{ height: 100 }}
                icon={<IconStar size={17} stroke={1.1} />}
              >
                Reviews
              </Tabs.Tab>
              <Tabs.Tab
                value="orders"
                sx={{ height: 100 }}
                icon={<IconTruckDelivery size={21} stroke={1.1} />}
              >
                Orders
              </Tabs.Tab>
            </Flex>
            <Flex align="center">
              <Button
                sx={{ padding: "10px", marginBlockEnd: "10px" }}
                rightIcon={<IconLogout size={21} stroke={1.5} />}
                variant="outline"
                onClick={() => {
                  logout();
                  setTimeout(() => {
                    navigate("/");
                  }, 800);
                }}
              >
                Logout
              </Button>
            </Flex>
          </Flex>
        </Tabs.List>
        <Divider size={"xl"} orientation="vertical" variant="dotted"></Divider>

        <Tabs.Panel value="info" pl="xs">
          <ProfileInfo />
        </Tabs.Panel>

        <Tabs.Panel value="reviews" pl="xs">
          <MyReviews />
        </Tabs.Panel>

        <Tabs.Panel value="orders" pl="xs">
          <ProfileOrders />
        </Tabs.Panel>
      </Tabs>
    </>
  );
};
