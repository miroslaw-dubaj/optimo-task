import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, updateView, INITIAL_FETCH, FETCH_WEATHER } from '../../actions';
import WeatherWidget from '../weather-widget';
import ReactInterval from 'react-interval';
import { WOEID } from '../../api';
import { Container, Row, Col } from 'reactstrap';
import './style.css';

class App extends Component {

  componentDidMount() {
    this.onWeatherUpdate(INITIAL_FETCH);
  };

  onRandomCitiesUpdate = () => {
    const { weather } = this.props;    
    const randomThreeIds = [];
    while (randomThreeIds.length < 3) {
      const randomNumber = Math.floor(Math.random() * 5) + 1;
      if (randomThreeIds.some((element) => element === randomNumber)) continue;
      randomThreeIds.push(randomNumber);
    }
    const updatedCities = weather.filter(
      city => randomThreeIds.indexOf(city.id) >= 0
    );  
    for (const city in updatedCities) {
      const cityData = updatedCities[city]
      this.props.updateView(cityData);
    }
  };

  onWeatherUpdate = (type) => {
    for (const value in WOEID) {
      const city = WOEID[value];
      this.props.fetchWeather(city, type);
    };
  };

  render() {
    return (
      <div className="App">
        <ReactInterval timeout={10000} enabled={true}
          callback={() => this.onWeatherUpdate(FETCH_WEATHER)} />
        <ReactInterval timeout={60000} enabled={true}
          callback={() => this.onRandomCitiesUpdate()} />
        <Container>
          <Row>
            <Col xs="auto">
              <WeatherWidget />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchWeather, updateView }, dispatch);
};

const mapStateToProps = (state) => {
  return { weather: state.weather };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
