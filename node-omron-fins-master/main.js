const bodyParser = require('body-parser');
const express = require('express');

var app = express();
const reader = require('../node-omron-fins-master/routes/reader');

app.use(bodyParser.json());

app.use('/reader', reader);

app.listen(8001, function () {
    console.log('Servidor rodando na porta 8001.');
});