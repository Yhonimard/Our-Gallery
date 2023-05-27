import { auth, db } from 'Lib/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { login } from './AuthReducer';
import { showNotification } from '../global/GlobalReducer';
import generateGreetings from 'Lib/GenerateGreeting';

export const LoginAuth = (datas) => {
  return async (dispatch) => {
    try {
      const {
        user: { uid },
      } = await signInWithEmailAndPassword(auth, datas.email, datas.password);
      if (uid) {
        const docRef = doc(db, 'users', uid);
        try {
          const user = await getDoc(docRef);
          const name = user.data().name;
          const userProfile = {
            name,
            id: uid,
          };
          dispatch(login(userProfile));

          if (name.toLowerCase() === 'alin') {
            const getCurrentTime = generateGreetings();
            dispatch(
              showNotification({
                variant: 'success',
                message: `hallooo sayangku ${name}, ${getCurrentTime} selamat beraktifitass babyyy`,
              })
            );
          } else {
            const getCurrentTime = generateGreetings();
            dispatch(
              showNotification({
                variant: 'success',
                message: `halo ${name}, ${getCurrentTime}`,
              })
            );
          }
        } catch (error) {
          const getCurrentTime = generateGreetings();
          dispatch(
            showNotification({
              variant: 'error',
              message: `${getCurrentTime}. login error coba nanti ulang lagi.`,
            })
          );
        }
      }
    } catch (error) {
      console.log(error);
      const getCurrentTime = generateGreetings();
      dispatch(
        showNotification({
          variant: 'error',
          message: `${getCurrentTime}. passwordnya salah kali kalo ga nanti ulang lagi. `,
        })
      );
    }
  };
};

export default function name(params) {}
