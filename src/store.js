import { createStore, applyMiddleware, compose } from 'redux';
import { promiseMiddleware } from 'promise-middleware-redux';
import reducer from './reducers';


const composeEnchancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  reducer,
  composeEnchancers(
    applyMiddleware(promiseMiddleware)
  )
);
