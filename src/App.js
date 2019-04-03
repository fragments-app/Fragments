import React, { Component } from 'react';

import Fragments from './private_components/fragments';
import Accordion from './components/Accordion/Accordion';
// import logo from './assets/images/logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Fragments>
          <Accordion question="What is that?" answer="That's an accordion" />
        </Fragments>
      </div>
    );
  }
}

export default App;
