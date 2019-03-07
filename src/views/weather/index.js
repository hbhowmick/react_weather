import React, { Component } from 'react';
import './index.css';
import WeatherTitle from '../../components/weatherTitle';
import WeatherForm from '../../components/weatherForm';
import WeatherInfo from '../../components/weatherInfo';
import API_KEY from '../../config.js';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      'data': [],
      'API_KEY': ''
    }
  }

  componentWillMount() {
    this.setState({ 'API_KEY': API_KEY });
  }

  getWeather = async(e) => {
    e.preventDefault();
    // console.log(e);

    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    if (country === '' || country === null) {
      country = 'US';
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.state.API_KEY}`;

      let response = await fetch(URL);
      let data = await response.json();
      // console.log(data);

      this.setState({ 'data': data });
      // console.log(this.state.data);
  }

  render() {
    // console.log(this.state.API_KEY);
    return (
      <div className="row">
        <div className="col-md-4">
          <WeatherTitle />
        </div>
        <div className="col-md-8">
          <WeatherForm getWeather={this.getWeather} />
          <WeatherInfo data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Weather;
