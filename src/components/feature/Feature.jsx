import React from 'react'
import './feature.scss'

const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__feature">
    <div className="title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="text">
      <p>{text}</p>
    </div>
  </div>
  )
}

export default Feature