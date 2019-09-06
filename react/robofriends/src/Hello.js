import React, { Component } from 'react';
import './Hello.css';
import logo from './logo.svg';


class Hello extends Component {
  render() {
    return (
      <div className="tc">
        <h1 className="f1">Hi there</h1>
        <p>Welcome to React</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

export default Hello;
