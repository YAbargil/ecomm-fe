import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: "20rem",
    paddingBottom: "20rem",
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: "20rem",
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[4]
        : theme.colors.gray[2],

    [theme.fn.smallerThan("sm")]: {
      fontSize: "220rem",
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: "5rem",

    [theme.fn.smallerThan("sm")]: {
      fontSize: "rem(32)",
    },
  },

  description: {
    maxWidth: "rem(500)",
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export function NotFoundTitle() {
  const navigate = useNavigate();
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color="dimmed"
        size="lg"
        align="center"
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position="center">
        <Button
          variant="outline"
          mt="md"
          radius="md"
          sx={{ color: "#000000" }}
          onClick={() => navigate(`/`)}
        >
          Back Home
        </Button>
      </Group>
    </Container>
  );
}
