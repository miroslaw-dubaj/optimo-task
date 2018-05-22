import { getWeather } from '../utils/request.js';

export const WOEID = [
  {
    city: 'Warsaw',
    id: 1,
    woeid: 523920
  }, 
  {
    city: 'Lodz',
    id: 2,
    woeid: 505120
  },
  { 
    city: 'Berlin',
    id: 3,
    woeid: 638242
  },
  {
    city:'London',
    id: 4,
    woeid: 44418
  },
  {
    city: 'New York',
    id: 5,
    woeid: 2459115}
]

export const fetchWeatherIn = (query) => {
  const locationQuery = escape(`select item.condition from weather.forecast where woeid = ${query} and u='c'`);
  const locationUrl = `https://query.yahooapis.com/v1/public/yql?q=${locationQuery}&format=json`;
  return getWeather(locationUrl).then((response) => response.json());
};



  
  // const clientKey = 'dj0yJmk9QUJlY0Y4d0pSWEJhJmQ9WVdrOVdYTnBTMHBTTjJjbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1lMQ--';
  // const clientSecret = '4171e06ff5dde300cd01f555ad7c77d054bd9176';

// https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487889&format=json


// https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9ak5IZ2x5WmNsaHp6JmQ9WVdrOVNqQkJUMnRYTjJrbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmeD1hYQ--&redirect_uri=http://www.example.com&response_type=token&language=en-us
// Sample Request Header¶
// GET https://social.yahooapis.com/v1/user/abcdef123/profile?format=json
// Authorization: Bearer aXJUKynsTUXLVY

// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22warsaw%2C%20poland%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys
