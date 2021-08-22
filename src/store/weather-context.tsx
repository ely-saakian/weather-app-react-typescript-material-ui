import { Context, ReactNode, useState } from "react";
import { createContext } from "react";
import OpenWeatherClient, { IWeather } from "../api/OpenWeatherClient";

const weatherClient = new OpenWeatherClient("a3345aba730886077c25b145c5518740");

const WeatherContext: Context<{
	weatherClient: OpenWeatherClient;
	weatherData?: IWeather;
	selectedCityId?: string;
	setSelectedCityId: (cityId: string) => void;
	setWeatherData: (weatherData: IWeather) => void;
}> = createContext({
	weatherClient,
	setSelectedCityId: (cityId) => {},
	setWeatherData: (weatherData) => {},
});

export function WeatherContextProvider(props: { children: ReactNode }) {
	const [weatherData, setWeatherData] = useState<IWeather>();
	const [selectedCityId, setSelectedCityId] = useState<string>();

	const setSelectedCityIdHandler = (cityId: string) => setSelectedCityId(cityId);

	const setWeatherDataHandler = (weatherData: IWeather) => {
		setWeatherData(weatherData);
	};

	const context = {
		weatherClient,
		weatherData,
		selectedCityId,
		setSelectedCityId: setSelectedCityIdHandler,
		setWeatherData: setWeatherDataHandler,
	};

	return <WeatherContext.Provider value={context}>{props.children}</WeatherContext.Provider>;
}

export default WeatherContext;
