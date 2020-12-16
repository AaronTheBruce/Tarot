import React from 'react';
import { Nav } from './components/Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Social from './components/Social'
import Header from './components/Header';

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    color: "whitesmoke",
    textDecoration: "none",
    fontSize: "38px",
    justifyContent: "center",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <h1><a href="/" className={classes.title}>Tarot Spread App</a></h1>
      <Nav />
      {/* <Header /> */}
      {/* <Social /> */}
    </div>
  );
}

export default App;
