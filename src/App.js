import React, { Component } from 'react';
import Carousel from './components/carousel';
import NavBar from './components/navBar';
import './App.css';
import axios from 'axios';

const API = "./";
const DEFAULT_QUERY = "moviesList.json";

class MovieSlider extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      error: null,
      position: 0,
      data: []
    };
  }

  getData = async () => {
    try {
      const response = await axios.get(API + DEFAULT_QUERY);
      this.setState({
        data: response.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    this.getData();
  }

  positionCallback = (newPosition) => {
    this.setState({
      position: newPosition,
      timestamp: Date.now()
    });
  };

  render() {
    if (!this.state.isLoading && (typeof this.state.data === "object") && (this.state.data.length > 0)) {
      return (
        <div>
          <Carousel
            data={this.state.data}
            index={this.state.position}
            onChange={this.positionCallback}
            timestamp={this.state.timestamp}
          />
          <NavBar
            data={this.state.data}
            index={this.state.position}
            onChange={this.positionCallback}
          />
        </div>
      )
    } else {
      return null;
    }
  }

}

export default function App() {
  return (
    <div id="wrapper">
      <MovieSlider/>
    </div>
  )
}
