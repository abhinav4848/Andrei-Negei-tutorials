import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import { robots } from './robots';

// const App = () => {
// class App extends React.Component {
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // constructor() and render() are inbuilt in react so it's fine
        // but if we make our own function, use the = (arrows) => to make 
        // correct association of "this" 

        // instead of this.state.searchfield = , use this:
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc' >
                <h1>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>

        );
    }

}

export default App;