import { Text } from "@mantine/core";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

export const RatingIcon = ({ numOfStars, size, height }) => {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const calculateRating = () => {
      let starsArray = [];
      let index = 0;
      for (; index < numOfStars; index++) {
        starsArray.push(
          <IconStarFilled key={index} size={size} height={height} />
        );
      }
      for (; index < 5; index++) {
        starsArray.push(<IconStar key={index} size={size} height={height} />);
      }
      return starsArray;
    };
    setStars(calculateRating());
  }, [numOfStars]);

  return <>{stars && <Text>{stars}</Text>}</>;
};
