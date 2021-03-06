import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import WeatherContext from "../../store/weather-context";

export default function SearchButton() {
	const weatherCtx = useContext(WeatherContext);
	const history = useHistory();

	const clickHandler = () => {
		if (weatherCtx.selectedCityId !== undefined) {
			weatherCtx.setLoadingData(true);

			weatherCtx.weatherClient
				.getWeatherForCityById(weatherCtx.selectedCityId)
				.then((data) => weatherCtx.setWeatherData(data))
				.then(() => weatherCtx.setLoadingData(false))
				.then(() => history.push("/weather"));
		}
	};

	return (
		<Button
			type="submit"
			variant="contained"
			color="primary"
			disableElevation
			disabled={weatherCtx.selectedCityId === undefined}
			onClick={clickHandler}
			endIcon={<Search />}
		>
			Go
		</Button>
	);
}
