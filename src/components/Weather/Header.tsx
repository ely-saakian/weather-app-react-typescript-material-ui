import { Grid, IconButton, Typography } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "0 2rem",
    marginTop: "1rem",
  },
  icon: {
    marginLeft: "-12px",
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      className={classes.container}
    >
      <Grid item>
        <IconButton
          aria-label="search"
          color="primary"
          className={classes.icon}
        >
          <Search fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography variant="button">Vancouver, WA</Typography>
      </Grid>
    </Grid>
  );
}
