import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Example from './examples/Button'

import './src/css/common.scss'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Example}/>
  </Router>
), document.getElementById('app'))
