export default class OpenWeatherClient {
  key: string;
  city: string = "";
  country: string = "";

  constructor(key: string) {
    this.key = key;
  }

  async getWeatherForCity(city: string): Promise<Weather> {
    const { lon, lat } = await this.getCoordsForCity(city);
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&&appid=${this.key}&units=imperial`;
    try {
      const response = await fetch(api);
      const data = await response.json();
      return {
        name: this.city,
        country: this.country,
        coord: {
          lat: data.lat,
          lon: data.lon,
        },
        current: {
          timestamp: data.current.dt,
          temp: data.current.temp,
          weather: {
            description: data.current.weather[0].description,
            icon: data.current.weather[0].icon,
            main: data.current.weather[0].main,
          },
        },
      };
    } catch (error) {
      throw error;
    }
  }

  private async getCoordsForCity(
    city: string,
    country?: string
  ): Promise<Coords> {
    if (!country) country = this.getCountryFromLocale();
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.key}`;

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

  private getCountryFromLocale(): string {
    const userLocale = navigator.language;
    return userLocale.slice(-2);
  }
}

type Coords = {
  lon: number;
  lat: number;
};

interface Weather {
  name: string;
  country: string;
  coord: Coords;
  current: {
    timestamp: number;
    temp: number;
    weather: {
      main: string;
      description: string;
      icon: string;
    };
  };
}
