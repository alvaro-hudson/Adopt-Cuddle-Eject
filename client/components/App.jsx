import React, { useState, useEffect } from 'react'

import { getRandomDog } from '../apiClient'
import Form from './Form'

function App() {

  const [dogImage, setDogImage] = useState('')

  const clickHandler = () => {
    getRandomDog()
      .then(picUrl => {
      setDogImage(picUrl)
    })
  }

  return (
    <>
      <h1>Dogs!</h1>
      <button onClick={clickHandler}>Get Dog</button>
      <div>
        <img src={dogImage} />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <img src={dogImage} />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <img src={dogImage} />
      </div>
      <div>
        <Form />
      </div>
        
      
    </>
)

}

export default App
