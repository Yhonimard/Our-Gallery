import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CustomCard = (props) => {
  const { title } = props;
  console.log(title);
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
            image="https://source.unsplash.com/random/500x500/?love"
            component="img"
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
              Cianjur
            </Typography>
            <Typography fontSize={12} fontWeight="bold" textAlign="center">
              20-12-2015
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CustomCard;
