const express = require('express');

const router  = express.Router();

router.get('/checktoken/:token', (request, response) => {

});

router.post('/answer', (request, response) => {
    return  {
        respostaId: 1,
        resposta: 1,
        usuarioToken: 'asdfasdfeq2t3'
    }
});


module.exports = (app) => app.use('/', router);