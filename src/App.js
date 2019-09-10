import React, { Component } from "react";

// containers
import Main from './containers/Main';

// styles
import './assets/css/default.scss';
import './assets/css/style.scss';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        <Main />
      </div>
    );
  }
}

export default App;
