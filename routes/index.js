const { Router } = require("express");
// const axios = require('axios');
const router = Router();
const {getPoke} = require('./url');

router.get("/pokemon", async (req, res) => {
    let nombre = req.body.nombre;
    // const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    let resp = await getPoke(nombre)
    let data = resp.data;
    let datospoke = data.moves;
    let movimiento = [];
    console.log(movimiento);
    for (let i in datospoke) {
        movimiento = datospoke[0, i].move.name + "," + movimiento;
    }
    movimiento = movimiento.slice(0, -1);
    res.json({movimiento});
});


module.exports = router;