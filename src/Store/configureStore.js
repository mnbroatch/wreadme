import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Actions from '../Actions/Creators';
import rootReducer from '../Reducers/';
import sagas from '../Sagas/';

const sagaMiddleware = createSagaMiddleware();

export default () => {
  const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );

  const store = createStore(
    rootReducer,
    enhancers
  );

  sagaMiddleware.run(sagas);

  return store;
};
