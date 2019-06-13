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

    const divStyle = {
      background: `url('${src}')`,
      height: '350px',
      width: '350px',
      paddingTop: '25px',
      margin: '25px',
      verticalAlign: 'middle'
    }

    return (
      <Col style={innerColStyle}>
        <div className="shoes" style={divStyle}>
          MONTH <br />
          22
        </div>
      </Col>
    )
  }
}

export default Image
