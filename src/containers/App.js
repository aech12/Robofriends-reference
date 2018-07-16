import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      stateRobots: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=> resp.json())
    .then(users=> {
      this.setState( {stateRobots: users} )
    })
  }
  onSearchChange = (event) => {
    this.setState( {searchfield: event.target.value} )
  }
  render() {
    const filteredRobots = this.state.stateRobots.filter(robot=> {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        <h1 className='f2'>Robofriends</h1>
        < SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          < CardList robots={filteredRobots} />
        </Scroll>
      </div>
  )
  }
  
}

export default App;