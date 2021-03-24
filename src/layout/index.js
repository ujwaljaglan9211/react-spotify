import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Body from "../components/body";
import Footer from "../components/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function Layout() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        <Header />
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </>
  );
}
