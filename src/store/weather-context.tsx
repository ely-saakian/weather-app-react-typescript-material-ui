import { Context, ReactNode, useState } from "react";
import { createContext } from "react";
import OpenWeatherClient, { IWeather } from "../api/OpenWeatherClient";

const weatherClient = new OpenWeatherClient("a3345aba730886077c25b145c5518740");

const WeatherContext: Context<{
	weatherClient: OpenWeatherClient;
	loadingData?: boolean;
	weatherData?: IWeather;
	selectedCityId?: string;
	setLoadingData: (status: boolean) => void;
	setSelectedCityId: (cityId: string) => void;
	setWeatherData: (weatherData: IWeather) => void;
	clearState: () => void;
}> = createContext({
	weatherClient,
	setSelectedCityId: (cityId) => {},
	setWeatherData: (weatherData) => {},
	setLoadingData: (status) => {},
	clearState: () => {},
});

export function WeatherContextProvider(props: { children: ReactNode }) {
	const [weatherData, setWeatherData] = useState<IWeather>();
	const [selectedCityId, setSelectedCityId] = useState<string>();
	const [loadingData, setLoadingData] = useState(false);

	const setLoadingDataHandler = (status: boolean) => setLoadingData(status);

	const setSelectedCityIdHandler = (cityId: string) => setSelectedCityId(cityId);

	const setWeatherDataHandler = (weatherData: IWeather) => {
		setWeatherData(weatherData);
	};

	const clearStateHandler = () => {
		setLoadingData(false);
		setSelectedCityId(undefined);
		setWeatherData(undefined);
	};

	const context = {
		loadingData,
		weatherClient,
		weatherData,
		selectedCityId,
		setLoadingData: setLoadingDataHandler,
		setSelectedCityId: setSelectedCityIdHandler,
		setWeatherData: setWeatherDataHandler,
		clearState: clearStateHandler,
	};

	return <WeatherContext.Provider value={context}>{props.children}</WeatherContext.Provider>;
}

export default WeatherContext;
