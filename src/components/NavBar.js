import React, { useState } from "react";
import {
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
  Avatar,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AvatarSVG from "../images/avatar.svg";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
  },
  appBar: {
    backgroundColor: "white",
  },
  toolbar: {
    display: "flex",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
    },
  },
  sectionMobile: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  loginButton: {
    width: 200,
    backgroundColor: "green",
    color: "white",
    "&:hover": {
      backgroundColor: "red",
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <>
      <CssBaseline />
      <AppBar position="static" style={{ backgroundColor: "white" }}>
        <Toolbar>
          {/* section desktop */}
          <div className={classes.sectionDesktop}>
            <Button
              style={{
                textTransform: "capitalize",
                marginRight: 16,
                fontSize: 16,
              }}
            >
              Home
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                marginRight: 16,
                fontSize: 16,
              }}
            >
              About
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                marginRight: 16,
                fontSize: 16,
              }}
            >
              Service
            </Button>
            <Button
              style={{
                textTransform: "capitalize",
                marginRight: 16,
                fontSize: 16,
              }}
            >
              Contact
            </Button>
          </div>
          {/* section mobile */}
          <div className={classes.sectionMobile}>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/* drawer */}
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className={classes.drawer}>
          <IconButton>
            <Avatar src={AvatarSVG} style={{ width: 150, height: 150 }} />
          </IconButton>
          <Divider />
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </List>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </List>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="Service" />
            </ListItem>
          </List>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="Project" />
            </ListItem>
          </List>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
