import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

import DevTools from './containers/DevTools'

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
