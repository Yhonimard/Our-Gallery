import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Menu as IconMenu } from "@mui/icons-material";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState();
  const isOpenMenu = Boolean(openMenu);

  return (
    <AppBar sx={{ px: 2, bgcolor: grey[800] }}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>Our Album</Typography>
        <IconButton
          onClick={(e) => setOpenMenu((prev) => (prev = e.currentTarget))}
        >
          <IconMenu sx={{ color: "white" }} />
        </IconButton>
        <Menu
          anchorEl={openMenu}
          open={isOpenMenu}
          onClose={() => setOpenMenu((prev) => (prev = null))}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>testing</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
