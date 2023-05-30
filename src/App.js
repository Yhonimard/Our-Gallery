import { RouterProvider } from 'react-router-dom';
import router from './Router';
import {
  Backdrop,
  CircularProgress,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Aos from 'aos';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const isLoading = useSelector((state) => state.global.isLoading);

  return (
    <>
      <Backdrop
        open={isLoading}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color='inherit' />
      </Backdrop>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
