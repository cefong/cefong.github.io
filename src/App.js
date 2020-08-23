import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MobileLayout from './components/Mobile/MobileLayout';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth, // start with innerwidth
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange); // resize event given when browser size changed
  }

  // remove the listener when component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  // define handler function
  handleWindowSizeChange = () => {
    this.setState({width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    if (true) {
      return (
        <MobileLayout/>
      );
    } 
    // else {
    //   return (
    //     <Layout />
    //   );
    // }
  }
}

export default App;
