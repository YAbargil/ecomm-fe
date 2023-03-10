import { Navigate, Outlet } from "react-router-dom";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};

export const getUniqueValues = (arr: []) => {
  const set = new Set([...arr]);
  return Array.from(set);
};

export const AuthRoutes = () => {
  return localStorage.getItem("accessToken") ? (
    <Navigate to={"/"} />
  ) : (
    <Outlet />
  );
};
