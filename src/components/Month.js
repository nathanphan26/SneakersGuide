import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

export class Month extends Component {
  render() {

    const { month } = this.props

    return (
      <Row className="months">
        <Col sm="12" md={{ size: 4, offset: 1 }}>
          <h3 className="month">{month}</h3>
        </Col>
      </Row>
    )
  }
}

export default Month
