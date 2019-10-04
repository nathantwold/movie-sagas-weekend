const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "movies";`; 
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

router.get('/:id', (req, res) => {
    
})

// DELETE

// POST

// UPDATE

module.exports = router;