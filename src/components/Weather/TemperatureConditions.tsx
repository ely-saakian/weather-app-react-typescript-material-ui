import { Box, Grid, Typography } from "@material-ui/core";
import { Cloud } from "@material-ui/icons";

export default function TemperatureConditions() {
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
                55<span>&#176;</span>F
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" align="center">
              <Box fontWeight="300">
                H: 90<span>&#176;</span>F
              </Box>
            </Typography>
            <Typography variant="h5" align="center">
              <Box fontWeight="300">
                L: 60<span>&#176;</span>F
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <Cloud fontSize="large" />
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center">
              cloudy
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
