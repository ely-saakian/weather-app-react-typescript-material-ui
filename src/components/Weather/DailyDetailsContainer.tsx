import { Grid } from "@material-ui/core";
import DailyDetails from "./DailyDetails";
import DailyContainer from "./DailyContainer";

export default function DailyDetailsContainer() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <DailyContainer />
      </Grid>
      <Grid item xs={6}>
        <DailyDetails />
      </Grid>
    </Grid>
  );
}
