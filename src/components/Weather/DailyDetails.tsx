import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  allCaps: {
    textTransform: "uppercase",
  },
  container: {
    backgroundColor: "#3f50b5",
    color: "white",
    padding: "1rem 2rem",
    height: "100%",
  },
});
export default function DailyDetails() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      className={classes.container}
    >
      <Grid item>
        <Typography variant="h6">
          <Box
            component="span"
            className={classes.allCaps}
            pt={0.5}
            fontWeight="400"
          >
            Cloudy
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            Feels like
          </Box>
        </Typography>
        <Typography>
          <Box component="span" fontWeight="bold">
            50<span>&#176;</span>F
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            Sunrise
          </Box>
        </Typography>
        <Typography>
          <Box component="span" fontWeight="bold">
            5:32 AM
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            Sunset
          </Box>
        </Typography>
        <Typography>
          <Box component="span" fontWeight="bold">
            9:32 AM
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            Humidity
          </Box>
        </Typography>
        <Typography>
          <Box component="span" fontWeight="bold">
            30%
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            Wind speed
          </Box>
        </Typography>
        <Typography>
          <Box component="span" fontWeight="bold">
            2.6 mph
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            UVI
          </Box>
        </Typography>
        <Typography>
          <Box component="span" fontWeight="bold">
            6.14
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
