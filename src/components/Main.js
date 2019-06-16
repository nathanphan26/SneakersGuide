import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import YeezyBlack from '../assets/yeezy_black.jpg'
import YeezySynth from '../assets/yeezy_synth.jpg'
import YeezyLundmark from '../assets/yeezy_lundmark.jpg'

import Image from './Image';

export class Main extends Component {
  render() {

    const colStyle2 = {
      padding: '0',
      height: '100%',
      // backgroundColor: 'blue',
      textAlign: 'center',
      overflow: 'auto'
    }

    const innerRowStyle = {
      height: '450px',
      overflow: 'auto',

      display: 'flex',
      justifyContent: 'space-around'
    }

    return (
      <Col xs='8' style={colStyle2}>
        <MediaQuery minDeviceWidth={1200}>
          {(matches) => {
            if (matches) {
              return (
                <Row style={innerRowStyle}>
                  <Image src={YeezyBlack}/>
                  <Image src={YeezyBlack}/>
                </Row>
              );
            } else {
              return (
                <React.Fragment>
                  <Row style={innerRowStyle}>
                    <Image src={YeezyBlack}/>
                  </Row>
                  <Row style={innerRowStyle}>
                    <Image src={YeezyBlack}/>
                  </Row>
                </React.Fragment>
              );
            }
          }}
        </MediaQuery>
        <MediaQuery minDeviceWidth={1200}>
          {(matches) => {
            if (matches) {
              return (
                <Row style={innerRowStyle}>
                  <Image src={YeezyBlack}/>
                  <Image src={YeezyBlack}/>
                </Row>
              );
            } else {
              return (
                <React.Fragment>
                  <Row style={innerRowStyle}>
                    <Image src={YeezyBlack}/>
                  </Row>
                  <Row style={innerRowStyle}>
                    <Image src={YeezyBlack}/>
                  </Row>
                </React.Fragment>
              );
            }
          }}
        </MediaQuery>
        <MediaQuery minDeviceWidth={1200}>
          {(matches) => {
            if (matches) {
              return (
                <Row style={innerRowStyle}>
                  <Image src={YeezyBlack}/>
                  <Image src={YeezyBlack}/>
                </Row>
              );
            } else {
              return (
                <React.Fragment>
                  <Row style={innerRowStyle}>
                    <Image src={YeezyBlack}/>
                  </Row>
                  <Row style={innerRowStyle}>
                    <Image src={YeezyBlack}/>
                  </Row>
                </React.Fragment>
              );
            }
          }}
        </MediaQuery>
      </Col>
    )
  }
}

export default Main
