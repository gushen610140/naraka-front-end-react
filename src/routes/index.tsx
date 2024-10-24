import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import App from "../App.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/app",
    element: <App></App>,
  },
]);
