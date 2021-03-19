import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
function Body(){
    const classes = useStyles()
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1 paragraph>Lorem ipsum dolor sit amet</h1>
        <h1 paragraph>Consequat mauris nunc</h1>
      </main>
    )
}

export default Body