import { createStyles, Text, Group, ActionIcon, Divider } from "@mantine/core";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  footer: {
    fontFamily: "Poppins",
    textAlign: "center",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingBottom: "20px",
    display: "flex",
  },
  footercontainer: {
    backgroundColor: "#82BCFC",
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

const Footer = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footercontainer}>
      <Divider
        sx={{ border: "1px  solid black", marginBottom: "30px" }}
      ></Divider>
      <div className={classes.footer}>
        <Text fz={17} color="black" fw={600} sx={{ fontFamily: "Poppins" }}>
          MyShopy | E-Commerce
        </Text>
        <Group spacing="xs" position="right">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://www.linkedin.com/in/yuval-abargil-33873b248/"
          >
            <IconBrandLinkedin size="1.05rem" stroke={2.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://github.com/YAbargil"
          >
            <IconBrandGithub size="1.05rem" stroke={2.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
};

export default Footer;
