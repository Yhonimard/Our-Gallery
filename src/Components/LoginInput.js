import { TextField, InputAdornment } from '@mui/material';

const LoginInput = ({ children, register, name, type, error }) => {
  return (
    <TextField
      label={name}
      size='small'
      type={type || 'text'}
      error={error ? true : false}
      helperText={error?.message}
      {...register(`${name}`)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>{children}</InputAdornment>
        ),
      }}
      variant='standard'
    />
  );
};

export default LoginInput;
