
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('farmers').del()
    .then(function () {
      // Inserts seed entries
      return knex('farmers').insert([
        {
          "farmer_name": "Farmer One",
          "farm_id": 1
        },
        {
          "farmer_name": "Farmer Two",
          "farm_id": 2
        }
      ]);
    });
};
