import { MoreVert } from '@mui/icons-material';
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { getPhotoById } from 'Store/img/Action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const ImgDetailPage = () => {
  const [openMenu, setOpenMenu] = useState();
  const isOpenMenu = Boolean(openMenu);

  const whenInPhone = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const { pid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhotoById(pid));
  }, [dispatch, pid]);

  const openMenuHandler = (e) => {
    setOpenMenu(e.currentTarget);
  };

  const closeMenuHandler = () => {
    setOpenMenu(null);
  };
  const { photos, place, date } = useSelector((state) => state.img.imgDataById);

  const deletePhotoHandler = () => {};

  return (
    <Container
      sx={(theme) => ({
        color: 'text.primary',
        [theme.breakpoints.up('sm')]: {
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        py: 5,
      })}
      maxWidth={whenInPhone ? 'xs' : 'sm'}
    >
      {whenInPhone && (
        <Card>
          <CardHeader
            action={
              <IconButton onClick={openMenuHandler}>
                <MoreVert />
              </IconButton>
            }
            title={place}
            subheader={date}
            titleTypographyProps={{ variant: 'body1' }}
            subheaderTypographyProps={{ variant: 'body2' }}
          />
          <CardMedia component='img' image={photos} />
        </Card>
      )}
      {!whenInPhone && (
        <Box display='flex' w='100%' minWidth='100%'>
          <Box width='50%' minWidth='50%'>
            <img src={photos} alt='alin & yhoni ' width='100%' height='100%' />
          </Box>
          <Box width='50%' minWidth='50%' px={4} py={2}>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='space-between'
            >
              <Stack>
                <Typography variant='body1'>{place}</Typography>
                <Typography variant='body2'>{date}</Typography>
              </Stack>
              <IconButton onClick={openMenuHandler}>
                <MoreVert />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      )}
      <Menu
        anchorEl={openMenu}
        open={isOpenMenu}
        onClose={closeMenuHandler}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={deletePhotoHandler}>hapus ni foto</MenuItem>
      </Menu>
    </Container>
  );
};

export default ImgDetailPage;
