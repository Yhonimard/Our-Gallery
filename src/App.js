import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { ThemeProvider, createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';

function App() {
  const theme = createTheme({
    palette: {
      primary: grey,
    },
  });
  const auth = useSelector((state) => state.auth);
  console.log(auth);

  console.log('test');
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
