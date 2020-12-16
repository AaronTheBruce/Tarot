import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SingleCard from './SingleCard';
import ThreeCard from './ThreeCard';
import TenCard from './TenCard';
import Tips from './Tips';
import About from './About';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    nav: {
        [theme.breakpoints.up("md")]:{
            display: "flex",
            justifyContent: "space-around",
            marginLeft: "5%",
            marginRight: "5%",
        },
        [theme.breakpoints.down("sm")]:{
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

export const Nav = () => {
    const classes = useStyles();
    return (
        <BrowserRouter>
            <nav className={classes.nav}>
                <NavLink className={classes.color} to="/SingleCard">Single Card</NavLink>
                <NavLink className={classes.color} to="/ThreeCard">Three Card Spread</NavLink>
                <NavLink className={classes.color} to="/TenCard">Ten Card Spread</NavLink>
                <NavLink className={classes.color} to="/">Tips</NavLink>
                {/* <NavLink className={classes.color} to="/about">About</NavLink> */}
            </nav>
            <Switch>
                <Route path="/SingleCard" render={() => <SingleCard />} />
                <Route path="/ThreeCard" render={() => <ThreeCard />} />
                <Route path="/TenCard" render={() => <TenCard />} />
                {/* <Route path="/About" render={() => <About />} /> */}
                <Route path="/" render={() => <Tips />} />
            </Switch>
        </BrowserRouter>
    )
}
