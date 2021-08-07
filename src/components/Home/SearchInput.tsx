import { Grid, TextField, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  input: {
    width: "225px",
  },
});

export default function SearchInput() {
  const classes = useStyles();
  return (
    <Grid component="form" container spacing={1} alignItems="flex-end">
      <Grid item>
        <Search color="disabled" />
      </Grid>
      <Grid item>
        <TextField
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
          onClick={(e) => e.preventDefault()}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
}
