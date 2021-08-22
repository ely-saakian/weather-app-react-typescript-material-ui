import { Button } from "@material-ui/core";
import { MyLocation } from "@material-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import WeatherContext from "../../store/weather-context";

export default function UseMyLocationButton() {
	const weatherCtx = useContext(WeatherContext);
	const history = useHistory();

	const useMyLocationHandler = () => {
		weatherCtx.setLoadingData(true);

		navigator.geolocation.getCurrentPosition(({ coords }) => {
			weatherCtx.weatherClient
				.getWeatherForCityByCoords(coords.longitude, coords.latitude)
				.then((data) => weatherCtx.setWeatherData(data))
				.then(() => weatherCtx.setLoadingData(false))
				.then(() => history.push("/weather"));
		});
	};

	return (
		<Button type="submit" color="primary" disableElevation endIcon={<MyLocation />} onClick={useMyLocationHandler}>
			Use my location
		</Button>
	);
}
