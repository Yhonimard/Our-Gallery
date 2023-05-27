import { AccountCircle, Key } from '@mui/icons-material';
import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import LoginSchema from './LoginSchema';
import LoginInput from 'Components/LoginInput';
import { useDispatch, useSelector } from 'react-redux';
import { LoginAuth } from 'Page/Store/auth/Action';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { errors, handleSubmit, register } = LoginSchema();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.isLogin);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(LoginAuth(data));
    auth && navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Paper sx={{ maxWidth: 400, flexGrow: 1, padding: 3 }}>
        <Typography variant='h5' textAlign='center'>
          Login
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Stack spacing={2} component='form' onSubmit={handleSubmit(onSubmit)}>
            <LoginInput name='email' register={register} error={errors.email}>
              <AccountCircle />
            </LoginInput>
            <LoginInput
              name='password'
              register={register}
              type='password'
              error={errors.password}
            >
              <Key />
            </LoginInput>
            <Stack spacing={1}>
              <Button
                variant='contained'
                sx={{ color: '#f1f1f1' }}
                type='submit'
              >
                LOGIN NOW
              </Button>
              <Typography variant='subtitle2'>kepo ya?</Typography>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginForm;
