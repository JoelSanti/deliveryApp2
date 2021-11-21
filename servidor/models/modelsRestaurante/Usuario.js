const mongosse = require('mongoose');

const UsuarioSchema = mongosse.Schema({

    nombre: {type:String , require: true ,trim: true},
    email: {type: String, unique: true},
    contraseña: {type: String, trim: true , require: true },
    descripcion: String,
    locales: [
        {
            direccion: {
                calle: String,
                ciudad: String,
                lat: String,
                long:String
            },
            telefonos:[
                {
                    celular: String
                }
            ],
            foto: Array
        }
    ]

})

module.exports = mongosse.model('Usuario',UsuarioSchema)
