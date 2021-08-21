import React, { useState, useMemo, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import throttle from "lodash/throttle";
import { CircularProgress } from "@material-ui/core";
import WeatherContext from "../../store/weather-context";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  loading: {
    color: theme.palette.text.secondary,
  },
}));

type Option = {
  matching_full_name: string;
  _links: {
    "city:item": {
      href: string;
    };
  };
};

export default function SearchInputAutocomplete() {
  const weatherCtx = useContext(WeatherContext);
  const classes = useStyles();
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  const getAutoSuggestionData = (request: { input: string }) => {
    window
      .fetch(
        `https://api.teleport.org/api/cities/?search=${request.input}&limit=5`
      )
      .then((res) => res.json())
      .then((data) => {
        let newOptions: Option[];
        if (data) {
          newOptions = [...data._embedded["city:search-results"]];
          setOptions(newOptions);
          setLoading(false);
        }
      });
  };

  const fetchSuggestions = useMemo(
    () => throttle(getAutoSuggestionData, 2000),
    []
  );

  React.useEffect(() => {
    if (inputValue === "") {
      setOptions([]);
      return undefined;
    }

    if (inputValue.length > 2) {
      setLoading(true);
      fetchSuggestions({ input: inputValue });
    }
  }, [inputValue, fetchSuggestions]);

  return (
    <Autocomplete
      style={{ width: 350 }}
      getOptionLabel={(option) => option.matching_full_name}
      options={options}
      loading={loading}
      onChange={(event, newValue) => {
        const cityId = newValue?._links["city:item"].href
          .split(":")[2]
          .replace("/", "");
        if (cityId) weatherCtx.setSelectedCityId(cityId);
        setOptions(
          newValue
            ? [
                {
                  matching_full_name: newValue.matching_full_name,
                  _links: newValue._links,
                },
                ...options,
              ]
            : options
        );
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for a city"
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress
                    thickness={4}
                    className={classes.loading}
                    size={20}
                  />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => {
        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item>
              <Typography>{option.matching_full_name}</Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
