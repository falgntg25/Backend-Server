var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var Schema = mongoose.Schema;

var rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol valido'
}

var usuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El Nombre Es Necesario'] },
    email: { type: String, unique: true, required: [true, 'El Correo Es Necesario'] },
    password: { type: String, required: [true, 'La Contraseña Es Necesaria'] },
    img: { type: String, required: false },
    role: { type: String, required: true, default: 'USER_ROL', enum: rolesValidos }

});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser unico' });

module.exports = mongoose.model('Usuario', usuarioSchema);