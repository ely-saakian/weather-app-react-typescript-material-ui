import { Box, Grid, Typography } from "@material-ui/core";

interface HourlyProps {
  time: string;
  temp: string;
  condition: string;
}

export default function Hourly({ time, temp, condition }: HourlyProps) {
  return (
    <Grid container alignItems="center" direction="column">
      <Grid item>
        <Typography>{time}</Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="bold">
            {temp}
            <span>&#176;</span>F
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <Box component="span" fontWeight="300">
            {condition}
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
