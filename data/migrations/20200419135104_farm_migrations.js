
exports.up = function(knex) {
  return knex.schema
  .createTable('farms', (farms) => {
      farms.increments();
      farms.string('farm_name').notNullable()
  })
  .createTable('farmers', (farmers) => {
      farmers.increments();
      farmers.string('farmer_name').notNullable();
      farmers.integer('farm_id').unsigned().notNullable().references('id').inTable('farms').onDelete('CASCADE').onUpdate('CASCADE')
  })
  .createTable('animals', (animals) => {
      animals.increments();
      animals.string('animal_name').notNullable();
  })
  .createTable('farm_animals', (farm_animals) => {
      farm_animals.increments();
      farm_animals.integer('animal_id').unsigned().references('id').inTable('animals').onDelete('CASCADE').onUpdate('CASCADE')
      farm_animals.integer('farm_id').unsigned().references('id').inTable('farmers').onDelete('CASCADE').onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('farms').dropTableIfExists('farmers').dropTableIfExists('animals').dropTableIfExists('farm_animals');
};
