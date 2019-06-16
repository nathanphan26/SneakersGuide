import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Month extends Component {
  render() {

    const monthStyle = {
      paddingTop: '10px'
    }

    return (
      <Row style={monthStyle}>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <h3>June</h3>
        </Col>
      </Row>
    )
  }
}

export default Month
