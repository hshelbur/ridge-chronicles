import React, { Component } from 'react';

class ChroniclesLayout extends Component {
  render() {

    const {title, date, images, category} = this.props

    return(
        <section className="gallery">
          
          <h2 className="gallery-title">{title}</h2>
          <h3 className="gallery-timestamp"><time>{date}</time></h3>
          <div className="gallery-copy">
            <section>{images}</section>
          </div>

        </section>
    );
  }
}

export default ChroniclesLayout