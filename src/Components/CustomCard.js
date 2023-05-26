import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CustomCard = ({ photos, place, date }) => {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <Card
        sx={{
          cursor: "pointer",
          minWidth: "fit-content",
          transition: "300ms",
          ":hover": { transform: "scale(1.05)" },
        }}
      >
        <CardActionArea>
          <CardMedia
            image={photos}
            component="img"
            sx={{ maxHeight: "290px" }}
          />
          <CardContent>
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: 13,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {place}
            </Typography>
            <Typography fontSize={12} fontWeight="bold" textAlign="center">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CustomCard;
