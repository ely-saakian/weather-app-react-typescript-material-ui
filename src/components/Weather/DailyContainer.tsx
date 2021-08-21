import { Grid, makeStyles } from "@material-ui/core";
import { DailyWeather } from "../../api/OpenWeatherClient";
import Daily from "./Daily";

const useStyles = makeStyles({
	pointer: {
		cursor: "pointer",
		"&:hover": {
			backgroundColor: "#dee3ff",
		},
	},
});

export default function DailyContainer({
	daily,
	selectDayHandler,
	activeDayIndex,
}: {
	daily: DailyWeather[];
	selectDayHandler: any;
	activeDayIndex: number;
}) {
	const classes = useStyles();
	return (
		<Grid container direction="column">
			{daily.map(({ dt, temp }, index) => (
				<Grid item className={classes.pointer} onClick={(e) => selectDayHandler(e, index)} key={dt}>
					<Daily active={activeDayIndex === index} timestamp={dt} temp={temp.day} />
				</Grid>
			))}
		</Grid>
	);
}
