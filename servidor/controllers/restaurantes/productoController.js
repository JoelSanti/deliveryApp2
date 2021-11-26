const Producto = require('../../models/modelsRestaurante/Producto')
const { validationResult } = require('express-validator')


exports.crearProducto = async (req,res) => {
    
    //Revisar si existen errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){

	return res.status(400).json({errors: errors.array()})
    }

    try{

	//Crear un nuevo producto 
	const producto = new Producto(req.body)
	//Guardar el creador via web token 
	producto.creador = req.usuario.id;
	//guardamos

	producto.save();

	res.json(producto);

    }catch(e){
	console.log(e)
	res.status(500).send('hubo un error'); 

    }

}

//Obteniendo los productos 

exports.obtenerProductos = async (req , res) => {
    try{

	const productos = await Producto.find({
	    creador: req.usuario.id
	}).sort({creado:-1});

	res.json({productos})

    }catch(e){
	console.log(e);
	res.status(500).send('hubo un error');
    }
}


//Actualizar Producto

exports.actualizarProducto = async (req , res) => {
    //Revisar si existen errores
    const errors = validationResult(req);
    if(!errors.isEmpty()){

	return res.status(400).json({errors: errors.array()})
    }
    //extraer la informacion del proyecto
    //
    const {nombre,categoria,cantidadxdia,precio,imagen,descripcion} = req.body;
    const nuevoProducto ={};

    if(nombre){
	nuevoProducto.nombre = nombre;
	nuevoProducto.categoria = categoria;
	nuevoProducto.cantidadxdia = cantidadxdia;
	nuevoProducto.precio = precio;
	nuevoProducto.imagen = imagen;
	nuevoProducto.descripcion = descripcion;
	
    }

    try{

	//revisar el ID
	
	let producto = await Producto.findById(req.params.id)
	
	//Si el producto existe
	
	if(!producto){
	    return res.status(404).json({msg:'producto no encontrado '})
	}
	
	//verificar el creador 
	//
	if(producto.creador.toString() !== req.usuario.id){

	    return res.status(401).json({msg:'No autorizado'}); 

	}
	
	//actualizar 
	
	producto = await Producto.findOneAndUpdate({_id:req.params.id},{$set:nuevoProducto}, {new:true})

	res.json(producto)

    }catch(e){
	console.log(e)

	res.status(500).send('error en el servidor')
    }
}

//Eliminar Producto 

exports.eliminarProducto = async (req,res) => {
    try{

	//revisar el ID
	
	let producto = await Producto.findById(req.params.id)
	
	//Si el producto existe
	
	if(!producto){
	    return res.status(404).json({msg:'producto no encontrado '})
	}
	
	//verificar el creador 
	//
	if(producto.creador.toString() !== req.usuario.id){

	    return res.status(401).json({msg:'No autorizado'}); 

	}

	//Eliminar el producto 
	
	await Producto.findOneAndRemove({_id: req.params.id})
	res.json({msg:'Producto eliminado'})
	
    }catch(e){
	console.log(e)

	res.status(500).send('error en el servidor')

    }
}
