import { INITIAL_FETCH, initialView } from '../actions';

const weatherActionOrigin = store => next => action => {
  const currentState = store.getState();
  
  if (!action.meta || !action.payload['data']) {
    // console.log('middleware - no meta:', action);
    return next(action);
  }
  
  action.payload.data.query.results.channel.item.condition = {
    city: action.meta.city,
    id: action.meta.id,
    woeid: action.meta.woeid,
    ...action.payload.data.query.results.channel.item.condition
  }
  
  if (action.type === INITIAL_FETCH && currentState.view.length !== 3) {
    store.dispatch(initialView(action));
    // console.log('middleware - dispatch sent:', action);
  }
  // console.log('middleware - default:', action);
  return next(action);
}

export default weatherActionOrigin;
