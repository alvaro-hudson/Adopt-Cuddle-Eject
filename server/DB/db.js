const config = require('./knexfile').development
// eslint-disable-next-line no-unused-vars
const connection = require('knex')(config)

function getAll(db = connection) {
  return db('table')
  .select()
}

function addOne(newEntry ,db = connection) {
  return db('table')
  .insert(newEntry)
}

function getOne(id, db = connection) {
  return db ('table')
.select().where('id', id ).first()
}

module.exports = {
  getAll,
  addOne,getOne
}