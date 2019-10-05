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
    let queryText = `SELECT "movies".id, "movies".title, "movies".poster, 
                        "movies".description,
                        "genres".name FROM "movies"
                        JOIN "movies_genres"
                        ON "movies".id = "movies_genres".movies_id
                        JOIN "genres"
                        ON "genres".id = "movies_genres".genres_id
                        WHERE "movies".id = $1;`;
    pool.query(queryText, [req.params.id]).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

// DELETE

// POST

// UPDATE

module.exports = router;