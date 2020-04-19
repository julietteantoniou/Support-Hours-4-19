
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        {
          'animal_name': 'pigs'
        },
        {
          'animal_name': 'chickens'
        },
        {
          'animal_name': "cows"
        }
      ]);
    });
};
