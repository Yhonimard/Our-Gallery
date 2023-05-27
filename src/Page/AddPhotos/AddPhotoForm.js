import { Button, Paper, TextField } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { Storage } from '../../Lib/Firebase';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setImgFile, setPhotoUrl } from '../Store/img/ImgReducer';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../Lib/Firebase';
import DatePick from 'Components/InputDate';
import InputFile from 'Components/InputFile';
import { setSendingData } from 'Page/Store/global/GlobalReducer';
import { enqueueSnackbar } from 'notistack';

const AddPhotoForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, control } = useForm();

  const photoRef = collection(db, 'our_photos');

  const { imgUpload } = useSelector((state) => state.img);
  const { isSendingData } = useSelector((state) => state.global);

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);
    dispatch(setImgFile(file));
  };

  const submitHandler = async (data) => {
    enqueueSnackbar('tunggu ya lagi di upload ini', { variant: 'info' });
    dispatch(setSendingData(true));
    try {
      const imgRef = ref(Storage, `images/${imgUpload.name}`);
      const uploadTask = await uploadBytesResumable(imgRef, imgUpload);
      const imgUrl = await getDownloadURL(uploadTask.ref);
      console.log(imgUrl);
      const datas = {
        photos: imgUrl,
        place: data.place,
        date: data.date,
      };
      try {
        const add = await addDoc(photoRef, datas);
        console.log(add);
        reset();
        dispatch(setImgFile(null));
      } catch (error) {
        enqueueSnackbar('yah error', { variant: 'error' });
        reset();
        setSendingData(false);
        dispatch(setImgFile(null));
        console.log(error);
      }
      dispatch(setPhotoUrl(imgUrl));
    } catch (error) {
      enqueueSnackbar('yah error', { variant: 'error' });
      reset();
      console.log('error');
      setSendingData(false);
      dispatch(setImgFile(null));
    }
    setSendingData(false);
    enqueueSnackbar('berhasil nih', { variant: 'success' });
  };

  return (
    <Paper
      sx={{
        width: 350,
        px: 4,
        py: 5,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
      elevation={3}
      component='form'
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextField
        variant='standard'
        sx={{ width: '100%' }}
        label='Lokasi Photo'
        {...register('place', { required: true })}
        disabled={isSendingData}
      />

      <DatePick
        AdapterMoment={AdapterMoment}
        control={control}
        isSendingData={isSendingData}
      />
      <InputFile
        handleUploadPhoto={handleUploadPhoto}
        isSendingData={isSendingData}
      />
      <Button
        variant='contained'
        type='submit'
        color='inherit'
        disabled={isSendingData}
      >
        Upload
      </Button>
    </Paper>
  );
};

export default AddPhotoForm;
