import React, { Component } from 'react'

export default class DashboardContainer extends Component {
  
  state = {
    sites: [],
    suppliers: []
  }

  componentDidMount(){
    fetch('http://localhost:5000/supply')
      .then(res => res.json())
      .then(suppliers => this.setState({suppliers}))
      .catch(err => console.log(err))

    fetch('http://localhost:5000/sites')
      .then(res => res.json())
      .then(sites => this.setState({sites}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <p>hey</p>
      </div>
    )
  }
}
