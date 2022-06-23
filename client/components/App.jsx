import React, { useState, useEffect } from 'react'

import { getRandomDog } from '../apiClient'

function App() {

  return (
    <>
      <h1>Dogs!</h1>
      <button onClick={getRandomDog}>Get Dog</button>
    </>
)

}

export default App
