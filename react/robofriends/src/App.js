import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from "./SearchBox";
import { robots } from './robots';
import './App.css';

// const App = () => {, if we didn't want states, and only props
// class App extends React.Component {, if {Component} not imported from 'react'
class App extends Component {
    //state
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

        // instead of this.state.searchfield = , use setState()
        this.setState({ searchfield: event.target.value });
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div className='tc' >
                <h1 className='f2'>Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>

        );
    }

}

export default App;