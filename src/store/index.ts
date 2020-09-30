import { createStore, compose, applyMiddleware } from 'redux';
import createReduxSaga from 'redux-saga';
import { devToolsEnhancer } from 'redux-devtools-extension/developmentOnly';
import { peopleReducer } from './peopleReducer';
import rootSaga from './sagas';

const ReduxSaga = createReduxSaga();

const store = createStore(peopleReducer, compose(applyMiddleware(ReduxSaga), devToolsEnhancer({})));

ReduxSaga.run(rootSaga);

export default store;
