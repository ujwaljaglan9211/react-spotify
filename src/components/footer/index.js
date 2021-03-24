import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Paper, ButtonBase } from "@material-ui/core";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const useStyles = makeStyles((theme) => ({
  //   bottomPlayer: {
  //     backgroundColor: "#282828",
  //     zIndex: 1201,
  //     position: "sticky",
  //     padding: "20px 10px",
  //     textAlign: "left",
  //   },
  titleColor: {
    color: "white",
  },
  subTitleColor: {
    color: "#8F8F8F",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    zIndex: 1201,
    position: "absolute",
    backgroundColor: "#282828",
    width: "100%",
  },
  image: {
    width: 100,
    height: 80,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  iconColor: {
    color: theme.palette.common.white,
    marginRight: "35px",
    fontSize: "40px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const [isPlay, setIsPlay] = useState(false);
  function hendleClick() {
    setIsPlay((prev) => {
      return !prev;
    });
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={1}>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src="https://picsum.photos/129.webp?random=4"
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={3}>
            <Typography
              gutterBottom
              variant="h6"
              className={classes.titleColor}
            >
              Standard license
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              className={classes.subTitleColor}
            >
              Full
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <SkipPreviousIcon className={classes.iconColor} />
                {isPlay ? (
                  <PlayCircleOutlineIcon
                    className={classes.iconColor}
                    onClick={hendleClick}
                  />
                ) : (
                  <PauseCircleOutlineIcon
                    className={classes.iconColor}
                    onClick={hendleClick}
                  />
                )}

                <SkipNextIcon className={classes.iconColor} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
