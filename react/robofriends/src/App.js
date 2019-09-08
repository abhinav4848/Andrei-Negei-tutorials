import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import './App.css';

// const App = () => {, if we didn't want states, and only props
// class App extends React.Component {, if {Component} not imported from 'react'
class App extends Component {
    //state
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        // constructor() and render() are inbuilt in react so it's fine
        // but if we make our own function, use the = (arrows) => to make 
        // correct association of "this" 

        // instead of this.state.searchfield = , use setState()
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc' >
                    <h1 className='f2'>Robot Friends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList robots={filteredRobots} />
                </div>
            );
        }
    }

}

export default App;