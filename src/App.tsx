import React from "react";
import { AppShell, MantineProvider, Text } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShopyHeader } from "./components/ShopyHeader";
import { Home } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductProvider } from "./context/productContext";
import { SingleProductPage } from "./pages/SingleProductPage";
import { FilterProvider } from "./context/filterContext";

function App() {
  return (
    <ProductProvider>
      <FilterProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <AppShell
            py="xl"
            padding="md"
            header={<ShopyHeader />}
            styles={(theme) => ({
              main: {
                backgroundColor: "#EFF3F2",
              },
            })}
          >
            <BrowserRouter>
              <Routes>
                <Route index path="/" element={<Home />}></Route>
                <Route path="/products" element={<ProductsPage />}></Route>
                <Route
                  path="/products/:id"
                  element={<SingleProductPage />}
                ></Route>
              </Routes>
            </BrowserRouter>
          </AppShell>
        </MantineProvider>
      </FilterProvider>
    </ProductProvider>
  );
}

export default App;
