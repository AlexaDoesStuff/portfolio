import React from 'react';
import { ReactDOM, render } from 'react-dom';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter as Router } from 'react-router-dom';

render(
  <App />,
  document.querySelector('#root')
)
