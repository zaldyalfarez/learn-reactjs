import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ErrorPage from "./pages/404.jsx";
import ProductsPage from "./pages/products.jsx";
import ProfilePage from "./pages/profile.jsx";
import DetailProductPage from "./pages/detailProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import { TotalPriceProvider } from "./context/TotalPriceContext.jsx";
import InputUseIdPage from "./pages/useid.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Main Page</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/useid",
    element: <InputUseIdPage />,
  },
]);

createRoot(document.getElementById("root"), {
  identifierPrefix: "vite-react-learn-",
}).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </StrictMode>
);
