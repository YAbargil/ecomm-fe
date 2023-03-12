import { ScrollArea, Table, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { Loading } from "./Loading";
import { ProfileSingleReview } from "./ProfileSingleReview";

export const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const result = await getReviews();
      const data = result.data.reviews;
      setReviews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [reviews]);

  if (!reviews) {
    return <Loading></Loading>;
  }
  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Review Number</th>
              <th>Created At</th>
              <th>Title</th>
              <th>Rating</th>
              <th>Product</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <ProfileSingleReview review={r} key={r._id} />
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
};
