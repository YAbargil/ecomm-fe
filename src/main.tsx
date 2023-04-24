import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductProvider } from "./context/productContext";
import { FilterProvider } from "./context/filterContext";
import { UserProvider } from "./context/userContext";
import { AppShell, MantineProvider } from "@mantine/core";
import { ShopyHeader } from "./components/ShopyHeader";
import { CartItemProvider } from "./context/cartItemContext";
import Footer from "./components/Footer";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <CartItemProvider>
        <ProductProvider>
          <FilterProvider>
            <MantineProvider withGlobalStyles withNormalizeCSS>
              <AppShell
                header={<ShopyHeader />}
                footer={<Footer />}
                styles={(theme) => ({
                  main: {
                    padding: 0,
                  },
                })}
              >
                <App />
              </AppShell>
            </MantineProvider>
          </FilterProvider>
        </ProductProvider>
      </CartItemProvider>
    </UserProvider>
  </React.StrictMode>
);
