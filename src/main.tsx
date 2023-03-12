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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <CartItemProvider>
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
                <App />
              </AppShell>
            </MantineProvider>
          </FilterProvider>
        </ProductProvider>
      </CartItemProvider>
    </UserProvider>
  </React.StrictMode>
);
