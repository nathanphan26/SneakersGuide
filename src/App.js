import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
 
import Header from './components/Header'

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

  const colStyle1 = {
    height: '100%',
    backgroundColor: 'red',
    textAlign: 'center'
  }

  const colStyle2 = {
    height: '100%',
    backgroundColor: 'blue',
    textAlign: 'center'
  }

  const colStyle3 = {
    height: '100%',
    backgroundColor: 'green',
    textAlign: 'center'
  }

  const innerRowStyle = {
    height: '300px'
  }

  return (
    <div className="App">
      <Header style={headerStyle}/>
      <div style={testStyle}>
        <Row style={rowStyle}>
          <Col xs='2' style={colStyle1}>Hello</Col>
          <Col xs='8' style={colStyle2}>
            <Row style={innerRowStyle}>
              <Col>1</Col>
              <Col>2</Col>
            </Row>
            <Row style={innerRowStyle}>
              <Col>3</Col>
              <Col>4</Col>
            </Row>
          </Col>
          <Col xs='2' style={colStyle3}>Hello</Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
