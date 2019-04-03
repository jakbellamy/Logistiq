import React, { Component } from 'react';
import DashboardContainer from './components/DashboardContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <DashboardContainer />
      </>
    )
  }
}

export default App;
