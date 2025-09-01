import { createBrowserRouter } from "react-router";
import App from "../App";
import Blog from "../components/Pages/Blog";
import BlogDetails from "../components/Pages/BlogDetails";
import BlogLayout from "../components/Layouts/BlogLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/blogs",
    Component: BlogLayout,
    children: [
      {
        index: true,
        Component: Blog,
      },
      {
        path: ":id",
        Component: BlogDetails,
      },
    ],
  },
]);
