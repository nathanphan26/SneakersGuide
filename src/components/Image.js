import React, { Component } from 'react'
import { Col } from 'reactstrap';

export class Image extends Component {
  render() {

    const {src} = this.props;

    const innerColStyle = {
      padding: '0'
    }

    const imageStyle = {
      margin: '0',
      padding: '25px'
    }

    return (
      <Col style={innerColStyle}>
        <img src={src} alt="Placeholder" style={imageStyle}/>
      </Col>
    )
  }
}

export default Image
