import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";
import { Row } from 'reactstrap';
 
import Header from './components/Header';
import Ads from './components/Ads';
import Main from './components/Main';
import Analysis from './components/Analysis';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="mainSection">
        <Row className="mainRow">

          {/* Ads */}
          <Ads />

          {/* Main */}
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/analysis/' component={Analysis} />
            <Route path='/subscribe/' component={Subscribe} />
          </Switch>

          {/* Ads */}
          <Ads />

        </Row>
      </div>
    </div>
  );
}

export default App;
