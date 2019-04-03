import React, { Component } from 'react'
import { headerStyle } from '../styles/headerStyles';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1 style={headerStyle}>LOGISTIQ</h1>
      </div>
    )
  }
}
