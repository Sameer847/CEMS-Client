import React from 'react'
import Event from './Components/Event'
import './events.scss'

const Events = () => {
  return (
    <div className="py-3 bg-light">
      <div className="container">
        <h2>Popular Events</h2>
        <div className="row">
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </div>
  )
}

export default Events