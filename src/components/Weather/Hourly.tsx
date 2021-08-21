import { Box, Grid, Typography } from "@material-ui/core";
import moment from "moment";

interface HourlyProps {
  time: number;
  temp: number;
  condition: string;
  icon: string;
}

export default function Hourly({ time, temp, condition, icon }: HourlyProps) {
  return (
    <Grid container alignItems="center" direction="column">
      <Grid item>
        <Typography>{moment.unix(time).format("h A")}</Typography>
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
        <Grid container alignItems="center">
          <Grid item>
            <img src={icon} alt="weather icon" width="25" />
          </Grid>
          <Grid item>
            <Typography>
              <Box component="span" fontWeight="300">
                {condition}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
