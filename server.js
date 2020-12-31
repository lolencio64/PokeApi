require('./config/config')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json());

//configuracion global
app.use(require('./routes/index'));

app.listen(3000, () => {
    console.log('Escuchando el puerto: ', 3000);
});