import { Button, Paper, TextField } from "@mui/material";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Storage } from "../../Lib/Firebase";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setImgFile, setPhotoUrl } from "../store/ImgReducer";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../Lib/Firebase";
import DatePick from "Components/InputDate";
import InputFile from "Components/InputFile";

const AddPhotoForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, control } = useForm();

  const photoRef = collection(db, "our_photos");

  const { imgUpload } = useSelector((state) => state.imgReducer);

  const handleUploadPhoto = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    console.log(file);
    dispatch(setImgFile(file));
  };

  const submitHandler = async (data) => {
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
        reset();
        dispatch(setImgFile(null));
        console.log(error);
      }
      dispatch(setPhotoUrl(imgUrl));
    } catch (error) {
      reset();
      console.log("error");
      dispatch(setImgFile(null));
    }
  };

  return (
    <Paper
      sx={{
        width: 350,
        px: 4,
        py: 5,
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      elevation={3}
      component="form"
      onSubmit={handleSubmit(submitHandler)}
    >
      <TextField
        variant="standard"
        sx={{ width: "100%" }}
        label="dimana"
        {...register("place")}
      />

      <DatePick AdapterMoment={AdapterMoment} control={control} />
      <InputFile handleUploadPhoto={handleUploadPhoto} />

      <Button variant="contained" type="submit" color="inherit">
        Upload
      </Button>
    </Paper>
  );
};

export default AddPhotoForm;