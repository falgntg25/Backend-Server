//Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar Variables
var app = express();


//bodyParser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//importar routas

var appRoutes = require('./routes/app');
var usuariosRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');




//Conexion BD

mongoose.connection.openUri('mongodb://localhost:27017/HospitalDb', (err, res) => {

    if (err) throw err;

    console.log('Base De Datos: \x1b[36m%s\x1b[0m', 'online');
})

//Rutas
app.use('/usuario', usuariosRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);

//Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express Server puerto 3000: \x1b[36m%s\x1b[0m', 'online');
});