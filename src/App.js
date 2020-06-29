import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component 
{
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    // console.log('yea')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    // console.log(filteredRobots)
  }
  
  
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    });
    return (
      <div className="tc">
        <header className="">
          <h1 className="f1">Robofriends</h1>
        </header>

        <SearchBox searchChange={this.onSearchChange} />

        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
