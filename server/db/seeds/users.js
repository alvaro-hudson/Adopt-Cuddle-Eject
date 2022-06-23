
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table').del()
  await knex('table').insert([
    {id: 1, 
    name: 'dave',
    adopt: 'https://images.dog.ceo/breeds/pug/n02110958_12611.jpg',
    cuddle:'https://images.dog.ceo/breeds/setter-english/n02100735_5024.jpg',
    eject: 'https://images.dog.ceo/breeds/weimaraner/n02092339_2941.jpg',
    },
    {id: 2, 
      name: 'Janet',
      adopt: 'https://images.dog.ceo/breeds/dhole/n02115913_1830.jpg',
      cuddle:'https://images.dog.ceo/breeds/mastiff-english/2.jpg',
      eject: 'https://images.dog.ceo/breeds/mix/otis.jpg'
      },
    
  ]);
};
