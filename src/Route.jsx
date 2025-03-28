import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "./Layouts/HomeLayout";
import CategoryNews from "./Components/Pages/CategoryNews";
import AuthLayout from "./Layouts/AuthLayout";
import Login from "./Components/Login";
import Register from "./Components/register";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <h1>this is news</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>error</h1>,
  },
]);

export default Route;
