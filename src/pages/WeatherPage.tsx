import { Grid } from "@material-ui/core";
import DailyDetailsContainer from "../components/Weather/DailyDetailsContainer";
import Header from "../components/Weather/Header";
import HourlyContainer from "../components/Weather/HourlyContainer";
import TemperatureConditions from "../components/Weather/TemperatureConditions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    height: "100%",
  },
});

export default function WeatherPage() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      wrap="nowrap"
      justifyContent="space-between"
      className={classes.container}
    >
      <Grid item>
        <Header></Header>
      </Grid>
      <Grid item>
        <TemperatureConditions />
      </Grid>
      <Grid item>
        <HourlyContainer />
      </Grid>
      <Grid item>
        <DailyDetailsContainer />
      </Grid>
    </Grid>
  );
}
