const express = require('express');
const parser = require('body-parser');
const app = express();

app.use(parser.json())
require('./routes.js')(app)
app.listen(3000, function(){
    console.log('Sextou com Bis =D' );
})