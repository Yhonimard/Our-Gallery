import { useRef, useState } from "react";

import { Box, Container } from "@mui/material";
import AddPhotoForm from "./AddPhotoForm";
import { useDispatch } from "react-redux";

const AddPhoto = () => {
  const [imgUpload, setImgUpload] = useState(null);

  const dispatch = useDispatch();

  return (
    <Container sx={{ height: "100vh" }}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AddPhotoForm />
      </Box>
    </Container>
  );
};

export default AddPhoto;
