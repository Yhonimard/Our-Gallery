import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function Authorized({ children }) {
  const { isLogin } = useSelector((state) => state.auth);
  return isLogin ? <Navigate to={`/`} replace /> : children;
}
