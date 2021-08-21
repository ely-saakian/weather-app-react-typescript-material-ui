import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

interface IDailyProps {
	active?: boolean;
	timestamp?: number;
	temp: number;
}

const useStyles = makeStyles({
	day: {
		padding: "1rem 2rem",
		backgroundColor: (active) => (active ? "#3f50b5" : ""),
		color: (active) => (active ? "white" : "black"),
	},
	allCaps: {
		textTransform: "uppercase",
	},
});
export default function Daily({ active = false, timestamp = Date.now(), temp }: IDailyProps) {
	const classes = useStyles(active);
	return (
		<Grid container justifyContent="space-between" alignItems="center" className={classes.day}>
			<Grid item>
				<Grid container direction="column">
					<Grid item>
						<Typography>
							<Box component="span" className={classes.allCaps} fontWeight="400">
								{moment.unix(timestamp).format("ddd")}
							</Box>
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="caption">
							<Box component="span" className={classes.allCaps}>
								{moment.unix(timestamp).format("D MMM")}
							</Box>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Typography variant="h5">
					{Math.round(temp)}
					<span>&#176;</span>F
				</Typography>
			</Grid>
		</Grid>
	);
}
