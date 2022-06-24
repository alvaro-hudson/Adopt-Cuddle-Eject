import React, { useState, useEffect } from 'react'


function Form() {

  const [formData, setFormData] = useState({
    name: '',
    adopt: '',
    cuddle: '',
    eject: '',
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form>
        <select>
          <option value='option1'>Adopt</option>
          <option value='option2'>Cuddle</option>
          <option value='option3'>Eject</option>
        </select> 
    </form>
    </>


        

  )
}

export default Form