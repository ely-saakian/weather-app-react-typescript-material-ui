import { Grid } from "@material-ui/core";
import DailyDetails from "./DailyDetails";
import DailyContainer from "./DailyContainer";
import { DailyWeather } from "../../api/OpenWeatherClient";
import { useContext, useState } from "react";
import WeatherContext from "../../store/weather-context";

export default function DailyDetailsContainer({ daily }: { daily: DailyWeather[] }) {
	const weatherCtx = useContext(WeatherContext);
	const [activeDay, setActiveDay] = useState(daily[0]);
	const [activeDayIndex, setActiveDayIndex] = useState(0);
	const selectDayHandler = (event: any, index: number) => {
		setActiveDay(daily[index]);
		setActiveDayIndex(index);
	};

	return (
		<Grid container>
			<Grid item xs={6}>
				<DailyContainer activeDayIndex={activeDayIndex} selectDayHandler={selectDayHandler} daily={daily} />
			</Grid>
			<Grid item xs={6}>
				<DailyDetails
					timezoneOffset={weatherCtx.weatherData?.timezoneOffset || 0}
					sunrise={activeDay?.sunrise}
					sunset={activeDay?.sunset}
					description={activeDay?.weather[0].main}
					feelsLike={activeDay?.feels_like.day}
					uvi={activeDay?.uvi}
					humidity={activeDay?.humidity}
					windSpeed={activeDay?.wind_speed}
				/>
			</Grid>
		</Grid>
	);
}
