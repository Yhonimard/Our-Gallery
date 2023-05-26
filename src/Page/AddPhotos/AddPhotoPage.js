import { Box, Container } from "@mui/material";
import AddPhotoForm from "./AddPhotoForm";

const AddPhoto = () => {
  return (
    <Container sx={{ height: "100vh" }}>
      <Box
        sx={{
          minHeight: "100vh",
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
