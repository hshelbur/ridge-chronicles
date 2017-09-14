import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './layout/header.js';
import CHRONICLES from './data/galleries.js'
import ImageCarousel from './layout/imagecarousel.js';
import ChroniclesGallery from './pages/chroniclesgallery.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path="/" render={() =>           
              <ImageCarousel />
            } />

            <Route path="/chronicles" render={() =>
              <ChroniclesGallery galleries={CHRONICLES.filter((gallery) => gallery.category === 'Chronicles')} />
            } />

        </div>
      </Router> 
    );
  }
}

export default App;
