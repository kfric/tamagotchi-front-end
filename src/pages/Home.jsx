import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pets from '../Pets.json'

export function Home() {
  const [pets, setPets] = useState([])

  useEffect(function () {
    async function getPets() {
      const response = await fetch(
        'https://tamagotchiapi-kfrick.herokuapp.com/api/Pets'
      )

      if (response.status === 200) {
        const json = await response.json()
        setPets(json)
      }
    }
    getPets()
  }, [])

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
