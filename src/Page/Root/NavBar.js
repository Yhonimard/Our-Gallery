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
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState();
  const isOpenMenu = Boolean(openMenu);
  const navigate = useNavigate();

  return (
    <AppBar sx={{ px: 2, bgcolor: grey[800] }} position="sticky">
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
          <MenuItem onClick={() => navigate("add-photo")}>Add photo</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
