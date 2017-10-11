import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import App from './App'
import './index.css'

const history = createHistory()

ReactDOM.render(
  <BrowserRouter history={history}><App /></BrowserRouter>,
  document.getElementById('root'))
