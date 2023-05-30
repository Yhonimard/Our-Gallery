import { Stack, IconButton, Typography, Box } from '@mui/material';
import { UploadFile } from '@mui/icons-material';

const InputFile = ({ isSendingData, register, watch }) => {
  const imgFile = watch('imgFile');

  const handleImgClick = () => {
    document.getElementById('input-file-field').click();
  };

  return (
    <Stack alignItems='center'>
      {imgFile && (
        <Box onClick={handleImgClick}>
          <img
            style={{ width: '100%', cursor: 'pointer', maxWidth: '400px' }}
            src={URL.createObjectURL(imgFile[0])}
            alt='foto will upload'
          />
          <input
            type='file'
            style={{ display: 'none' }}
            id='input-file-field'
            {...register('imgFile')}
          />
        </Box>
      )}
      {!imgFile && (
        <>
          <IconButton
            sx={{ mt: 1 }}
            onClick={handleImgClick}
            disabled={isSendingData}
          >
            <UploadFile />
            <input
              type='file'
              style={{ display: 'none' }}
              id='input-file-field'
              {...register('imgFile')}
            />
          </IconButton>
          <Typography>Upload foto disini</Typography>
        </>
      )}
    </Stack>
  );
};

export default InputFile;
