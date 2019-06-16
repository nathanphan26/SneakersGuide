import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Month extends Component {
  render() {
    return (
      <Row className="months">
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <h3>June</h3>
        </Col>
      </Row>
    )
  }
}

export default Month
