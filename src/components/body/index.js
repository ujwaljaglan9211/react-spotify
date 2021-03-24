import React from 'react'
import { makeStyles, Toolbar } from "@material-ui/core";
import MyCard from '../card'

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#131313',
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    maxHeight: '80vh',
    overflowY: 'scroll',
  },
}));
function Body(){
    const classes = useStyles()
    return(
        <main className={classes.content}>
        <div className={classes.toolbar} />
        <Toolbar >
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        </Toolbar>
        <Toolbar>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        </Toolbar>
        <Toolbar>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        </Toolbar>
        <Toolbar>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        </Toolbar>
        <Toolbar>
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        </Toolbar>
      </main>
    )
}

export default Body