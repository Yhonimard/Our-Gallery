const { useSelector } = require('react-redux');
const { Navigate } = require('react-router-dom');

export default function Protected({ children }) {
  const { isLogin } = useSelector((state) => state.auth);
  return isLogin ? children : <Navigate to='/login' replace />;
}
