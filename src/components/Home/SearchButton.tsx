import { Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import OpenWeatherClient from "../../api/OpenWeatherClient";
import WeatherContext from "../../store/weather-context";

const client = new OpenWeatherClient("a3345aba730886077c25b145c5518740");

export default function SearchButton() {
  const weatherCtx = useContext(WeatherContext);
  const history = useHistory();

  const clickHandler = () => {
    client
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
