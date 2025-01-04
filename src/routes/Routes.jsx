import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayouts";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";
import About from "../Pages/About/About";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact/Contact";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default routes;
