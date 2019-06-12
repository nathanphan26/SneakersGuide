import React from 'react';
import './App.css';
import Placeholder from './placeholder.jpg'
import { Container, Row, Col } from 'reactstrap';
 
import Header from './components/Header'
import Ads from './components/Ads'

function App() {

  const testStyle = {
    // backgroundColor: 'red',
    height: '100%',
    paddingTop: '20px'
    // marginLeft: '10%',
    // marginRight:'10%'
  }

  const headerStyle = {

  }

  const rowStyle = {
    height: '100%'
  }

  const colStyle2 = {
    padding: '0',
    height: '100%',
    backgroundColor: 'blue',
    textAlign: 'center'
  }

  const innerRowStyle = {
    height: '300px'
  }

  const innerColStyle = {
    padding: '0'
  }

  const imageStyle = {
    margin: '0',
    padding: '25px'
  }

  return (
    <div className="App">
      <Header style={headerStyle}/>

      <div style={testStyle}>
        <Row style={rowStyle}>

          {/* Ads */}
          <Ads />

          <Col xs='8' style={colStyle2}>
            <Row style={innerRowStyle}>
              <Col style={innerColStyle}>
                <img src={Placeholder} alt="Placeholder" style={imageStyle}/>
              </Col>
              <Col style={innerColStyle}>
                <img src={Placeholder} alt="Placeholder" style={imageStyle}/>
              </Col>
            </Row>
            <Row style={innerRowStyle}>
              <Col style={innerColStyle}>
                <img src={Placeholder} alt="Placeholder" style={imageStyle}/>
              </Col>
              <Col style={innerColStyle}>
                <img src={Placeholder} alt="Placeholder" style={imageStyle}/>
              </Col>
            </Row>
            <Row style={innerRowStyle}>
              <Col style={innerColStyle}>
                <img src={Placeholder} alt="Placeholder" style={imageStyle}/>
              </Col>
              <Col style={innerColStyle}>
                <img src={Placeholder} alt="Placeholder" style={imageStyle}/>
              </Col>
            </Row>
          </Col>

          {/* Ads */}
          <Ads />

        </Row>
      </div>
    </div>
  );
}

export default App;
