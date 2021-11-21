
const Usuario = require('../../models/modelsRestaurante/Usuario')
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

exports.autenticarUsuario = async (req , res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){

	return res.status(400).json({errors: errors.array()})
    }

    //extraer email y contraseña

    const {email,contraseña} = req.body

    try{
	//revisar que sea un usuario autenticado 
	let usuario = await Usuario.findOne({email})

	if(!usuario){
	    return res.status(400).json({msg:'No existe este usuario'})
	}

	//revisar su contraseña
	const contraCorrecta = await bcrypt.compare(contraseña, usuario.contraseña)

	if(!contraCorrecta){
	    return res.status(400).json({msg:'La contraseña es incorrecta'})
	}

	//Si todo es correcto 
	
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
	console.log(e)
    }
}

exports.usuarioAutenticado = async (req,res) => {
    try{
	const usuario = await Usuario.findById(req.usuario.id).select('-contraseña');
	res.json({usuario})

    }catch(e){
	console.log(e)
	res.status(500).json({msg:'Hubo un error'});

    }
}
