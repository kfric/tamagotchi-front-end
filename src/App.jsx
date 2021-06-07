import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

export function App() {
  return (
    <>
      <header>
        <h1>Pokegotchi</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/1">Page 1</Link>
            </li>
            <li>
              <Link to="/2">Page 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route exact path="/1">
          Page 1
        </Route>
        <Route exact path="/2">
          Page 2
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
      <footer>API and site created by Karl Frick in St.Petersburg, FL</footer>
    </>
  )
}
