import { Box, Typography } from "@mui/material";
import TopHome from "./TopHome";
import BottomHome from "./BottomHome";

const HomePage = () => {
  return (
    <>
      <TopHome />
      <Box>
        <Typography
          textAlign="center"
          color="white"
          textTransform="uppercase"
          fontSize="30px"
        >
          Our Album!!
        </Typography>
        <BottomHome />
      </Box>
    </>
  );
};

export default HomePage;
