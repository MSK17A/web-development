import React from 'react'
import './App.css';
import SearchBox from '../Components/SearchBox';
import 'tachyons'
import CardList from '../Components/CardList';
import '../index'
import Scroll from '../Components/Scroll';

class App extends React.Component {

  constructor() {
    super();

    /* State of the App */
    this.state = {
      robots: [],
      searchField: ""
    }
  }

  onSearchListener = (event) => {
    /*state.searchField = event.target.value; DO NOT DO THIS, its gonna requre re-render,
     instead, use this.setState({var:val}) to handle te re-rendering.
     Also, use arrow function instead, because the "this" will be in the searchBox not in the App if
     normal function is used.*/
    this.setState({ searchField: event.target.value })
  }

  /* This function is explained in React component documentation.
  This function runs before render() function. */
  componentDidMount() {
    console.log("mounted");

    /* Getting JSON data and turn it into Javascript Object */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ robots: data }));
  }

  render() {
    /* Filtering the robots object array for name searching */
    const { robots, searchField } = this.state; // To not typing this.state.robots again

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    })
    if (!robots.length) {
      return <h1>Loading</h1>
    }
    else {
      return (
        <React.Fragment>
          <h1 className="tc">ROBOFRIENDS</h1>
          <SearchBox listen={this.onSearchListener} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </React.Fragment>
      );
    }
  }
}

export default App;
