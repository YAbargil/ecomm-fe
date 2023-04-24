import { Button, Flex, Group, Input, Slider, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useEffect } from "react";
import { useFilterContext } from "../context/filterContext";
import { formatPrice } from "../utils/formats";

export const Filter = () => {
  const { filters, updateFilter, clearFilters, brands } = useFilterContext();

  return (
    <>
      <Flex direction="column" mr={50}>
        <Input
          icon={<IconSearch stroke={1.1} size={19} />}
          placeholder="Search"
          onChange={updateFilter}
          name="search"
        />
        <Flex
          direction="column"
          style={{
            marginTop: 15,
            paddingTop: 15,
            border: "1px solid #ADADAD",
            paddingInline: "30px",
          }}
        >
          <Flex direction={"column"}>
            <Text fz={18} weight={800}>
              <u>Brand</u>
            </Text>
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
                    fontSize: 13,
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
          </Flex>
          <div>
            <Text fz={18} weight={800}>
              <u>Price</u>
            </Text>
            <input
              type="range"
              name="price"
              onChange={updateFilter}
              min={filters.min_price}
              max={filters.max_price}
              value={filters.price}
            />
            <Text fw={660}>{formatPrice(filters.price)}</Text>
          </div>
          <Group position="center" mb="11px" mt="5px">
            <Button variant="subtle" onClick={clearFilters}>
              Clear Filters
            </Button>
          </Group>
        </Flex>
      </Flex>
    </>
  );
};
