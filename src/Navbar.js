import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import SingleCard from './components/SingleCard';
import ThreeCard from './components/ThreeCard';
import TenCard from './components/TenCard';
import Tips from './components/Tips';
import About from './components/About';

export const Nav = () => {
    return (
        <BrowserRouter>
            <nav>
                <NavLink to="/SingleCard">Single Card</NavLink>
                <NavLink to="/ThreeCard">Three Card Spread</NavLink>
                <NavLink to="/TenCard">Ten Card Spread</NavLink>
                <NavLink to="/">Tips</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
            <Switch>
                <Route path="/SingleCard" render={() => <SingleCard />} />
                <Route path="/ThreeCard" render={() => <ThreeCard />} />
                <Route path="/TenCard" render={() => <TenCard />} />
                <Route path="/About" render={() => <About />} />
                <Route path="/" render={() => <Tips />} />
            </Switch>
        </BrowserRouter>
    )
}
