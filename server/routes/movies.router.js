const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET call to display all movies
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "movies";`;
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    });
})

// GET call to display genre info with movies
router.get('/:id', (req, res) => {
    let queryText = `SELECT "movies".id, "movies".title, "movies".poster, "movies".description, 
                        string_agg("genres".name, ', ') AS genre_list FROM "movies"
                        JOIN "movies_genres" ON "movies".id = "movies_genres".movies_id
                        JOIN "genres" ON "genres".id = "movies_genres".genres_id        
                        WHERE "movies".id = $1
                        GROUP BY 1;`;
    pool.query(queryText, [req.params.id]).then(result => {
        res.send(result.rows);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

// DELETE

// POST

// UPDATE
router.put('/:title/:description/:id', (req, res) => {
    let queryText = `UPDATE "movies" SET "title" = $1, "description" = $2 WHERE "id" = $3;`;
    pool.query(queryText, [req.params.title, req.params.description, req.params.id]).then(response => {
        res.sendStatus(200);
    }).catch((error) => {
        res.sendStatus(500);
    })
})

module.exports = router;