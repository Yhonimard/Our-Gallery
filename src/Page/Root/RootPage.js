import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { ScopedCssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import Theme from "../../Utils/Theme";
const RootPage = () => {
  return (
    <ScopedCssBaseline>
      <ThemeProvider theme={Theme}>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </ScopedCssBaseline>
  );
};

export default RootPage;
