const axios = require('axios');
const getPoke = async(nombre) => {
    //console.log(nombre);
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    //console.log(resp.data);
    return resp.data
}

module.exports = {
    getPoke
}