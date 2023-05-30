import { Box, Typography } from '@mui/material';
import TopHome from './TopHome';
import BottomHome from './BottomHome';
import { useEffect } from 'react';
import Aos from 'aos';

const HomePage = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <TopHome />
      <Box>
        <Box display='flex' ml='25px'>
          <Typography
            variant='h6'
            color='text.secondary'
            borderBottom='3px solid #f1f1f1'
            data-aos='fade-up'
          >
            Our Photos
          </Typography>
        </Box>
        <BottomHome />
      </Box>
    </>
  );
};

export default HomePage;
