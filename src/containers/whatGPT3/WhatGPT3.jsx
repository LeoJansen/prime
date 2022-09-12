import React from 'react'
import Feature from '../../components/feature/Feature'
import { texts } from './texts'
import './whatgpt3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id="wgpt3">
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={texts.Title1} text={texts.Text1}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title={texts.Title2} text={texts.Text2}/>
        <Feature title={texts.Title3} text={texts.Text3}/>
        <Feature title={texts.Title4} text={texts.Text4}/>
      </div>
    </div>
  )
}

export default WhatGPT3