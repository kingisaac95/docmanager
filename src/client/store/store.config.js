import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../reducers';

export default function storeConfig(initialState) {
  return createStore(
    rootReducer,
    initialState
  );
}