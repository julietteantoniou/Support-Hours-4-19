const db = require('../dbConfig.js')

module.exports = {
    findAnimals
}

function findAnimals() {
    return db('farms')
    .join('farm_animals', 'farms.id', 'farm_animals.farm_id')
    .join('animals', 'farm_animals.animal_id', 'animals.id')
    .select('farms.farm_name', 'animals.animal_name', 'animals.id as animal_id', 'farms.id as farm_id')
}