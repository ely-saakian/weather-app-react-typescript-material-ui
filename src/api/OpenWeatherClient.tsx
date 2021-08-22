export default class OpenWeatherClient {
	key: string;
	city: string = "";
	country: string = "";

	constructor(key: string) {
		this.key = key;
	}

	async getWeatherForCityByCoords(lon: number, lat: number): Promise<IWeather> {
		const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&&appid=${this.key}&units=imperial`;

		if (this.city === "" || this.country === "") {
			this.getCityAndCountryByCoords(lon, lat);
		}

		try {
			const response = await fetch(api);
			const data = await response.json();
			return {
				name: `${this.city}, ${this.country}`,
				coord: {
					lat: data.lat,
					lon: data.lon,
				},
				current: {
					max: Math.round(data.daily[0].temp.max),
					min: Math.round(data.daily[0].temp.min),
					timestamp: data.current.dt,
					temp: Math.round(data.current.temp),
					weather: {
						description: data.current.weather[0].description,
						icon: `assets/${data.current.weather[0].icon}@4x.png`,
						main: data.current.weather[0].main,
					},
				},
				hourly: this.hourlyEveryOtherHourLimitTo(data.hourly, 5),
				daily: data.daily,
			};
		} catch (error) {
			throw error;
		}
	}

	async getWeatherForCityById(cityId: string): Promise<IWeather> {
		const { lon, lat } = await this.getCoordsForCityById(cityId);
		return this.getWeatherForCityByCoords(lon, lat);
	}

	private async getCityAndCountryByCoords(lon: number, lat: number) {
		const api = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
		try {
			const response = await fetch(api);
			const { city, countryCode } = await response.json();
			this.city = city;
			this.country = countryCode;
		} catch (error) {
			throw error;
		}
	}

	private async getCoordsForCityById(cityId: string): Promise<Coords> {
		const api = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${this.key}`;

		try {
			const response = await fetch(api);
			const data = await response.json();
			this.city = data.name;
			this.country = data.sys.country;
			const lon: number = data.coord.lon;
			const lat: number = data.coord.lat;
			return { lon, lat };
		} catch (error) {
			throw error;
		}
	}

	private hourlyEveryOtherHourLimitTo(hourly: HourlyWeather[], numberOfHours: number) {
		const limitedHourly = [];
		let everyOtherPointer = 0;
		for (let i = 0; i < numberOfHours; i++) {
			hourly[everyOtherPointer].temp = Math.round(hourly[everyOtherPointer].temp);
			limitedHourly.push(hourly[everyOtherPointer]);
			everyOtherPointer += 2;
		}
		return limitedHourly;
	}
}

export interface IWeather {
	name?: string;
	coord?: Coords;
	current?: {
		max: number;
		min: number;
		timestamp: number;
		temp: number;
		weather: {
			main: string;
			description: string;
			icon: string;
		};
	};
	hourly?: HourlyWeather[];
	daily?: DailyWeather[];
}

type Coords = {
	lon: number;
	lat: number;
};

export type HourlyWeather = {
	dt: number;
	temp: number;
	weather: {
		main: string;
		icon: string;
	}[];
};

export type DailyWeather = {
	dt: number;
	sunrise: number;
	sunset: number;
	humidity: number;
	wind_speed: number;
	uvi: number;
	temp: {
		day: number;
	};
	weather: {
		main: string;
		icon: string;
	}[];
	feels_like: {
		day: number;
	};
};
