const express = require('express');
const router  = express.Router();
const perguntas = require('../models/perguntas')


router.get('/random', async (request, response) => {
    let resp = await perguntas.getPerguntas( { id1: Math.round(Math.random() * (0, 21)), id2: Math.round(Math.random() * (0, 21)), id3: Math.round(Math.random() * (0, 21) )} )
    response.status(200).json(resp)
})

router.get('/all', async (request, response) => {
    let resp = await perguntas.all();
    response.status(200).json(resp);
})

module.exports = (app) => app.use('/perguntas', router);