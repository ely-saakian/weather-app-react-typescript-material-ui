import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../components/Home/Title";
import Search from "../components/Home/Search";

const useStyles = makeStyles({
  grid: {
    height: "100%",
  },
});

export default function HomePage() {
  const classes = useStyles();
  return (
    <Grid
      spacing={5}
      className={classes.grid}
      container
      justifyContent="center"
      alignContent="center"
    >
      <Grid item>
        <Title />
      </Grid>
      <Grid container justifyContent="center">
        <Grid item>
          <Search />
        </Grid>
      </Grid>
    </Grid>
  );
}
