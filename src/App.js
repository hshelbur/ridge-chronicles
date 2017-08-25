import React, { Component } from 'react';
import './App.css';
import Sidebar from './layout/sidebar.js';
import { BrowserRouter as Router, Route} from 'react-router-dom'


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

class ImageCarousel extends Component {
  render() {
    return (
      <div className="carousel-container">

        <section className="wildlife box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/bees.jpg" alt="bees" /></div>
            <div className="carousel-image"><img src="images/snail.jpg" alt="snail" /></div>
            <div className="carousel-image"><img src="images/yellow-bird.jpg" alt="yellow bird" /></div>
          </div>
          <h2 className="title">Wildlife</h2>
        </section>

        <section className="studio box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/studio.jpg" alt="the studio" /></div>
            <div className="carousel-image"><img src="images/snail.jpg" alt="snail" /></div>
            <div className="carousel-image"><img src="images/yellow-bird.jpg" alt="yellow bird" /></div>
          </div>
          <h2 className="title">The Studio</h2>
        </section>

        <section className="ridge-to-table box">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/vegharvest.jpg" alt="harvest" /></div>
            <div className="carousel-image"><img src="images/raisedbeds.jpg" alt="raids beds" /></div>
            <div className="carousel-image"><img src="images/yellow-bird.jpg" alt="yellow bird" /></div>
          </div>
          <h2 className="title">Ridge to Table</h2>
        </section>

        <section className="chronicles">
          <div className="image-carousel">
            <div className="carousel-image"><img src="images/motorcycle.jpg" alt="motorcycle" /></div>
            <div className="carousel-image"><img src="images/snail.jpg" alt="snail" /></div>
            <div className="carousel-image"><img src="images/yellow-bird.jpg" alt="yellow bird" /></div>
          </div>
          <h2 className="title">Chronicles</h2>
        </section>

      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path="/" render={() =>           
              <ImageCarousel />
            } />
        </div>
      </Router> 
    );
  }
}

export default App;
