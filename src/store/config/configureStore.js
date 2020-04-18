import { createStore, combineReducers } from 'redux';
import exampleReducer from '../reducers/example';

export default () => {
  const store = createStore(
    combineReducers({
      example: exampleReducer
    })
  );

  return store;
};
