import { Grid } from "@material-ui/core";
import Daily from "./Daily";

export default function DailyContainer() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Daily active temp={60} />
      </Grid>
      <Grid item>
        <Daily temp={60} />
      </Grid>
      <Grid item>
        <Daily temp={60} />
      </Grid>
      <Grid item>
        <Daily temp={60} />
      </Grid>
      <Grid item>
        <Daily temp={60} />
      </Grid>
      <Grid item>
        <Daily temp={60} />
      </Grid>
      <Grid item>
        <Daily temp={60} />
      </Grid>
    </Grid>
  );
}
