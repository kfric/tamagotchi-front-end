import React from 'react'

export function Details() {
  return (
    <div className="container">
      <h2 className="name">Pickachu</h2>
      <dl className="details">
        <dt>Birthday</dt>
        <dd>01/01/2021</dd>
        <dt>Hunger Level</dt>
        <dd>3</dd>
        <dt>Happiness Level</dt>
        <dd>9</dd>
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
