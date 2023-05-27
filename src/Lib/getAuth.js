import { useSelector } from 'react-redux';

export default function GetAuth(params) {
  const { isLogin } = useSelector((state) => state.auth);
}
