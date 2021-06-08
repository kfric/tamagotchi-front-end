import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

export function App() {
  const [tamagotchis, setTamagotchis] = useState()

  return (
    <div className="app">
      <header>
        <h1>Pokegotchi</h1>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route path="*">Not Found</Route>
      </Switch>
      <footer>Created by Karl Frick in St.Petersburg, FL</footer>
    </div>
  )
}
