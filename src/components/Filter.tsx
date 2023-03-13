import { Button, Flex, Group, Input, Slider, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";
import { useFilterContext } from "../context/filterContext";
import { formatPrice } from "../utils/formats";

export const Filter = () => {
  const { filters, updateFilter, clearFilters, products, brands } =
    useFilterContext();

  return (
    <>
      <Flex direction="column" gap={0}>
        <Input
          icon={<IconSearch stroke={1.1} size={19} />}
          placeholder="Search"
          onChange={updateFilter}
          name="search"
        />
        <Flex
          direction="column"
          ml={10}
          style={{
            border: "1px solid black",
            marginBlock: "14px",
            paddingInline: "11px",
          }}
        >
          <h4>
            <u>Brand</u>
          </h4>
          {brands.map((b, index) => (
            <button
              key={index}
              style={{
                backgroundColor: "transparent",
                backgroundRepeat: "no-repeat",
                border: "none",
                overflow: "hidden",
                outline: "none",
                padding: "0",
                margin: "0",
                display: "inline-block",
                textAlign: "start",
              }}
              onClick={() => {
                const pElement = document.getElementById(b);
                updateFilter(pElement?.textContent);
              }}
            >
              <p
                key={index}
                style={{
                  font: "status-bar",
                  fontSize: 12,
                  fontWeight: `${
                    filters.brand.includes(b) ? "bold" : "normal"
                  }`,
                  margin: "2px",
                }}
                id={b}
              >
                {b}
              </p>
            </button>
          ))}
          <h4>
            <u>Price</u>
          </h4>
          <input
            type="range"
            name="price"
            onChange={updateFilter}
            min={filters.min_price}
            max={filters.max_price}
            value={filters.price}
          />
          <Text fw={660} mt={7}>
            {formatPrice(filters.price)}
          </Text>
          <Group position="center" m="11px">
            <Button variant="subtle" onClick={clearFilters}>
              Clear Filters
            </Button>
          </Group>
        </Flex>
      </Flex>
    </>
  );
};
