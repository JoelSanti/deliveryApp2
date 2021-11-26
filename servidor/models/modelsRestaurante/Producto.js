const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
	type: String, 
	require:true,
	trim:true
    },
    categoria: String,
    cantidadxdia:String,
    precio:String, 
    imagen:String,
    descripcion:String,
    creador:{
     type: mongoose.Schema.ObjectId,
     ref:'Usuario'
    },
    creado:{
	type:Date,
	default:Date.now()
    }
})

module.exports = mongoose.model('Producto',ProductoSchema);

