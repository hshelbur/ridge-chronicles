import React, { Component } from 'react';
import './App.css';
import Sidebar from './layout/sidebar.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';

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

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

            <Route exact path="/" render={() =>           
              <Header />
            } />
        </div>
      </Router> 
    );
  }
}

export default App;
