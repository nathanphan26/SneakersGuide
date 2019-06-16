import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import MediaQuery from 'react-responsive';

import YeezyBlack from '../assets/yeezy_black.jpg';
import YeezySynth from '../assets/yeezy_synth.jpg';
import YeezyLundmark from '../assets/yeezy_lundmark.jpg';
import YeezyAntila from '../assets/yeezy_350_antila.jpg';
import YeezyGlow from '../assets/yeezy_350_glow_2.jpg';
import YeezyUtilityBlack from '../assets/yeezy_700_utilityblack.jpg';
import YeezyVanta from '../assets/yeezy_700_vanta.jpg'



import Image from './Image';
import Month from './Month';

export class Main extends Component {
  render() {
    return ( 
      <Col xs='12' md='8' id="mainContainer">
        <Month month='July'/>
        <Row className="shoeRow">
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezySynth} month='June' day='22' title='Yeezy 350 V2 Synth'/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezySynth} month='June' day='22' title='Yeezy 350 V2 Synth'/>
            <Image src={YeezyBlack} month='June' day='22' title='Yeezy 350 V2 Black'/>
          </MediaQuery>
        </Row>
        <Month month='June'/>
        <Row className="shoeRow">
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezyBlack}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezyLundmark} month='June' day='22' title='Yeezy 350 V2 Lundmark'/>
            <Image src={YeezyAntila} month='June' day='22' title='Yeezy 350 V2 Antile'/>
          </MediaQuery>
        </Row>
        <Month month='May'/>
        <Row className="shoeRow">
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezyBlack}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezyGlow} month='June' day='22' title='Yeezy 350 V2 Glow'/>
            <Image src={YeezyUtilityBlack} month='June' day='22' title='Yeezy 700 Utiltiy Black'/>
          </MediaQuery>
        </Row>
        <Row className="shoeRow">
          <MediaQuery query="(max-device-width: 767px)">
            <Image src={YeezyBlack}/>
          </MediaQuery>
          <MediaQuery query="(min-device-width: 768px)">
            <Image src={YeezyVanta} month='June' day='22' title='Yeezy 700 Vanta'/>
            <Image src=''/>
          </MediaQuery>
        </Row>
      </Col>
    )
  }
}

export default Main
