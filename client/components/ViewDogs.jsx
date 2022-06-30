import React, { useState, useEffect } from 'react'
import { getAllDogs } from '../apiClient'

function ViewDogs() {

  const [dogs, setDogs] = useState([])
  
  useEffect(() => {
    getAllDogs()
     .then(users => {
       setDogs(users)
    })
  }, [])

  console.log(dogs)
  
  return (
    <div>
      {dogs.map(users => {
         return (
           <>
         <h2>{users.name}</h2>
         <h3>Adopt</h3>
         <img src={users.adopt} alt="User adopt option" />
         <h3>Cuddle</h3>
          <img src={users.cuddle} alt="User cuddel option" />
          <h3>Eject</h3>
          <img src={users.eject} alt="Users eject option" />  
          </> 
         )
      })}
    </div>
  )
}

export default ViewDogs