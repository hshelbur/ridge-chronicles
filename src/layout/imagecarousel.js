import React, { Component } from 'react';

class ImageCarousel extends Component {
  render() {
    return (
      <div className="carousel-container">

        <section className="wildlife box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/carousel/hummingbird-mantis.jpg" alt="battle!" /></div>
            <div className="carousel-image"><img src="images/carousel/bees.jpg" alt="beens" /></div>
            <div className="carousel-image"><img src="images/carousel/baby-deer.jpg" alt="baby deer" /></div>
          </div>
          <h2 className="title">Wildlife</h2>
        </section>

        <section className="studio box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/carousel/studio.jpg" alt="the studio" /></div>
            <div className="carousel-image"><img src="images/carousel/studio-beds.jpg" alt="beds production" /></div>
            <div className="carousel-image"><img src="images/carousel/studio-pottery.jpg" alt="pottery" /></div>
          </div>
          <h2 className="title">The Studio</h2>
        </section>

        <section className="ridge-to-table box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/carousel/raisedbeds.jpg" alt="raised beds" /></div>
            <div className="carousel-image"><img src="images/carousel/vegharvest.jpg" alt="harvest" /></div>
            <div className="carousel-image"><img src="images/carousel/canned-beans.jpg" alt="canned beans" /></div>
          </div>
          <h2 className="title">Ridge to Table</h2>
        </section>

        <section className="chronicles box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/carousel/motorcycle.jpg" alt="motorcycle" /></div>
            <div className="carousel-image"><img src="images/carousel/waterfront.jpg" alt="waterfront wednesdays" /></div>
            <div className="carousel-image"><img src="images/carousel/biltmore.jpg" alt="bitlmore" /></div>
          </div>
          <h2 className="title">Chronicles</h2>
        </section>

      </div>
    );
  }
}

export default ImageCarousel