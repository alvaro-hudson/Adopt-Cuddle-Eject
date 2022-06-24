import request from 'superagent'
//import { post } from '../server/routes/dogs'

const serverURL = 'http://localhost:3000/api/v1/dogs'

// *** EXAMPLE ***
// export function getWelcome() {
//   return request.get(`${serverURL}/welcome`).then((response) => response.body)
// }
// ***   ***   ***

export function getRandomDog() {
  return request
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log(res.body)
      return res.body.message
  })
  .catch(err => {
    res.status(500).send(err.message)
})
}


export function getRandomDog2() {
  return request
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log(res.body)
      return res.body.message
  })
  .catch(err => {
    res.status (500).send(err.message)
})
}

export function getRandomDog3() {
  return request
    .get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log(res.body)
      return res.body.message
  })
  .catch(err => {
    res.status (500).send(err.message)
})
}

export function postRandomDog(dogForm) {

  return request
  .post(serverURL)
  .send (dogForm)
  .then((res) => {
   return res.body
  
})
}