const Usuario = require('../../models/modelsRestaurante/Usuario')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

exports.crearUsuario = async (req , res)=>{
    //Revisar si existen errores

    const errors = validationResult(req);
    if(!errors.isEmpty()){

	return res.status(400).json({errors: errors.array()})
    }

    //extraer email y password 
    
    const {email , contraseña} = req.body

    try{
      
	let usuario = await Usuario.findOne({email});

	//Crea el nuevo usuario
	

	if(usuario){
	    return res.status(400).json({msg: 'El usuario ya existe'})

	}

	usuario = new Usuario(req.body); 

	//hashear el password 
	
	const salt = await bcrypt.genSalt(10);
	const contraHash = await bcrypt.hash(contraseña,salt);
        
	usuario.contraseña = contraHash

	//guardar usuario 
	
	await usuario.save()

	//Crear y firmar el json web token 
	const payload = {
	    usuario:{
		id:usuario.id

	    }

	}

	//firmar el token 
	
	jwt.sign(payload,process.env.SECRET,{
	    expiresIn:3600
	},(error , token )=>{
           if(error) throw error;

           res.json({token})
	    
	} )

    }catch(e){

	console.log('error')
	res.status(400).send('hubo un errork')

    }
}
