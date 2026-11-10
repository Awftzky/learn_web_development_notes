import type { RouteObject } from "react-router";
import Home from "../components/pages/Home/Home";
import Menu from "../components/pages/Menu/Menu";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu/:id",
    element: <Menu />,
  },
];

export default routes;
