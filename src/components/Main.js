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
      overflow: 'hidden'
    }

    const innerRowStyle = {
      height: '350x',
      overflow: 'hidden',

      display: 'flex',
      justifyContent: 'space-around'
    }

    return (
      
      <Col xs='12' md='8' style={colStyle2}>
        <Row style={innerRowStyle}>
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezyBlack}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezyBlack}/>
            <Image src={YeezyBlack}/>
          </MediaQuery>
        </Row>
        <Row style={innerRowStyle}>
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezyBlack}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezyBlack}/>
            <Image src={YeezyBlack}/>
          </MediaQuery>
        </Row>
      </Col>
    )
  }
}

export default Main
