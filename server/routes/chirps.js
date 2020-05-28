const express = require('express');
const chirpsStore = require('../chirpstore');

let router = express.Router();

router.get('/:id?', (req, res) => {
    let id = req.params.id;
    id ? res.json(chirpsStore.GetChirp(id)) : res.send(chirpsStore.GetChirps());
});

router.post('/', (req, res) => {
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

router.put('/:id?', (req, res) => {
    let id = req.params.id;
    let text = req.body;
    id ? res.json(chirpsStore.UpdateChirp(id, text)) : res.sendStatus(404);
});

router.delete('/:id?', (req, res) => {
    let id = req.params.id;
    id ? chirpsStore.DeleteChirp(id) : res.sendStatus(404);
});


module.exports = router;