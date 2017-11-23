import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer/root';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
      reduxImmutableStateInvariant()
    ))
  );
};
