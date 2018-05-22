import React from 'react';
import WeatherWidgetItem from '../weather-widget-item';
import ReactInterval from 'react-interval';

const WeatherWidget = ({data}) => {
  if(!data) {
    return <div> Loading... </div>;
  }
  
  const weatherWidgetItems = data.map(city => {
    return (
      <div>
        <WeatherWidgetItem data={city} />
      </div>
    );
  });

  return (
    <ul> 
      {weatherWidgetItems}
    </ul>
  )
}

export default WeatherWidget;