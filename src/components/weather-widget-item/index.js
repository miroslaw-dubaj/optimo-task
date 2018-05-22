import React from 'react';

const WeatherWidgetItem = ({data}) => {
  console.log(data);
  return (
    <li>
      <a>{data.city}</a>
    </li>
  )
}

export default WeatherWidgetItem;
