import React, { Component } from 'react'
import Placeholder from '../placeholder.jpg'
import YeezyBlack from '../yeezy_black.jpg'
import YeezySynth from '../yeezy_synth.jpg'
import YeezyLundmark from '../yeezy_lundmark.jpg'
import { Row, Col } from 'reactstrap';

import Image from './Image';

export class Main extends Component {
  render() {

    const colStyle2 = {
      padding: '0',
      height: '100%',
      // backgroundColor: 'blue',
      textAlign: 'center'
    }

    const innerRowStyle = {
      height: '300px'
    }

    return (
      <Col xs='8' style={colStyle2}>
        <Row style={innerRowStyle}>
          <Image src={YeezyBlack}/>
          <Image src={YeezyBlack}/>
        </Row>
        <Row style={innerRowStyle}>
          <Image src={YeezyLundmark}/>
          <Image src={YeezyLundmark}/>
        </Row>
        <Row style={innerRowStyle}>
          <Image src={YeezySynth}/>
          <Image src={YeezySynth}/>
        </Row>
      </Col>
    )
  }
}

export default Main