import React, { Component } from "react";

// routes
import Routes from './routes';

// styles
import './assets/css/default.scss';
import './assets/css/style.scss';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
