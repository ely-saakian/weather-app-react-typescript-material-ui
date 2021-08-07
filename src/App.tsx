import { Container } from "@material-ui/core";
import WeatherPage from "./pages/WeatherPage";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "./pages/HomePage";

const useStyles = makeStyles({
  container: {
    height: "100vh",
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <Container disableGutters className={classes.container}>
      <HomePage />
      {/* <WeatherPage /> */}
    </Container>
  );
}
