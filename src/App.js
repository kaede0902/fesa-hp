import React from 'react';
import Home from './containers/Home';
import Body from './components/Body'

function App() {

  return (
    <Home body={<Body />}/>
  );
}
export default App;
