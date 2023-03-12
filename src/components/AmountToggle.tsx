import { Button } from "@mantine/core";
import { IconMinus, IconPlus } from "@tabler/icons-react";
export const AmountToggle = ({ amount, increase, decrease }) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          color: "black",
          border: "none",
          padding: "0",
          margin: "5px",
        }}
        onClick={decrease}
      >
        <IconMinus />
      </Button>
      <h3
        style={{
          font: "caption",
          fontSize: 29,
        }}
      >
        {amount}
      </h3>
      <Button
        style={{
          backgroundColor: "transparent",
          backgroundRepeat: "no-repeat",
          color: "black",
          border: "none",
          padding: "0",
          margin: "5px",
        }}
        onClick={increase}
      >
        <IconPlus />
      </Button>
    </>
  );
};
