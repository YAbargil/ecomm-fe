import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../context/productContext";
import { Title, Flex, Text, Center, Divider } from "@mantine/core";
import { Loading } from "../components/Loading";
import { AddProductToCart } from "../components/AddProductToCart";
import { SingleProductContent } from "../components/SingleProductContent";
import { SingleProductImages } from "../components/SingleProductImages";
import { SingleProductReview } from "../components/SingleProductReview";

export const SingleProductPage = () => {
  const navgiate = useNavigate();
  const {
    fetchSingleProduct,
    single_product,
    single_product_error,
    single_product_loading,
  } = useProductsContext();
  const { id } = useParams();
  useEffect(() => {
    fetchSingleProduct(id);
  }, []);

  useEffect(() => {
    if (single_product_error) {
      setTimeout(() => {
        navgiate("/");
      }, 3000);
    }
  }, [single_product_error]);

  if (single_product_loading) {
    return <Loading></Loading>;
  }

  if (single_product_error) {
    return (
      <div>
        <Center mt={"25%"}>
          <Title size="xl">An error occured while loading the product .</Title>
        </Center>
      </div>
    );
  }

  return (
    <>
      <Flex direction={"column"}>
        <Flex direction="row" align={"flex-start"} justify="space-around">
          <Flex
            justify={"center"}
            align={"center"}
            direction={"column"}
            sx={{
              border: "4px solid black",
              borderRadius: "5px",
              padding: "80px",
              margin: "5px",
            }}
          >
            <SingleProductContent single_product={single_product} />
            <Divider></Divider>
            <AddProductToCart single_product={single_product} />
          </Flex>
          <SingleProductImages images={single_product.images} />
        </Flex>
        <Divider variant="dashed" mt={"lg"}></Divider>
        <SingleProductReview product={single_product} />
      </Flex>
    </>
  );
};
