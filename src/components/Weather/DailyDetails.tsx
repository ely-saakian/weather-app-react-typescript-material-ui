import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

const useStyles = makeStyles({
	allCaps: {
		textTransform: "uppercase",
	},
	container: {
		backgroundColor: "#3f50b5",
		color: "white",
		padding: "1rem 2rem",
		height: "100%",
		paddingTop: "1.45rem",
	},
});
export default function DailyDetails({
	timezoneOffset,
	description,
	feelsLike,
	windSpeed,
	humidity,
	uvi,
	sunrise,
	sunset,
}: any) {
	const classes = useStyles();
	return (
		<Grid container direction="column" justifyContent="space-between" className={classes.container}>
			<Grid item>
				<Typography variant="h6">
					<Box component="span" className={classes.allCaps} fontWeight="400">
						{description}
					</Box>
				</Typography>
			</Grid>
			<Grid item>
				<Typography>
					<Box component="span" fontWeight="300">
						Feels like
					</Box>
				</Typography>
				<Typography>
					<Box component="span" fontWeight="bold">
						{Math.round(feelsLike)}
						<span>&#176;</span>F
					</Box>
				</Typography>
			</Grid>
			<Grid item>
				<Typography>
					<Box component="span" fontWeight="300">
						Sunrise
					</Box>
				</Typography>
				<Typography>
					<Box component="span" fontWeight="bold">
						{moment
							.unix(sunrise + timezoneOffset)
							.utc()
							.format("hh:mm a")}
					</Box>
				</Typography>
			</Grid>
			<Grid item>
				<Typography>
					<Box component="span" fontWeight="300">
						Sunset
					</Box>
				</Typography>
				<Typography>
					<Box component="span" fontWeight="bold">
						{moment
							.unix(sunset + timezoneOffset)
							.utc()
							.format("hh:mm a")}
					</Box>
				</Typography>
			</Grid>
			<Grid item>
				<Typography>
					<Box component="span" fontWeight="300">
						Humidity
					</Box>
				</Typography>
				<Typography>
					<Box component="span" fontWeight="bold">
						{humidity}%
					</Box>
				</Typography>
			</Grid>
			<Grid item>
				<Typography>
					<Box component="span" fontWeight="300">
						Wind speed
					</Box>
				</Typography>
				<Typography>
					<Box component="span" fontWeight="bold">
						{windSpeed} mp/h
					</Box>
				</Typography>
			</Grid>
			<Grid item>
				<Typography>
					<Box component="span" fontWeight="300">
						UVI
					</Box>
				</Typography>
				<Typography>
					<Box component="span" fontWeight="bold">
						{uvi}
					</Box>
				</Typography>
			</Grid>
		</Grid>
	);
}
