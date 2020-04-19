const router = require('express').Router();
const db = require('./farm_model.js');

router.get('/allFarms', (req, res) => {
    db.findAnimals()
    .then(farms => {
        res.status(200).json(farms)
    })
    .catch(err => res.status(500).json({ err }))
})

module.exports = router;