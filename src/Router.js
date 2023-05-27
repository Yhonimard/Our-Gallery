import { createBrowserRouter } from 'react-router-dom';
import RootPage from './Page/Root/RootPage';
import HomePage from './Page/Home/HomePage.';
import AddPhoto from './Page/AddPhotos/AddPhotoPage';
import LoginPage from './Page/Login/LoginPage';
import Protected from 'Components/Protected';
import Authorized from 'Components/Authorized';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Protected>
        <RootPage />
      </Protected>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'add-photo',
        element: <AddPhoto />,
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Authorized>
        <LoginPage />
      </Authorized>
    ),
  },
]);

export default router;
