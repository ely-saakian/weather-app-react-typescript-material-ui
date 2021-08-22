import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import WeatherContext from "../../store/weather-context";

export default function SearchButton() {
	const weatherCtx = useContext(WeatherContext);
	const history = useHistory();

	const clickHandler = () => {
		if (weatherCtx.selectedCityId !== undefined)
			weatherCtx.weatherClient
				.getWeatherForCityById(weatherCtx.selectedCityId)
				.then((data) => weatherCtx.setWeatherData(data))
				.then(() => history.push("/weather"));
	};

	return (
		<Button
			type="submit"
			variant="contained"
			color="primary"
			disableElevation
			onClick={clickHandler}
			endIcon={<Search />}
		>
			Go
		</Button>
	);
}
