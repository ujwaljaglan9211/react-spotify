import React from "react";
import {  AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    }));
function Header() {
    const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          Permanent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
