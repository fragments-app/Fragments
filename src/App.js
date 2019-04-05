import React, { Component } from 'react';

// import private components
import Fragments from './private_components/fragments';

// import components 
import Test  from './components/Test/Test';
          
import Accordion from './components/Accordion/Accordion';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragments>

        <Test name="Nicolas" bgColor="#fe3e4e" />
       
          <Accordion question="What is that?" answer="That's an accordion" />
        </Fragments>
      </div>
    );
  }
}

export default App;
