import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

import DevTools from './containers/DevTools';

const store = configureStore()

render(
  <Provider store={store}>
  <div>
    <App />
    <DevTools />
   </div>
  </Provider>,
  document.getElementById('root')
)

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import configureStore from './store/configureStore';
// import TodoApp from './containers/TodoApp';

// // Don't do this! You’re bringing DevTools into the production bundle.
// import DevTools from './containers/DevTools';

// const store = configureStore();

// render(
//   <Provider store={store}>
//     <div>
//       <TodoApp />
//       <DevTools />
//     </div>
//   </Provider>
//   document.getElementById('root')
// );