import React, { Component } from 'react'
import { Col } from 'reactstrap';

export class Ads extends Component {

  render() {

    const colStyle1 = {
      padding: '0',
      height: '100%',
      backgroundColor: 'green',
      textAlign: 'center'
    }

    return (
      <Col xs='2' style={colStyle1}>Hello</Col>
    )
  }
}

export default Ads
