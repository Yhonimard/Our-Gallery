import { Container, Grid, Skeleton, Typography } from '@mui/material';
import Aos from 'aos';
import CustomCard from 'Components/CustomCard';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhoto } from 'Store/img/Action';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const BottomHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoData, isImgLoad } = useSelector((state) => state.img);
  useEffect(() => {
    dispatch(getPhoto());
  }, [dispatch]);

  const handleClickCard = (id) => {
    navigate(`${id}`);
  };
  return (
    <Container sx={{ mt: 5, paddingBottom: 10 }}>
      <Grid container spacing={1}>
        {photoData.map((p) => (
          <Grid item xs={6} sm={4} md={3} lg={2.4} key={p.id}>
            <CustomCard
              isImgLoad={isImgLoad}
              photos={p.photos}
              date={p.date}
              place={p.place}
              id={p.id}
              key={p.id}
              onClickCard={handleClickCard}
            />
            {!isImgLoad && (
              <Skeleton
                variant='rectangular'
                height={326.1}
                data-aos='fade-up'
              />
            )}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BottomHome;
