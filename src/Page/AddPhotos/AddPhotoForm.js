import { Button, Paper, TextField } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import DatePick from 'Components/InputDate';
import InputFile from 'Components/InputFile';
import { postPhoto } from 'Store/img/Action';

const AddPhotoForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, control, watch } = useForm();

  const { isSendingData } = useSelector((state) => state.global);

  const {
    userData: { name },
  } = useSelector((state) => state.auth);

  const submitHandler = async (data) => {
    const { date, imgFile, place } = data;
    const dataWillSend = {
      date,
      place,
      imgFile: imgFile[0],
      upload_by: name,
    };
    dispatch(postPhoto(dataWillSend, reset));
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
        isSendingData={isSendingData}
        register={register}
        watch={watch}
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
