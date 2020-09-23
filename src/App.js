import React from 'react';
import { Nav } from './Navbar';

function App() {
  return (
    <>
      <h1><a href="/" style={{
        "color":"whitesmoke",
        "textDecoration":"none",
        "fontSize":"38px",
        }}>Tarot Spread App</a></h1>
      <Nav />
    </>
  );
}

export default App;
