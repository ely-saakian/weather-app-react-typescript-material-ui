import { Backdrop, Box, CircularProgress, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Title from "../components/Home/Title";
import Search from "../components/Home/Search";
import { useContext } from "react";
import WeatherContext from "../store/weather-context";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		grid: {
			height: "100%",
		},
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: "#fff",
		},
		backdropGridItem: {
			padding: "0px !important",
		},
	})
);

export default function HomePage() {
	const weatherCtx = useContext(WeatherContext);

	const classes = useStyles();
	return (
		<Grid container className={classes.grid} justifyContent="center" alignContent="center">
			<Grid item className={classes.backdropGridItem}>
				<Backdrop className={classes.backdrop} open={weatherCtx.loadingData || false}>
					<CircularProgress color="inherit" />
				</Backdrop>
			</Grid>
			<Grid item>
				<Title />
			</Grid>
			<Grid container justifyContent="center">
				<Grid item>
					<Box mt={10}>
						<Search />
					</Box>
				</Grid>
			</Grid>
		</Grid>
	);
}
