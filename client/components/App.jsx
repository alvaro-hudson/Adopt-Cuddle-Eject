import React, { useState, useEffect } from 'react'

import { getRandomDog } from '../apiClient'

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
        <p>{setDogImage}</p>
      </div>
      
    </>
)

}

export default App
