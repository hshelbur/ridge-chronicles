import React, { Component } from 'react';
import Menu from 'react-burger-menu/lib/menus/bubble';

class Sidebar extends Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="who-we-are" className="menu-item" href="/whoweare">Who We Are</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a id="archive" className="menu-item" href="/archive">Archive</a>
      </Menu>
    );
  }
}

export default Sidebar