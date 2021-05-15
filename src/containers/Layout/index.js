import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import PrimarySearchAppBar from "../../components/Appbar";
import Sidebar from "../../components/Sidebar";
import { SidebarProvider } from "../../context/Drawer";
import Dashboard from "../../pages/Dashboard";

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#F7FAFC",
    display: "flex",
  },
  mainContent: {
    margin: "30px 0",
  },
  main: {
    flex: 1,
    maxWidth: "100vw",
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <SidebarProvider>
      <div className={classes.root}>
        <Sidebar drawerWidth={drawerWidth} />

        <div className={classes.main}>
          <PrimarySearchAppBar />
          <div className={classes.mainContent}>
            <Container maxWidth="xl">
              <Dashboard />
            </Container>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
