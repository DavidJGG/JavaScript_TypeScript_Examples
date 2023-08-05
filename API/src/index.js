const express = require('express');
const app = express();
const morgan = require('morgan')
require('dotenv').config()



app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./Controllers/Papas.js'));
app.use(require('./Controllers/Carros.js'));
app.use(require('./Controllers/Calculadora.js'));


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});