import { Divider, Flex, Image } from "@mantine/core";
import { useEffect, useState } from "react";

export const SingleProductImages = ({ images }) => {
  const [imageClicked, setImageClicked] = useState(false);
  const [restImages, setRestImages] = useState(null);
  const [firstImage, setFirstImage] = useState(null);

  useEffect(() => {
    if (images) {
      setFirstImage(images[0]);
      setRestImages(images.slice(1));
    }
  }, [images]);

  useEffect(() => {}, [restImages]);

  const handleImageClick = (index: number) => {
    const clickedImage = restImages[index];
    setRestImages((prevImages) => {
      const newImages = [...prevImages];
      newImages.splice(index, 1, firstImage);
      return newImages;
    });
    setFirstImage(clickedImage);
  };

  return (
    <>
      <Flex direction={"column"} align="center">
        {imageClicked ? (
          <Image
            fit="fill"
            height={800}
            width={800}
            src={firstImage}
            key={firstImage._id}
            onClick={() => setImageClicked(!imageClicked)}
            sx={{ cursor: "zoom-out" }}
          />
        ) : (
          <Image
            fit="fill"
            height={500}
            width={500}
            src={firstImage}
            onClick={() => {
              setImageClicked(!imageClicked);
            }}
            sx={{ cursor: "zoom-in" }}
          />
        )}
        <Divider size={"xl"} m="xs"></Divider>
        <Flex align="flex-end" gap={2}>
          {restImages?.map((image, index: number) => (
            <>
              <Image
                fit="fill"
                height={200}
                width={200}
                src={image}
                key={image._id}
                radius="sm"
                sx={{ cursor: "pointer" }}
                onClick={() => handleImageClick(index)}
              />
            </>
          ))}
        </Flex>
      </Flex>
    </>
  );
};
