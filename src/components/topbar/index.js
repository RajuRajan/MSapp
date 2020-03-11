import React, { useContext } from "react";
import { Redirect, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import UserContext from "../../UserContext";
import { Listing } from "../listing";
import Terms from "../../pages/terms";
import Mybooking from "../../pages/mybooking";
import Bid from "../../pages/Bid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#fff",
    color: "#000"
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function MenuAppBar({ history, setCategory, ...props }) {
  const classes = useStyles();
  const {
    stateToggle: [toggle, setToggle]
  } = useContext(UserContext);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = event => {
    setAuth(event.target.checked);
  };

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function getComponent(){
    if(history.location.pathname==="/"){history.push("/home")}
    switch(history.location.pathname.split("/")[1]){
      case "home":
        return  <Listing setCategory={setCategory} history={history} />;
      case "terms-of-use":
        return <Terms history={history} />;
      case "privacy-policy":
        return <Terms history={history} />; 
      case "my-bookings":
        return <Mybooking history={history}/>;
      case "bids":
        return <Bid history={history}/>;
    }
  }

  return (
    <div className={classes.root}>
      {/* <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar>
            <AppBar position="static" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={() => setToggle(toggle ? false : true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Multi Service App
                </Typography>
                {auth && (
                  <div>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={open}
                      onClose={handleClose}
                    >
                      <Link to="/profile">
                        {" "}
                        <MenuItem>Profile</MenuItem>
                      </Link>
                     
                        <MenuItem
                          onClick={() => {
                            localStorage.clear();
                            history.push("/signin")
                            window.location.reload();
                          }}
                        >
                          Logout
                        </MenuItem>
                    
                    </Menu>
                  </div>
                )}
              </Toolbar>
            </AppBar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        {getComponent()}
        {/* {history.location.pathname.split("/")[1] === "home" ? (
          <Listing setCategory={setCategory} history={history} />
        ) : (
          <Terms history={history} />
        )} */}

        {/* listing component custom */}
      </React.Fragment>
    </div>
  );
}
