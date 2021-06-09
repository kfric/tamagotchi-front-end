import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pets from '../Pets.json'

export function Home() {
  const [pets, setPets] = useState(Pets)

  return (
    <div className="container">
      <ul className="name-list">
        {pets.map(pet => (
          <li>
            <Link to="/details/1">{pet.name}</Link>
          </li>
        ))}
      </ul>
      <form>
        <input type="text" placeholder="New poke name goes here" />
      </form>
    </div>
  )
}
