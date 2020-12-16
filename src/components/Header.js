import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SingleCard from './SingleCard';
import ThreeCard from './ThreeCard';
import TenCard from './TenCard';
import Tips from './Tips';
import About from './About';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    [theme.breakpoints.up("md")]: {
      display: "flex",
      justifyContent: "space-around",
      marginLeft: "5%",
      marginRight: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      display: "inline-grid",
      marginLeft: "5%",
    },
    paddingBottom: "10px",
  },
  color: {
    color: "whitesmoke",
    webkitTextStroke: "2px black",
    textDecoration: "none",
  }
}));

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Single Card</MenuItem>
              <MenuItem onClick={handleClose}>Three Card</MenuItem>
              <MenuItem onClick={handleClose}>Ten Card</MenuItem>
            </Menu>
          </IconButton>
          <BrowserRouter>
            <nav className={classes.nav}>
              <NavLink className={classes.color} to="/SingleCard">Single Card</NavLink>
              <NavLink className={classes.color} to="/ThreeCard">Three Card Spread</NavLink>
              <NavLink className={classes.color} to="/TenCard">Ten Card Spread</NavLink>
              <NavLink className={classes.color} to="/">Tips</NavLink>
              <NavLink className={classes.color} to="/about">About</NavLink>
            </nav>
            <Switch>
              <Route path="/SingleCard" render={() => <SingleCard />} />
              <Route path="/ThreeCard" render={() => <ThreeCard />} />
              <Route path="/TenCard" render={() => <TenCard />} />
              <Route path="/About" render={() => <About />} />
              <Route path="/" render={() => <Tips />} />
            </Switch>
          </BrowserRouter>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
