import { Storage, db } from 'Lib/Firebase';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import {
  closeBackdrop,
  showBackdrop,
  showNotification,
} from 'Store/global/GlobalReducer';
import generateGreetings from 'Lib/GenerateGreeting';
import { setPhotoDatas, showImgById } from './ImgReducer';

const photosRef = collection(db, 'our_photos');

const postPhoto = (data, reset) => {
  return async (dispatch) => {
    const { imgFile, date, place, upload_by } = data;
    const imgRef = ref(Storage, `images/${imgFile.name}`);
    const greeting = generateGreetings();

    if (upload_by.toLowerCase() === 'alin') {
      dispatch(
        showNotification({
          variant: 'info',
          message: `halo sayangku ${upload_by}. ${greeting}, tunggu foto lagi di upload sayang`,
        })
      );
    } else {
      dispatch(
        showNotification({
          variant: 'info',
          message: `halo ${upload_by}. ${greeting} tunggu foto lagi di upload`,
        })
      );
    }
    reset();
    try {
      const uploadTask = await uploadBytesResumable(imgRef, imgFile);
      const imgUrl = await getDownloadURL(uploadTask.ref);
      const datas = {
        date,
        place,
        photos: imgUrl,
        upload_by,
      };
      await addDoc(photosRef, datas);
      if (upload_by.toLowerCase() === 'alin') {
        dispatch(
          showNotification({
            variant: 'success',
            message: `halo sayangku ${upload_by}. ${greeting}, foto berhasil di upload yap`,
          })
        );
      } else {
        dispatch(
          showNotification({
            variant: 'success',
            message: `halo ${upload_by}. ${greeting}, foto berhasil di upload`,
          })
        );
      }
    } catch (error) {
      console.log(error);
      if (upload_by.toLowerCase() === 'alin') {
        dispatch(
          showNotification({
            variant: 'error',
            message: `halo sayangku ${upload_by}. ${greeting}, fotonya gagal di upload sayang`,
          })
        );
      } else {
        dispatch(
          showNotification({
            variant: 'error',
            message: `halo ${upload_by}. ${greeting}, foto gagal di upload`,
          })
        );
      }
      reset();
    }
  };
};

const getPhoto = () => {
  return async (dispatch) => {
    dispatch(showBackdrop());
    try {
      const data = await getDocs(photosRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setPhotoDatas(filteredData));
      dispatch(closeBackdrop());
    } catch (error) {
      dispatch(closeBackdrop());
      dispatch(
        showNotification({
          variant: 'error',
          message: 'ada yang error jadi ga ke tampilin',
        })
      );
    }
  };
};

const getPhotoById = (id) => {
  return async (dispatch) => {
    const docRef = doc(photosRef, id);
    dispatch(showBackdrop());
    try {
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      if (!docSnap.exists()) {
        throw new Error('gaada foto disini');
      }
      dispatch(showImgById(data));
      dispatch(closeBackdrop());
    } catch (error) {
      dispatch(closeBackdrop());
      dispatch(
        showNotification({ varriant: 'error', message: 'yah fotonya gaada ' })
      );
      console.log(error);
    }
  };
};

export { postPhoto, getPhoto, getPhotoById };
