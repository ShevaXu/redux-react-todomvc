import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../ducks';
import DevTools from '../containers/DevTools';

const finalCreateStore = compose(
  // Middleware you want to use in development:
  // applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../ducks', () =>
      store.replaceReducer(require('../ducks'))
    );
  }

  return store;
}