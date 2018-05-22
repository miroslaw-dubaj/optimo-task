import React, { Component } from 'react';
import WeatherWidget from './components/weather-widget';
import ReactInterval from 'react-interval';
import { fetchWeatherIn, WOEID } from './api';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
      currentCities: null
    };
  };

  componentDidMount() {
    this.initialWeather();
  };

  initialWeather() {
    const initialState = this.setWeather();
    this.setState({ weather: initialState, currentCities: [] });
  }

  resetCurrentCitiesState() {
    this.setState(((prevState) => (
      { ...prevState, currentCities: [] }
    )), () => console.log(this.state));
  }

  resetCurrentWeatherState() {
    this.setState(((prevState) => (
      { weather: null, ...prevState }
    )));
  }

  reloadWeather() {
    this.resetCurrentWeatherState();
    const newState = this.setWeather();
    this.setState(((prevState) => (
      { weather: newState, ...prevState }
    )), () => console.log(this.state));
  }

  reloadCities() {
    this.resetCurrentCitiesState();
    this.setCurrentCities(this.getRandomCities());
  }

  setWeather() {
    const weatherState = []
    for (const value in WOEID) {
      const city = WOEID[value];
      fetchWeatherIn(city.woeid)
        .then(data => weatherState
          .push({ id: city.id, city: city.city, data: data.query.results.channel.item.condition }));
    }
    return weatherState;
  };

  setCurrentCities(cities) {
    cities.map(city => this.setState(((prevState) => (
      { ...prevState, currentCities: [...prevState.currentCities, city] }
    )), () => console.log(this.state)));
  };

  getRandomCities() {
    const cities = this.state.weather;
    const randomThreeIds = [];
    while (randomThreeIds.length < 3) {
      const randomNumber = Math.floor(Math.random() * 5);
      if (randomThreeIds.some((element) => element === randomNumber)) continue;
      randomThreeIds.push(randomNumber);
    }
    return cities.filter(city => (randomThreeIds.find(element => element === city.id)));
  }

  render() {
    return (
      <div className="App">
        <ReactInterval timeout={10000} enabled={true}
          callback={() => this.reloadWeather()} />
        <ReactInterval timeout={60000} enabled={true}
          callback={() => this.reloadCities()} />
        <WeatherWidget data={this.state.currentCities} />
      </div>
    );
  }
}

export default App;
