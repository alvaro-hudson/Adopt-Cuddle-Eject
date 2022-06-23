
exports.up = function(knex) {
 return knex.schema.createTable('table',(table)=>{
   table.increments().primary()
   table.string('name')
   table.string('adopt')
   table.string('cuddle')
   table.string('eject')
 }) 
};


exports.down = function(knex) {
  return knex.schema.dropTable('table')
};
