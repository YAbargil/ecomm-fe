import axios from "axios";

const client = axios.create({
  baseURL: "https://api-myshopy.onrender.com/api",
});

export function setLocalStorage(token, user) {
  localStorage.setItem("accessToken", `Bearer ${token}`);
  localStorage.setItem("user", JSON.stringify(user));
}

export function setTokenDefaultHeader() {
  client.defaults.headers.common["Authorization"] =
    localStorage.getItem("accessToken");
}

export function getProducts() {
  setTokenDefaultHeader();
  return client.get("/products");
}

export function getSingleProduct(id: string) {
  setTokenDefaultHeader();
  return client.get(`/products/${id}`);
}

export function addToCart(data) {
  setTokenDefaultHeader();
  return client.post("/orderitems/add", data);
}

export function logIn(data) {
  return client.post("/auth/login", data);
}

export function signUp(data) {
  return client.post("/auth/signup", data);
}

export function getCart() {
  setTokenDefaultHeader();
  return client.get("/orderitems/");
}

export function deleteOrderItem(productId, orderItemId) {
  setTokenDefaultHeader();
  return client.delete(`/orderitems/${orderItemId}`, {
    data: {
      productId,
    },
  });
}

export function createOrder() {
  setTokenDefaultHeader();
  return client.post("orders/create");
}

export function getOrders() {
  setTokenDefaultHeader();
  return client.get("/orders");
}

export function getReviews() {
  setTokenDefaultHeader();
  return client.get("/reviews");
}

export function deleteReview(reviewId: string) {
  setTokenDefaultHeader();
  return client.delete(`/reviews/${reviewId}`);
}

export function updateOrderItem(
  orderitemId: string,
  productId: string,
  quantity: number
) {
  setTokenDefaultHeader();
  return client.patch(`/orderitems/${orderitemId}`, { productId, quantity });
}

export function isAuth() {
  setTokenDefaultHeader();
  return client.get("/users/isauth");
}

export function clearToken() {
  localStorage.removeItem("accessToken");
}
