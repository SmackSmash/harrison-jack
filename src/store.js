import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchSubmitContactForm } from './sagas/contactFormSaga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, {}, enhancers);

sagaMiddleware.run(watchSubmitContactForm);

export default store;
