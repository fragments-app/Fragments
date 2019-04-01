import React, { Component } from 'react';

import Accordion from './components/Accordion/Accordion';
// import logo from './assets/images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Accordion question="What is that?" answer="That's an accordion" />
      </div>
    );
  }
}

export default App;
