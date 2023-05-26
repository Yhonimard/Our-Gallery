import { Stack, IconButton, Typography, Box } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import { useRef } from "react";
import { useSelector } from "react-redux";

const InputFile = ({ handleUploadPhoto, isSendingData }) => {
  const { imgUpload } = useSelector((state) => state.imgReducer);

  const imgBtnRef = useRef(null);
  const handleImgClick = () => {
    imgBtnRef.current.click();
  };

  return (
    <Stack alignItems="center">
      {imgUpload ? (
        <Box onClick={handleImgClick}>
          <img
            style={{ width: "100%", cursor: "pointer", maxWidth: "400px" }}
            src={URL.createObjectURL(imgUpload)}
            alt="foto will upload"
          />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleUploadPhoto}
            ref={imgBtnRef}
          />
        </Box>
      ) : (
        <>
          <IconButton
            sx={{ mt: 1 }}
            onClick={handleImgClick}
            disabled={isSendingData}
          >
            <UploadFile />
            <input
              type="file"
              style={{ display: "none" }}
              ref={imgBtnRef}
              onChange={handleUploadPhoto}
            />
          </IconButton>
          <Typography>Upload foto disini</Typography>
        </>
      )}
    </Stack>
  );
};

export default InputFile;
