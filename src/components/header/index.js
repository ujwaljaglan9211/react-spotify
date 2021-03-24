import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Avatar,
} from "@material-ui/core";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.common.black,
  },
  title: {
    flexGrow: 1,
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <QueueMusicIcon style={{ fontSize: 30 }} />
        <Typography variant="h6" className={classes.title}>
          My-Songs
        </Typography>
        {/* <Button color="inherit">SingUp</Button> */}
        <Avatar
          alt="Profile Picture"
          src="https://picsum.photos/129.webp?random=2"
        />
        <Button color="inherit">Gaurank</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
