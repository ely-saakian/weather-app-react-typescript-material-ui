import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OpenWeatherClient from "../api/OpenWeatherClient";
import SearchInput from "../components/Home/SearchInput";
import Title from "../components/Home/Title";

const useStyles = makeStyles({
  grid: {
    height: "100%",
  },
});

const client = new OpenWeatherClient("a3345aba730886077c25b145c5518740");

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
          <SearchInput />
        </Grid>
      </Grid>
    </Grid>
  );
}
