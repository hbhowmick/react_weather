import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Weather from './views/weather';
import Sample from './views/sample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Weather />} />
            <Route exact path='/sample' render={() => <Sample />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
