import { Grid } from "@material-ui/core";
import DailyDetails from "./DailyDetails";
import DailyContainer from "./DailyContainer";
import { DailyWeather } from "../../api/OpenWeatherClient";
import { useState } from "react";

export default function DailyDetailsContainer({ daily }: { daily: DailyWeather[] }) {
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
