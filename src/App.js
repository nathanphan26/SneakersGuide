import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
 
import Header from './components/Header'
import Ads from './components/Ads'
import Main from './components/Main'

function App() {

  const testStyle = {
    // backgroundColor: 'red',
    height: '100%',
    // paddingTop: '20px'
    // marginLeft: '10%',
    // marginRight:'10%'
  }

  const headerStyle = {

  }

  const rowStyle = {
    height: '100%',
    backgroundColor: 'grey'
  }

  return (
    <div className="App">
      <Header style={headerStyle}/>

      <div style={testStyle}>
        <Row style={rowStyle}>

          {/* Ads */}
          <Ads />

          {/* Main */}
          <Main />

          {/* Ads */}
          <Ads />

        </Row>
      </div>
    </div>
  );
}

export default App;
