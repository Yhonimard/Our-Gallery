import { AppBar, Stack, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Stack width='100%'>
          <Typography color='white' textAlign='center'>
            Copyright © {new Date().getFullYear()} Yhonimard & Alyana Putri
          </Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
