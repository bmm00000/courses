import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import Posts from "./routes/Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [{ path: "/new", element: <NewPost /> }],
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
