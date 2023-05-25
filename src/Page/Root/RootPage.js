import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, ScopedCssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../Utils/Theme";
import { grey } from "@mui/material/colors";
import Footer from "./Footer";
const RootPage = () => {
  return (
    <ScopedCssBaseline>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <Box component="main" sx={{ bgcolor: grey[900] }} minHeight="100vh">
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </ScopedCssBaseline>
  );
};

export default RootPage;
