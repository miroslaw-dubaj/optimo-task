import { FETCH_WEATHER, INITIAL_FETCH } from '../actions';

const initialState = [];

export default function (state = initialState, action ={}) {
  switch (action.type) {
    case INITIAL_FETCH:
    return [action.payload.data.query.results.channel.item.condition, ...state];
    
    case FETCH_WEATHER:
      const updatedItems = state.map(item => {
        if (
          item.id === action.payload.data.query.results.channel.item.condition.id
          &&
          item.date !== action.payload.data.query.results.channel.item.condition.date) {
          return { ...action.payload.data.query.results.channel.item.condition };
        };
        return item;
      })
      return updatedItems;
    default:
      return state;
  }
}
