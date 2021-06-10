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

  function handlePetFilter(event) {
    setSearch(event.target.value)
  }

  const filterPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  )
  // BUG. app crashes when trying to sort in alphabetical order
  function sort() {
    const orderedPets = pets.filter(pet =>
      pet.name.sort(function (a, b) {
        if (a < b) {
          return -1
        }
        if (a > b) {
          return 1
        }
        return 0
      })
    )

    setPets(orderedPets)
  }

  return (
    <div className="container">
      <nav className="search-sort">
        <form className="search-bar">
          <input type="text" placeholder="Search" onChange={handlePetFilter} />
        </form>
        <button onClick={sort}>sort</button>
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
          onChange={function resetInput(event) {
            setNewPet(event.target.value)
          }}
        />
      </form>
    </div>
  )
}
