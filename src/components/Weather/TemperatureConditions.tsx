import { Box, Grid, Typography } from "@material-ui/core";

export default function TemperatureConditions({
  temp,
  high,
  low,
  conditions,
  icon,
}: any) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Typography variant="h1" color="primary">
              <Box fontWeight="400">
                {temp}
                <span>&#176;</span>F
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">
              <Box fontWeight="300">
                H: {high}
                <span>&#176;</span>F
              </Box>
            </Typography>
            <Typography variant="h5" align="center">
              <Box fontWeight="300">
                L: {low}
                <span>&#176;</span>F
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <img src={icon} alt="weather icon" width="100" />
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center">
              {conditions}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
