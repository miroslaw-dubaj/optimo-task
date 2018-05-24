import { INITIAL_VIEW, UPDATED_VIEW } from '../actions';

const initialState = [];

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case INITIAL_VIEW:
      return [action.payload.data.query.results.channel.item.condition, ...state];

    case UPDATED_VIEW:
      const updatedItems = () => {
        for (const view in state) {
          const viewData = state[view];
          if (viewData.id === action.payload.id) {
            return [...state]
          }
        };
        let newState = []
        let changeMade = false;
        const randomNumber = Math.floor(Math.random() * 3);
        for (const [i, value] of state.entries()) {
          if (i === randomNumber && value.id !== action.payload.id && !changeMade) {
            newState.push({ ...action.payload });
            changeMade = true;
          } else {
            newState.push(value);
          }
        }
        return newState;
      }
      return updatedItems();
    default:
      return state;
  }
}
