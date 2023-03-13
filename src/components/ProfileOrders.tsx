import { ScrollArea, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { getOrders } from "../api";
import { SingleOrder } from "./SingleOrder";

export const ProfileOrders = () => {
  const [orders, setOrders] = useState([]);
  const fetchOrders = async () => {
    try {
      const result = await getOrders();
      const data = result.data.orders;
      setOrders(data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [orders]);

  return (
    <>
      <ScrollArea>
        <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Items</th>
              <th>Payment</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <SingleOrder order={o} key={o._id} />
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </>
  );
};
