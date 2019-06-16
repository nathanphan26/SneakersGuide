import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import YeezyBlack from '../assets/yeezy_black.jpg'
import YeezySynth from '../assets/yeezy_synth.jpg'
import YeezyLundmark from '../assets/yeezy_lundmark.jpg'

import Image from './Image';
import Month from './Month';

export class Main extends Component {
  render() {
    return ( 
      <Col xs='12' md='8' id="mainContainer">
        <Month />
        <Row className="shoeRow">
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezyBlack}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezyBlack}/>
            <Image src={YeezyBlack}/>
          </MediaQuery>
        </Row>
        <Month />
        <Row className="shoeRow">
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
