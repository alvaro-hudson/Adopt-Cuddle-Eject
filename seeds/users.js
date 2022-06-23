
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table').del()
  await knex('table').insert([
    {id: 1, 
    name: 'dave'
    adopt: 'rusty'
    cuddle:'intensly'
    eject:
  },
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ]);
};
