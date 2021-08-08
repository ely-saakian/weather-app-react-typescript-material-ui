import { Grid, TextField, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  input: {
    width: "225px",
  },
});

export default function SearchInput() {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput === "") {
      setError(true);
      return;
    }
    history.push("/weather");
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setSearchInput(value);
    if (error) setError(false);
  };

  return (
    <Grid component="form" container spacing={1} alignItems="flex-end">
      <Grid item>
        <Search color="disabled" />
      </Grid>
      <Grid item>
        <TextField
          error={error}
          onChange={handleInput}
          value={searchInput}
          className={classes.input}
          id="input-search-by-city"
          label="Search by city"
        />
      </Grid>
      <Grid item>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
