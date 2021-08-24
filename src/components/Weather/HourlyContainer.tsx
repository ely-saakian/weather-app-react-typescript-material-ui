import { Grid } from "@material-ui/core";
import Hourly from "./Hourly";
import { makeStyles } from "@material-ui/core/styles";
import { HourlyWeather } from "../../api/OpenWeatherClient";
import { useContext } from "react";
import WeatherContext from "../../store/weather-context";

const useStyles = makeStyles({
	container: {
		padding: "1rem 2rem",
	},
});

export default function HourlyContainer({ hourly }: { hourly: HourlyWeather[] }) {
	const weatherCtx = useContext(WeatherContext);
	const classes = useStyles();

	return (
		<Grid container justifyContent="space-between" className={classes.container}>
			{hourly.map((hour) => (
				<Grid item key={hour.dt}>
					<Hourly
						timezoneOffset={weatherCtx.weatherData?.timezoneOffset || 0}
						time={hour.dt}
						temp={hour.temp}
						condition={hour.weather[0].main}
						icon={`assets/${hour.weather[0].icon}@4x.png`}
					/>
				</Grid>
			))}
		</Grid>
	);
}
