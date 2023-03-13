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

export const ProtectedRoutes = () => {
  return localStorage.getItem("accessToken") ? (
    <Outlet />
  ) : (
    <Navigate to={"/"} />
  );
};

// function addToDB(item) {
//   return fetch("https://api-myshopy.onrender.com/api/products/add", {
//     method: "POST",
//     body: JSON.stringify(item),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());
// }

// function addItemsToDatabase(items) {
//   items.forEach((item) => {
//     addToDB(item)
//       .then((response) => {
//         console.log(`Item with ID ${response.id} added to the database`);
//       })
//       .catch((error) => {
//         console.error(`Error adding item to the database: ${error}`);
//       });
//   });
// }
