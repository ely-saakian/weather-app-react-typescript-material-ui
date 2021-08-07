import { Grid } from "@material-ui/core";
import Hourly from "./Hourly";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "0 2rem",
  },
});

export default function HourlyContainer() {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="space-between"
      className={classes.container}
    >
      <Grid item>
        <Hourly time="NOW" temp="60" condition="Rain" />
      </Grid>
      <Grid item>
        <Hourly time="11 AM" temp="70" condition="Rain" />
      </Grid>
      <Grid item>
        <Hourly time="1 PM" temp="80" condition="Cloudy" />
      </Grid>
      <Grid item>
        <Hourly time="3 PM" temp="90" condition="Clear" />
      </Grid>
      <Grid item>
        <Hourly time="5 PM" temp="80" condition="Clear" />
      </Grid>
      <Grid item>
        <Hourly time="7 PM" temp="80" condition="Rain" />
      </Grid>
    </Grid>
  );
}
