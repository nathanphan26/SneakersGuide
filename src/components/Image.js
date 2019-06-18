import React, { Component } from 'react'

export class Image extends Component {
  render() {
    const {src, month, day, title, expired} = this.props;

    const divStyle = {
      background: `url('${src}')`
    }

    return (
        <div className={`shoes ${expired ? 'shoeExpired' : ''}`} style={divStyle}>
          {month} <br />
          {day} <br /> <br /> <br /> <br /> <br /> <br /> <br />
          {title}
        </div>
    )
  }
}

export default Image
