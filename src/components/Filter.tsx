import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const Filter = () => {
  return (
    <>
      <Input
        icon={<IconSearch stroke={1.1} size={19} />}
        placeholder="Search"
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};
