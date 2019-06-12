import React, { Component } from 'react'
import Placeholder from '../placeholder.jpg'
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
          <Image src={Placeholder}/>
          <Image src={Placeholder}/>
        </Row>
        <Row style={innerRowStyle}>
          <Image src={Placeholder}/>
          <Image src={Placeholder}/>
        </Row>
        <Row style={innerRowStyle}>
          <Image src={Placeholder}/>
          <Image src={Placeholder}/>
        </Row>
      </Col>
    )
  }
}

export default Main
