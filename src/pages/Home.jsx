import React from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="container">
      <ul className="name-list">
        <li>
          <Link to="/details/1">Pickachu</Link>
        </li>
        <li>
          <Link to="/details/1">Charmander</Link>
        </li>
        <li>
          <Link to="/details/1">Squirtle</Link>
        </li>
        <li>
          <Link to="/details/1">Bulbasaur</Link>
        </li>
        <li>
          <Link to="/details/1">Cyndaquil</Link>
        </li>
        <li>
          <Link to="/details/1">Chikorita</Link>
        </li>
        <li>
          <Link to="/details/1">Totadile</Link>
        </li>
        <li>
          <Link to="/details/1">Treecko</Link>
        </li>
        <li>
          <Link to="/details/1">Thomas</Link>
        </li>
        <li>
          <Link to="/details/1">Taya</Link>
        </li>
      </ul>
      <form>
        <input type="text" placeholder="New poke name goes here" />
      </form>
    </div>
  )
}
