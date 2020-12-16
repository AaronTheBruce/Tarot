import React from 'react';
import { Nav } from './components/Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    color: "whitesmoke",
    textDecoration: "none",
    fontSize: "38px"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <h1><a href="/" className={classes.title}>Tarot Spread App</a></h1>
      <Nav />
    </>
  );
}

export default App;
