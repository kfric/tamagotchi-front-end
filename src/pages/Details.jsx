import React from 'react'

export function Details() {
  return (
    <>
      <h2>Pickachu</h2>
      <dl>
        <dt>Birthday</dt>
        <dd>01/01/2021</dd>
        <dt>Hunger Level</dt>
        <dd>3</dd>
        <dt>Happiness Level</dt>
        <dd>9</dd>
        <nav>
          <button>PLAY</button>
          <button>FEED</button>
          <button>SCOLD</button>
        </nav>
      </dl>
    </>
  )
}
