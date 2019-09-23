import React, { Component } from 'react';
import './App.css';
import Parents from './Parents'
import Kids from './Kids'
import Hello from './Hello'
import Chores from './Chores'
class App extends Component {

 render() {
  return (
    <div>
      <h1>Connect-able App</h1>
      <Hello />
      <Parents />
      <Kids />
      <Chores />
    </div>
  );
}
}
export default App;
