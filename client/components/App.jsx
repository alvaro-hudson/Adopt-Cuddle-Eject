import React, { useState, useEffect } from 'react'

import { getRandomDog, getRandomDog2, getRandomDog3, postRandomDog } from '../apiClient'
import Form from './Form'
import ViewDogs from './ViewDogs'

function App() {

  const [dogImage, setDogImage] = useState('')
  const [dogImage2, setDogImage2] = useState('')
  const [dogImage3, setDogImage3] = useState('')
  const [user, setUsers] = useState(false)
  
  
  const clickHandler = () => {
    getRandomDog()
      .then(picUrl => {
        setDogImage(picUrl)
      })
    getRandomDog2()
      .then(picUrl => {
        setDogImage2(picUrl)
      })
    getRandomDog3()
      .then(picUrl => {
        setDogImage3(picUrl)
      })
  }
  

  

 
  
  const [formData, setFormData] = useState({
    name: '',
    adopt: '',
    cuddle: '',
    eject: '',
  })

  const dogFormStuff = (action, image) => {
    setFormData({
      ...formData,
      [action]: image
    })
  }

  const dogSubmit = () => {
    console.log('dogSubmit function', formData)
    postRandomDog(formData)
  }

  const nameChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    })
  }

  const handleClick = (e) => {
    setUsers(true)
  }

  return (
    <>
    <div className='color'> 
      <h1>Welcome to Adopt, Cuddle, Eject!</h1>
      <h3>Take your pick! And remember, only 1 dog per choice!</h3>
      </div>
     
      <button onClick={clickHandler} >Get Dog</button>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" onChange={nameChange} />
      <div>
        <img src={dogImage} />
      </div>
      <div>
        <Form func={dogFormStuff} image={dogImage} />
      </div>
      <div>
        <img src={dogImage2} />
      </div>
      <div>
        <Form func={dogFormStuff} image={dogImage2} />
      </div>
      <div>
        <img src={dogImage3} />
      </div>
      <div>
        <Form func={dogFormStuff} image={dogImage3} />
      </div>
      <button onClick={dogSubmit} >Submit</button>

      <button onClick={handleClick}>See other people's choices</button> 

      {user && <ViewDogs/>}
      
    </>
  )
}

export default App
