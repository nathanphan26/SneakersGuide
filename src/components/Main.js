import React, { Component } from 'react'
import Placeholder from '../assets/placeholder.jpg'
import YeezyBlack from '../assets/yeezy_black.jpg'
import YeezySynth from '../assets/yeezy_synth.jpg'
import YeezyLundmark from '../assets/yeezy_lundmark.jpg'
import { Row, Col } from 'reactstrap';

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
      overflow: 'auto'
    }

    const innerColStyle = {
      padding: '0'
    }

    const divStyle = {
      background: `url('${YeezyBlack}')`,
      height: '350px',
      width: '350px',
      paddingTop: '25px',
      margin: '25px',
      verticalAlign: 'middle'
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
