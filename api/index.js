const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
require("dotenv-safe").load();
const app = express();

app.use(parser.json())

app.use(cors());

require('./routes/perguntas.js')(app)

app.listen(3000, function(){
    console.log('Sextou com Bis =D' );
})
