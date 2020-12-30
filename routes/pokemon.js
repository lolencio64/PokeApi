const express = require('express');
const app = express();
const url = require('./url');
const axios = require('axios');



app.get('/pokemon', async(req, res) => {

    //let nombre = url.getPoke(req.query.nombre);
    let nombre = req.query.nombre;
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);

    let data = resp.data;
    let datospoke = data.moves;
    let movimiento = [];


    console.log(movimiento);
    for (let i in datospoke) {
        movimiento = datospoke[0, i].move.name + "," + movimiento;

    }
    movimiento = movimiento.slice(0, -1);

    res.json({
        movimiento
    });
});



module.exports = app;