import { createBrowserRouter } from "react-router-dom";
import RootPage from "./Page/Root/RootPage";
import HomePage from "./Page/Home/HomePage.";
import AddPhoto from "./Page/AddPhotos/AddPhotoPage";
import LoginPage from "./Page/Login/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "add-photo",
        element: <AddPhoto />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
