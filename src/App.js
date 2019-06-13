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

  const testStyle = {
    // backgroundColor: 'red',
    height: '100%',
    // paddingTop: '20px'
    // marginLeft: '10%',
    // marginRight:'10%'
  }

  const mainStyle = {
    overflow: 'auto'
  }

  const headerStyle = {

  }

  const rowStyle = {
    height: '100%',
    backgroundColor: 'grey'
  }

  return (
    <div className="App" style={mainStyle}>
      <Header style={headerStyle}/>

      <div style={testStyle}>
        <Row style={rowStyle}>

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
