import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import {
  HashRouter as Router,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

// We will create these two pages in a moment
import Home from './pages/home.js'

import '../src/pages/pages.scss'
import './pages/pages.scss';

const routes = [
  { path: '/', name: 'Home', Component: Home }
]

export default function App() {
  let location = useLocation;
  return (
    <>
      <Home />
    </>
  )
}
