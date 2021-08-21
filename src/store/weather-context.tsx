import { Context, ReactNode, useState } from "react";
import { createContext } from "react";
import { IWeather } from "../api/OpenWeatherClient";

const WeatherContext: Context<{
  weatherData: IWeather;
  selectedCityId: string;
  setSelectedCityId: (cityId: string) => void;
  setWeatherData: (weatherData: IWeather) => void;
}> = createContext({
  weatherData: {},
  selectedCityId: "",
  setSelectedCityId: (cityId) => {},
  setWeatherData: (weatherData) => {},
});

export function WeatherContextProvider(props: { children: ReactNode }) {
  const [weatherData, setWeatherData] = useState<IWeather | {}>({});
  const [selectedCityId, setSelectedCityId] = useState("");

  const setSelectedCityIdHandler = (cityId: string) =>
    setSelectedCityId(cityId);

  const setWeatherDataHandler = (weatherData: IWeather) => {
    setWeatherData(weatherData);
  };

  const context = {
    weatherData,
    selectedCityId,
    setSelectedCityId: setSelectedCityIdHandler,
    setWeatherData: setWeatherDataHandler,
  };

  return (
    <WeatherContext.Provider value={context}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
