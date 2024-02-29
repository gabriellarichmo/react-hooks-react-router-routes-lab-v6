import { createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import Directors from "../src/pages/Directors";
import Actors from "../src/pages/Actors";
import Movie from "../src/pages/Movie";
import NavBar from "./components/NavBar";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/directors",
        element: <Directors />,
      },
      {
        path: "/actors",
        element: <Actors />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
    ],
  },
]);

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: (
      <>
        <NavBar /> <Directors />
      </>
    ),
  },
  {
    path: "/actors",
    element: (
      <>
        <NavBar /> <Actors />
      </>
    ),
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar /> <Movie />
      </>
    ),
  },
];

export default router;
