//Requires
var express = require('express');
var mongoose = require('mongoose');

//Inicializar Variables
var app = express();


//Conexion BD

mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base De Datos: \x1b[36m%s\x1b[0m', 'online');
})

//Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    });
});

//Escuchar Peticiones
app.listen(3000, () => {
    console.log('Express Server puerto 3000: \x1b[36m%s\x1b[0m', 'online');
});