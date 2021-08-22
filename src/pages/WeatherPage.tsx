import { useContext } from "react";
import { Grid } from "@material-ui/core";
import DailyDetailsContainer from "../components/Weather/DailyDetailsContainer";
import Header from "../components/Weather/Header";
import HourlyContainer from "../components/Weather/HourlyContainer";
import TemperatureConditions from "../components/Weather/TemperatureConditions";
import { makeStyles } from "@material-ui/core/styles";
import WeatherContext from "../store/weather-context";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles({
	container: {
		height: "100%",
	},
});

export default function WeatherPage() {
	const weatherCtx = useContext(WeatherContext);
	const classes = useStyles();
	return weatherCtx.weatherData ? (
		<Grid container direction="column" wrap="nowrap" justifyContent="space-between" className={classes.container}>
			<Grid item>
				<Header city={weatherCtx.weatherData.name}></Header>
			</Grid>
			<Grid item>
				<TemperatureConditions
					temp={weatherCtx.weatherData.current?.temp}
					conditions={weatherCtx.weatherData.current?.weather.main}
					high={weatherCtx.weatherData.current?.max}
					low={weatherCtx.weatherData.current?.min}
					icon={weatherCtx.weatherData.current?.weather.icon}
				/>
			</Grid>
			<Grid item>
				<HourlyContainer hourly={weatherCtx.weatherData.hourly || []} />
			</Grid>
			<Grid item>
				<DailyDetailsContainer daily={weatherCtx.weatherData.daily || []} />
			</Grid>
		</Grid>
	) : (
		<Redirect to={{ pathname: "/" }} />
	);
}
