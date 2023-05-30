import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { ImgLoad } from 'Store/img/ImgReducer';
import { useDispatch } from 'react-redux';

const CustomCard = ({ photos, place, date, onClickCard, id, isImgLoad }) => {
  const dispatch = useDispatch();

  const handleImgOnLoad = () => {
    dispatch(ImgLoad(true));
  };

  return (
    <Card
      data-aos='fade-up'
      onClick={() => onClickCard(id)}
      component='div'
      sx={{
        cursor: 'pointer',
        display: !isImgLoad && 'none',
        minWidth: 'fit-content',
        transition: '300ms',
        ':hover': {
          transform: 'scale(1.05)',
          boxShadow: '2px 2px 6px rgba(0,0,0,.5)',
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          image={photos}
          component='img'
          height='300'
          onLoad={handleImgOnLoad}
        />
        <CardContent>
          <Typography noWrap textAlign='center' variant='body1'>
            {place}
          </Typography>
          <Typography variant='body2' textAlign='center'>
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;
