import { Box, Container } from '@mui/material';
import { grey } from '@mui/material/colors';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <Box sx={{ backgroundColor: grey[900] }} minHeight='100vh'>
      <Container maxWidth='sm' sx={{ height: '100vh' }}>
        <LoginForm />
      </Container>
    </Box>
  );
};

export default LoginPage;
