import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])
  const [newPet, setNewPet] = useState('')

  async function getPets() {
    // const response = await axios.get('https://tamagotchiapi-kfrick.herokuapp.com/api/Pets')

    const response = await fetch(
      'https://tamagotchiapi-kfrick.herokuapp.com/api/Pets'
    )

    if (response.status === 200) {
      const json = await response.json()
      setPets(json)
    }
  }
  useEffect(function () {
    getPets()
  }, [])

  async function addPet(event) {
    event.preventDefault()

    const response = await axios.post(
      'https://tamagotchiapi-kfrick.herokuapp.com/api/Pets',
      {
        name: newPet,
      }
    )
    getPets()
    setNewPet('')
  }

  function resetInput(event) {
    setNewPet(event.target.value)
  }

  return (
    <div className="container">
      <ul className="name-list">
        {pets.map(pet => (
          <li key={pet.id}>
            <Link to={`/details/${pet.id}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={addPet}>
        <input
          type="text"
          placeholder="New poke name goes here"
          value={newPet}
          onChange={resetInput}
        />
      </form>
    </div>
  )
}
