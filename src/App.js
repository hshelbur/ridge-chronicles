import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './layout/header.js';
import {CHRONICLES, IMAGES} from './data/chroniclesgalleries.js';
import ImageCarousel from './layout/imagecarousel.js';
import ChroniclesGallery from './pages/chroniclesgallery.js';
import ImagePage from './pages/singleimage.js';


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
              <ChroniclesGallery galleries={CHRONICLES} />
            } />

            <Route exact path="/chronicles-photo/:id" render={({match}) => {

              const {id} = match.params
              const matches = IMAGES.filter(image => image.id === id)
              return matches.length > 0 
                ? <ImagePage images={matches} />
                : <h1>Sorry, Image Not Found</h1>
            }} />

            <Route path="/archive" render={() =>
              <ChroniclesGallery galleries={CHRONICLES} />
            } />

        </div>
      </Router> 
    );
  }
}

export default App;
