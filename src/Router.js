import { createBrowserRouter } from "react-router-dom";
import RootPage from "./Page/Root/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
  },
]);

export default router;
