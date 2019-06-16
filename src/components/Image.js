import React, { Component } from 'react'
import { Col } from 'reactstrap';

export class Image extends Component {
  render() {
    const {src, month, day, title} = this.props;

    const divStyle = {
      background: `url('${src}')`
    }

    return (
        <div className="shoes" style={divStyle}>
          {month} <br />
          {day} <br /> <br /> <br /> <br /> <br /> <br /> <br />
          {title}
        </div>
    )
  }
}

export default Image
