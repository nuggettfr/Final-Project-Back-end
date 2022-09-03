const express = require('express');
const add = express();
const mongoose = require('mongoose');
const url = ("url");
const port = 4000;

add.list(port, () => {
console.log("connected to port ", port )
})

mongoose.connect(url).then(() => {
    console.log("connected")})
    .catch((error) => {console.log(error)})




