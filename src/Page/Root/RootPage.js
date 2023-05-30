import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import { Box } from '@mui/material';
import Footer from './Footer';
const RootPage = () => {
  return (
    <div>
      <NavBar />
      <Box
        component='main'
        sx={{ minHeight: '100vh' }}
        bgcolor={`background.default`}
      >
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default RootPage;
