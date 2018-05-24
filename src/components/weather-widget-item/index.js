import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle 
} from 'reactstrap';

const WeatherWidgetItem = ({data}) => {
  const handleClick = () => {
    const BASE_URL = 'https://www.yahoo.com/news/weather/';
    let url ='';
    const newTab = (url) => window.open(`${url}`, "_blank");
    switch (data.city) {
      case 'Warsaw':
        url = `${BASE_URL}poland/masovian/warsaw-523920`
        newTab(url);
        break;
      case 'Lodz':
        url = `${BASE_URL}poland/lodz/lodz-505120`
        newTab(url);
        break;
      case 'Berlin':
        url = `${BASE_URL}germany/berlin/berlin-638242`
        newTab(url);
        break;
      case 'London':
        url = `${BASE_URL}united-kingdom/england/london-44418`
        newTab(url);
        break;
      case 'New York':
        url = `${BASE_URL}united-states/new-york/new-york-2459115`
        newTab(url);
        break;   
      default:
        break;
    }
  }

  return (
    <Card onClick={handleClick} style={{width: '318px'}}>
      <CardBody>
        <CardTitle>{data.city}</CardTitle>
        <CardSubtitle>{data.temp}</CardSubtitle>
        <CardText>{data.text}</CardText>
      </CardBody>
    </Card>
  )
}

export default WeatherWidgetItem;
