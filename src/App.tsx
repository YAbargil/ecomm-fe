import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { SingleProductPage } from "./pages/SingleProductPage";
import { LogInPage } from "./pages/LogInPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AuthRoutes, ProtectedRoutes } from "./utils/formats";
import { SignUpPage } from "./pages/SignUpPage";
import { CartPage } from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/products/:id" element={<SingleProductPage />}></Route>
        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<LogInPage />}></Route>
        </Route>
        <Route element={<AuthRoutes />}>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
