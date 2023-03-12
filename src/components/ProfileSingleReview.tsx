import { Group, Text, Anchor, ActionIcon, Rating } from "@mantine/core";
import { IconCircleArrowRight, IconTrash } from "@tabler/icons-react";
import { formatDate } from "../utils/formats";

export const ProfileSingleReview = ({ review }) => {
  return (
    <>
      <tr key={review._id}>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500} color="dimmed">
              {review._id}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={500} color="dimmed">
              {formatDate(review.createdAt)}
            </Text>
          </Group>
        </td>
        <td>
          <Text size="sm" weight={610} color="dimmed">
            {review.title}
          </Text>
        </td>
        <td>
          <Rating value={review.rating} readOnly></Rating>
        </td>
        <td>
          <Anchor href={`/products/${review.productId}`}>
            <IconCircleArrowRight />
          </Anchor>
        </td>
      </tr>
    </>
  );
};
