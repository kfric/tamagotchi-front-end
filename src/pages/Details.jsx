import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'

export function Details() {
  const [details, setDetails] = useState({
    id: '',
    name: '',
    birthday: '',
    hungerLevel: '',
    happinessLevel: '',
  })

  const params = useParams()
  const history = useHistory()

  async function loadPetDetails() {
    const response = await fetch(
      `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${params.id}`
    )

    if (response.status === 200) {
      const json = await response.json()
      setDetails(json)
    }
  }

  useEffect(function () {
    loadPetDetails()
  }, [])

  async function releasePet(event) {
    event.preventDefault()

    const response = await axios.delete(
      `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${details.id}`
    )
    history.push('/')
  }

  return (
    <div className="container">
      <h2 className="name">{details.name}</h2>
      <dl className="details">
        <dt>Birthday</dt>
        <dd>{details.birthday}</dd>
        <dt>Hunger Level</dt>
        <dd>{details.hungerLevel}</dd>
        <dt>Happiness Level</dt>
        <dd>{details.happinessLevel}</dd>
      </dl>
      <nav className="nav-buttons">
        <button>PLAY</button>
        <button>FEED</button>
        <button>SCOLD</button>
        <button onClick={releasePet} value={details.id}>
          RELEASE
        </button>
      </nav>
    </div>
  )
}
