import axios from 'axios'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import { Link } from 'react-router-dom'

export function Home() {
  const [pets, setPets] = useState([])
  const [newPet, setNewPet] = useState('')
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  async function getPets() {
    // const response = await axios.get('https://tamagotchiapi-kfrick.herokuapp.com/api/Pets')
    const response = await fetch(
      'https://tamagotchiapi-kfrick.herokuapp.com/api/Pets'
    )

    if (response.status === 200) {
      const json = await response.json()
      setPets(json)

      setLoading(false)
    }
  }

  useEffect(function () {
    getPets()
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }

  async function addPet(event) {
    event.preventDefault()

    const response = await axios.post(
      'https://tamagotchiapi-kfrick.herokuapp.com/api/Pets',
      {
        name: newPet,
      }
    )
    if (response.status === 201) {
      getPets()
      setNewPet('')
    }
  }

  const filterPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <nav className="search-sort">
        <form className="search-bar">
          <input
            type="text"
            placeholder="Search"
            onChange={function (event) {
              setSearch(event.target.value)
            }}
          />
        </form>
      </nav>
      <ul className="name-list">
        {filterPets.map(pet => (
          <li key={pet.id}>
            <Link to={`/details/${pet.id}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
      <form className="add-bar" onSubmit={addPet}>
        <input
          type="text"
          placeholder="New poke name goes here"
          value={newPet}
          onChange={function (event) {
            setNewPet(event.target.value)
          }}
        />
      </form>
    </div>
  )
}
