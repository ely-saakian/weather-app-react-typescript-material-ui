import { Grid, IconButton, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import WeatherContext from "../../store/weather-context";

const useStyles = makeStyles({
	container: {
		padding: "0 2rem",
		marginTop: "1rem",
	},
	icon: {
		marginLeft: "-12px",
	},
});

export default function Header({ city }: any) {
	const classes = useStyles();
	const history = useHistory();
	const weatherCtx = useContext(WeatherContext);

	const searchIconClickHandler = () => {
		weatherCtx.clearState();
		history.push("/");
	};

	return (
		<Grid container alignItems="center" justifyContent="space-between" className={classes.container}>
			<Grid item>
				<IconButton aria-label="search" color="primary" className={classes.icon} onClick={searchIconClickHandler}>
					<Search fontSize="large" />
				</IconButton>
			</Grid>
			<Grid item>
				<Typography variant="button">{city}</Typography>
			</Grid>
		</Grid>
	);
}
