import React, { Component } from 'react';
import { Col } from 'reactstrap';

export class Analysis extends Component {
  render() {

    const colStyle2 = {
      padding: '0',
      paddingTop: '50px',
      height: '100%',
      textAlign: 'center',
      overflow: 'auto'
    }

    return (
      <Col xs='8' style={colStyle2}>
        Post Drop Analysis Coming Soon
      </Col>
    )
  }
}

export default Analysis
