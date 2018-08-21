import React, { Component } from 'react'
// import HBar from './components/HorizBar/hbar'
import { Button } from 'semantic-ui-react'
import EventDashboard from '../features/events/EventDashboard/EventDashboard'
import NavBar from '../features/nav/NavBar/NavBar'

class App extends Component {
  render() {
    return (
      <div>
      <h1>re-vents</h1>
        
      <NavBar />

      <EventDashboard />
       
      </div>
    );
  }
}

export default App;


