import React, { Component } from 'react';

// import private components
import Fragments from './private_components/fragments';

// import components      
import Accordion from './components/Accordion/Accordion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragments>   
          <Accordion question="What is that?" answer="That's an accordion" />
        </Fragments>
      </div>
    );
  }
}

export default App;
