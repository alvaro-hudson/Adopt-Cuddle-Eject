import React, { useState, useEffect } from 'react'


function Form(props) {


  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e) => {
    props.func(e.target.value, props.image)
    console.log(e.target.value, props.image)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='dogs'>Choose a dog!</label>
        <select type="text" id="dogs" name='adopt' onChange={handleChange}>
          <option value=''>Please Choose</option>
          <option value='adopt'>Adopt</option>
          <option value='cuddle'>Cuddle</option>
          <option value='eject'>Eject</option>
        </select> 
        
    </form>
    </>


        

  )
}

export default Form