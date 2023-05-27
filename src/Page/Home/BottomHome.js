import { Container, Grid } from "@mui/material";
import CustomCard from "Components/CustomCard";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotoDatas } from "Page/store/ImgReducer";
import Gallery from "Api/Gallery";

const BottomHome = () => {
  const dispatch = useDispatch();
  const { photoData } = useSelector((state) => state.img);

  const getPhotoData = useCallback(async () => {
    const data = await Gallery.getPhoto();

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(filteredData);

    dispatch(setPhotoDatas(filteredData));
  }, [dispatch]);

  useEffect(() => {
    getPhotoData();
  }, [getPhotoData]);

  return (
    <Container sx={{ mt: 5, paddingBottom: 10 }}>
      <Grid container spacing={1}>
        {photoData.map((p) => (
          <CustomCard
            photos={p.photos}
            date={p.date}
            place={p.place}
            key={p.id}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default BottomHome;
