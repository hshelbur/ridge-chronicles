import React, { Component } from 'react';
import Sidebar from '/sidebar.js';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Sidebar />
        <h1 className="title">The Ridge Chronicles</h1>
      </header>
      );
  }
}

 export default Header;