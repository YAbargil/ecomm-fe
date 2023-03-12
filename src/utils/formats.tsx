import { Navigate, Outlet } from "react-router-dom";

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};
export const formatDate = (date: Date) => {
  let temp = new Date(date);
  return temp.toDateString();
};

export const getUniqueValues = (arr: []) => {
  const set = new Set([...arr]);
  return Array.from(set);
};

export const formatName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export const AuthRoutes = () => {
  return localStorage.getItem("accessToken") ? (
    <Navigate to={"/"} />
  ) : (
    <Outlet />
  );
};
