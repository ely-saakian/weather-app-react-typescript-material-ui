import { Grid } from "@material-ui/core";
import SearchInputAutocomplete from "./SearchInputAutocomplete";
import SearchButton from "./SearchButton";

export default function Search() {
  return (
    <Grid container alignItems="flex-end" direction="column" spacing={3}>
      <Grid item>
        <SearchInputAutocomplete />
      </Grid>
      <Grid item>
        <SearchButton />
      </Grid>
    </Grid>
  );
}
