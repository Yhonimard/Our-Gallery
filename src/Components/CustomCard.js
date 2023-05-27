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
    <Grid item xs={6} sm={4} md={3} lg={2.4}>
      <Card
        sx={{
          cursor: "pointer",
          minWidth: "fit-content",
          transition: "300ms",
          ":hover": { transform: "scale(1.05)" },
        }}
      >
        <CardActionArea>
          <CardMedia image={photos} component="img" height={250} />
          <CardContent>
            <Typography noWrap textAlign="center" variant="body1">
              {place}
            </Typography>
            <Typography variant="body2" textAlign="center">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CustomCard;
