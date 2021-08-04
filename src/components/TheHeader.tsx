import { Box, Typography, Grid } from "@material-ui/core";

export default function TheHeader() {
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <Typography component="h1" variant="h2" color="primary">
          <Box fontWeight="bold" component="span">
            Weather Now
          </Box>
        </Typography>
        <Typography align="right">Powered by OpenWeather API</Typography>
      </Grid>
    </Grid>
  );
}
