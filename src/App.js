import './App.css';
import React, { Component } from 'react';

import { Auth } from 'aws-amplify';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header"> />
        <button onClick={() => Auth.federatedSignIn({provider: "Google"})}>sign in with google</button>
        <button onClick={() => Auth.federatedSignIn().then(console.log("dd"))
        }>sign in</button>
      </header>
    </div>
    );
  }
}
export default App;
