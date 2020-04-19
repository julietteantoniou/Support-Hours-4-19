
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('farm_animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('farm_animals').insert([
        {
          "animal_id": 1,
          "farm_id": 1
        },
        {
          "animal_id": 1,
          "farm_id": 2
        },
        {
          "animal_id": 2,
          "farm_id": 1
        },
        {
          "animal_id": 3,
          "farm_id": 2
        },
      ]);
    });
};
