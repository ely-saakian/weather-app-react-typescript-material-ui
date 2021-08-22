import { Container, Grid } from "@material-ui/core";
import WeatherPage from "./pages/WeatherPage";
import { makeStyles } from "@material-ui/core/styles";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import { WeatherContextProvider } from "./store/weather-context";

const useStyles = makeStyles({
	container: {
		height: "100vh",
	},
});

const routes = [
	{ path: "/", name: "Home", Component: HomePage },
	{ path: "/weather", name: "Weather", Component: WeatherPage },
];
export default function App() {
	const classes = useStyles();
	return (
		<Container disableGutters className={classes.container}>
			<WeatherContextProvider>
				<Router>
					{routes.map(({ path, Component }) => (
						<Route key={path} exact path={path}>
							{({ match }) => (
								<CSSTransition in={match != null} timeout={300} classNames="page" unmountOnExit>
									<div className="page">
										<Grid container justifyContent="center">
											<Grid item xs={12} md={8} lg={6}>
												<Component />
											</Grid>
										</Grid>
									</div>
								</CSSTransition>
							)}
						</Route>
					))}
				</Router>
			</WeatherContextProvider>
		</Container>
	);
}
