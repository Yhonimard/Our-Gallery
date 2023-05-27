import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const LoginSchema = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('you should input an email')
      .required('email is required'),
    password: yup
      .string()
      .min(6, 'password should be min 6 characters')
      .max(15, 'password should be max 6 characters')
      .required('password is required'),
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  return { handleSubmit, reset, register, errors };
};

export default LoginSchema;
