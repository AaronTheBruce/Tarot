import React from 'react';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';
import SingleCard from './components/SingleCard';

export const Home = () => {
    return (
        <BrowserRouter>
        <nav>
            <NavLink to="/SingleCard">Single Card</NavLink>
            <NavLink to="/ThreeCard">Three Card Spread</NavLink>
            <NavLink to="/TenCard">Ten Card Spread</NavLink>
        </nav>
        <Switch>
            <Route path="/SingleCard" render={() => <SingleCard />} />
            <Route path="/ThreeCard" render={()=> <></> } />
            <Route path="/TenCard" render={() => <></> } />
        </Switch>
        </BrowserRouter>
    )
}
