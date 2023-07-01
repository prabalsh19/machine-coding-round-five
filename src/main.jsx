import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home/Home.jsx";
import { RecipieContextProvider } from "./context/recipie-context.jsx";
import { RecipieDetails } from "./Pages/RecipieDetails/RecipieDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/details/:id", element: <RecipieDetails /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecipieContextProvider>
      <RouterProvider router={router} />
    </RecipieContextProvider>
  </React.StrictMode>
);
