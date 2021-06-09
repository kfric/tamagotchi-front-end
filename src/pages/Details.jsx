import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export function Details() {
  const [details, setDetails] = useState({
    id: '',
    name: '',
    birthday: '',
    hungerLevel: '',
    happinessLevel: '',
  })

  const params = useParams()

  useEffect(function () {
    async function loadPetDetails() {
      const response = await fetch(
        `https://tamagotchiapi-kfrick.herokuapp.com/api/Pets/${params.id}`
      )

      if (response.status === 200) {
        const json = await response.json()
        setDetails(json)
      }
    }
    loadPetDetails()
  }, [])

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
        <dt>Last Interacted with</dt>
        <dd>1/1/2021</dd>
        <dt>Is Dead?</dt>
        <dd>False</dd>
      </dl>
      <nav className="nav-buttons">
        <button>PLAY</button>
        <button>FEED</button>
        <button>SCOLD</button>
      </nav>
    </div>
  )
}
