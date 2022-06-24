const express = require('express')
//const { getAll } = require('../DB/db')
const db = require('../db/db')
const router = express.Router()

// GET /api/v1/welcome/
router.get('/', (req, res) => {
db.getAll()
.then(users => {
  res.json(users)
})
.catch(err => {
  res.status (500).send(err.message)
})
})

router.post('/', (req, res) => {
  const newUser = req.body
  console.log('newUser',newUser)
  db.addOne(newUser)
    .then(idArr => {
      const id = idArr[0]
      console.log('id', id)
      db.getOne(id)
        .then(user => {
          console.log('user', user)
          res.json(user)
        })
      .catch(err => {
       res.status (500).send(err.message)
        })
    })
})

module.exports = router
