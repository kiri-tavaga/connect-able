import React, { Component } from 'react';
import './App.css';
import Parents from './Parents'
import Kids from './Kids'
import Chores from './Chores'
import Events from './Events'
import Shopping from './Shopping'
import Messages from './Messages'
import {Grid} from 'semantic-ui-react'
class App extends Component {

 render() {
  return (
    <div>
      <Grid celled='internally'>
        <Grid.Row stretched>
          <Grid.Column width={3}>
            <Events />
          </Grid.Column>
          <Grid.Column width={13}>
            <h1>Connect-able App</h1>
            <Parents />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Shopping />
          </Grid.Column>
          <Grid.Column width={13}>
            <Kids />
            <Chores />
            <Messages />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
}
export default App;
