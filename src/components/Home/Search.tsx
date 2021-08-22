import { Grid } from "@material-ui/core";
import SearchInputAutocomplete from "./SearchInputAutocomplete";
import SearchButton from "./SearchButton";
import UseMyLocationButton from "./UseMyLocationButton";

export default function Search() {
	return (
		<Grid container alignItems="flex-end" direction="column" spacing={3}>
			<Grid item>
				<SearchInputAutocomplete />
			</Grid>
			<Grid item>
				<Grid container alignItems="center" spacing={2}>
					<Grid item>
						<UseMyLocationButton />
					</Grid>
					<Grid item>
						<SearchButton />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
