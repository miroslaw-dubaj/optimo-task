import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const INITIAL_FETCH = 'INITIAL_FETCH';
export const INITIAL_VIEW = 'INITIAL_VIEW';
export const UPDATED_VIEW = 'UPDATED_VIEW';

export const fetchWeather = (query, type) => {
  const locationQuery = escape(`select item.condition from weather.forecast where woeid = ${query.woeid} and u='c'`);
  const locationUrl = `https://query.yahooapis.com/v1/public/yql?q=${locationQuery}&format=json`;
  const request = axios.get(locationUrl);
  return {
    type: type,
    payload: request,
    meta: query
  };
};

export const initialView = (action) => { 
  return {
    type: INITIAL_VIEW,
    payload: action.payload
  };
};

export const updateView = (action) => {
  return {
    type: UPDATED_VIEW,
    payload: action
  };
};
