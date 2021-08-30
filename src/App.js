import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import {
  BrowserRouter as Router,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

// We will create these two pages in a moment
import Home from './pages/home.js'
import Resume from './pages/resume.js'
import Volunteer from './pages/volunteer.js'
import Contact from './pages/contact.js'

import '../src/pages/pages.scss'

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/resume', name: 'Resume', Component: Resume },
  { path: '/volunteer', name: 'Volunteer', Component: Volunteer },
  { path: '/contact', name: 'Contact', Component: Contact },
]

export default function App() {
  let location = useLocation;
  return (
    <Router>
    <>
      <div>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                classNames="pages"
                timeout={1500}
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}
      </div>
    </>
    </Router>

    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={home} />
    //     <Route exact path="/resume" component={resume} />
    //     <Route exact path="/volunteer" component={volunteer} />
    //     <Route exact path="/contact" component={contact} />
    //   </Switch>
    // </Router>
  )
}
