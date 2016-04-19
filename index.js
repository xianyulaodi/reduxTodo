import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import 'todomvc-app-css/index.css'

// Redux 是独立的，它与React没有任何关系。React-Redux是官方提供的一个库，用来结合redux和react的模块。

// React-Redux提供了两个接口Provider、connect。

// Provider是一个React组件，它的作用是保存store给子组件中的connect使用。
// 例如下面的，就是保存store给 APP这个组件使用


const store = configureStore()
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
