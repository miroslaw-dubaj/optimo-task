import React from 'react';
import { connect } from 'react-redux';
import WeatherWidgetItem from '../../components/weather-widget-item';
import {CardGroup} from 'reactstrap';

const WeatherWidget = ({view}) => {

  const weatherWidgetItems = view.map(city => {
    return (
      <div>
        <WeatherWidgetItem key={city.id.toString()} data={city} />
      </div>
    );
  });

  return (
    <div>
      <CardGroup>
        {weatherWidgetItems}
      </CardGroup>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { view: state.view };
};

export default connect(mapStateToProps, null)(WeatherWidget);
