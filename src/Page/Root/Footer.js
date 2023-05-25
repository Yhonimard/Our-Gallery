import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <Box
      width="100%"
      height="10vh"
      sx={{
        backgroundColor: grey[800],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="white" textAlign="center">
        Copyright © {new Date().getFullYear} Yhonimard & Alyana Putri
      </Typography>
    </Box>
  );
};

export default Footer;
