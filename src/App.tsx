import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchInput from "./components/SearchInput";
import TheHeader from "./components/TheHeader";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
  grid: {
    height: "100%",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Grid
        spacing={5}
        className={classes.grid}
        container
        justifyContent="center"
        alignContent="center"
      >
        <Grid item>
          <TheHeader />
        </Grid>
        <Grid item>
          <SearchInput />
        </Grid>
      </Grid>
    </Container>
  );
}
