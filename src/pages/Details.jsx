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

  async function releasePet() {
    const response = await axios.delete(
      `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${details.id}`
    )
    if (response.status === 200) {
      history.push('/')
    }
  }

  async function playPet() {
    const response = await axios.post(
      `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${details.id}/Playtimes`,
      {}
    )
    if (response.status === 200) {
      loadPetDetails()
    }
  }

  async function feedPet() {
    const response = await axios.post(
      `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${details.id}/Feedings`,
      {}
    )
    if (response.status === 200) {
      loadPetDetails()
    }
  }

  async function scoldPet() {
    const response = await axios.post(
      `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${details.id}/Scoldings`,
      {}
    )
    if (response.status === 200) {
      loadPetDetails()
    }
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
        <button onClick={playPet}>PLAY</button>
        <button onClick={feedPet}>FEED</button>
        <button onClick={scoldPet}>SCOLD</button>
        <button onClick={releasePet}>RELEASE</button>
      </nav>
    </div>
  )
}
