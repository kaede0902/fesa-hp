import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';

import App from './App';
import Works from './containers/Works';
import ShopList from './containers/ShopList';
import NewInfo from './containers/NewInfo';

import PartsOrder from './containers/PartsOrder';
import AirConClean from './containers/AirConClean';
import Links from './containers/Links';


ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/app' component={App} />
        <Route exact path='/works' 
          component={Works} />
        <Route exact path='/newinfo' 
          component={NewInfo} />
        <Route exact path='/shoplist' 
          component={ShopList} />

        <Route exact path='/partsorder' 
          component={PartsOrder} />
        <Route exact path='/airconclean' 
          component={AirConClean} />
        <Route exact path='/links' 
          component={Links} />
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
