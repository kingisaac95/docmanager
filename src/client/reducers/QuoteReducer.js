import * as types from '../constants/types';

const initialState = { quote: '' };

/**
 * Quote Reducer
 * @function
 * @param {object} state - the initial state of the app
 * @param {object} action - the action initialized by the user
 * @returns {object} the current state
 */
export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_QUOTE_SUCCESS: {
      return action.quote;
    }
    case types.GET_QUOTE_FAILED: {
      return Object.assign({}, state);
    }
    default:
      return state;
  }
}
