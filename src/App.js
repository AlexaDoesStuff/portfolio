import React from 'react'
import { Route, Switch } from 'react-router-dom'

// We will create these two pages in a moment
import home from './pages/home.js'
import '../src/pages/pages.scss'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={home} />
    </Switch>
  )
}
