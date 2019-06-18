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
    // 767 900
    return ( 
      <Col xs='12' md='8' id="mainContainer">
      <div id="fragment">
          <Month month='July'/>

          <Row className="shoeRow">
            <Image src={YeezyLundmark} month='July' day='13' title='Yeezy Boost 350 V2 Lundmark'/>
            <Image src='' month='' day='' title=''/>
          </Row>

          <Month month='June'/>

          <Row className="shoeRow">
            <Image src={YeezyUtilityBlack} month='June' day='29' title='Yeezy Boost 700 Utility Black'/>
            <Image src={YeezySynth} month='June' day='22' title='Yeezy Boost 350 V2 Synth'/>
          </Row>
          
          <Row className="shoeRow">
            <Image src={YeezyAntila} month='June' day='22' title='Yeezy Boost 350 V2 Antila'/>
            <Image src={YeezyVanta} month='June' day='15' title='Yeezy Boost 700 Vanta' expired={true}/>
          </Row>

          <Row className="shoeRow">
            <Image src={YeezyBlack} month='June' day='6' title='Yeezy Boost 350 V2 Black' expired={true}/>
            <Image src='' month='' day='' title=''/>
          </Row>

          <Month month='May'/>

          <Row className="shoeRow">
            <Image src={YeezyGlow} month='May' day='25' title='Yeezy Boost 350 V2 Glow' expired={true}/>
            <Image src='' month='' day='' title=''/>
          </Row>
        </div>

        <div id="fragment2">
          <Month month='July'/>
          
          <Row className="shoeRow">
            <Image src={YeezyLundmark} month='July' day='13' title='Yeezy Boost 350 V2 Lundmark'/>
          </Row>

          <Month month='June'/>

          <Row className="shoeRow">
            <Image src={YeezyUtilityBlack} month='June' day='29' title='Yeezy Boost 700 Utility Black'/>
          </Row>
          <Row className="shoeRow">
            <Image src={YeezySynth} month='June' day='22' title='Yeezy Boost 350 V2 Synth'/>
          </Row>
          
          <Row className="shoeRow">
            <Image src={YeezyAntila} month='June' day='22' title='Yeezy Boost 350 V2 Antila'/>
          </Row>
          <Row className="shoeRow">
            <Image src={YeezyVanta} month='June' day='15' title='Yeezy Boost 700 Vanta' expired={true}/>
          </Row>

          <Row className="shoeRow">
            <Image src={YeezyBlack} month='June' day='6' title='Yeezy Boost 350 V2 Black' expired={true}/>
          </Row>

          <Month month='May'/>

          <Row className="shoeRow">
            <Image src={YeezyGlow} month='May' day='25' title='Yeezy Boost 350 V2 Glow' expired={true}/>
          </Row>
        </div>
      </Col>
    )
  }
}

export default Main
