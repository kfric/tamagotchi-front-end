import React, { useState } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

export function App() {
  const [tamagotchis, setTamagotchis] = useState()

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <h1 className="title">
            <Link to="/">Pokegotchi</Link>
          </h1>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/details/:id">
              <Details />
            </Route>
            <Route path="*">Not Found</Route>
          </Switch>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          Created by Karl Frick in St.Petersburg, FL
        </div>
      </footer>
    </div>
  )
}
