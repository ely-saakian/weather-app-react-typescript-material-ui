# Weather now

Powered by OpenWeather api

## Demo

[Hosted on Github Pages](https://ely-saakian.github.io/weather-app-react-typescript-material-ui/)

## Technology

App built with `React` + `TypeScript` using

```
npx create-react-app --template typescript
```

A little project I did to quickly get familiar with React and Typescript. It is also my first project using [Material UI](https://material-ui.com/) component framework.

## APIs used:

- OpenWeather:
  - [One call API](https://openweathermap.org/api/one-call-api#current)
- Teleport:
  - [Cities by name API](http://developers.teleport.org/api/reference/#!/cities/searchCities)
- Big data cloud:
  - [Free Client-side Reverse Geocoding API](https://www.bigdatacloud.com/geocoding-apis/free-reverse-geocode-to-city-api)

## How APIs are used

1. City autosuggesstion is built with the help of `Teleport: Cities by name` api.

2. Then city id is extracted from the selected option and `OpenWeather: One Call` api is called with that id.

3. (Optional) If user allows sharing geolocation `OpenWeather: One Call` api is called with user's longitude and latitude coordinates.

## Resources

- Deployed to GH Pages using this guide:
  - https://www.pluralsight.com/guides/how-to-host-your-static-webpages-on-github-pages
