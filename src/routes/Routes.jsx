import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayouts";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);

export default routes;
