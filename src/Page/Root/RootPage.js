import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Footer from "./Footer";
const RootPage = () => {
  return (
    <div>
      <NavBar />
      <Box component="main" sx={{ bgcolor: grey[900], minHeight: "100vh" }}>
        <Outlet />
      </Box>
      <Footer />
    </div>
  );
};

export default RootPage;
