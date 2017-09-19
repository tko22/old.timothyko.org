'use strict';

const mongoose = require('mongoose')
const express = require('express')
const app = express()


const PORT = 3001;
const HOST = '0.0.0.0';


app.get('/', function (req, res) {
    res.send('hello!')
});

app.listen(PORT, function () {
    console.log(`Running on http://${HOST}:${PORT}`);
});
