import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import { useState } from 'react';
import { Menu as IconMenu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from 'Store/auth/AuthReducer';

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState();
  const isOpenMenu = Boolean(openMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} color='#f1f1f1' variant='h6'>
          OUR ALBUM
        </Typography>
        <IconButton
          onClick={(e) => setOpenMenu((prev) => (prev = e.currentTarget))}
        >
          <IconMenu sx={{ color: 'white' }} />
        </IconButton>
        <Menu
          anchorEl={openMenu}
          open={isOpenMenu}
          onClose={() => setOpenMenu((prev) => (prev = null))}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={() => navigate('add-photo')}>Add photo</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
