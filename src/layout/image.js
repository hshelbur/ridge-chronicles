import React, { Component } from 'react';

class Image extends Component {
  render() {

    const {id, photo} = this.props

    return(
        <section className="single-photo">
          <img src={photo} alt="Article Preview" />
        </section>
    );
  }
}

export default Image