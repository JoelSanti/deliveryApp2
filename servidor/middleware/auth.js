const jwt = require('jsonwebtoken')

module.exports = function(req , res , next ){
     //leer el token del header 
    const token = req.header('x-auth-token')
    console.log(token)

    if(!token){
	return res.status(401).json({msg:'No hay token permiso no autorizado'})
    }
    //Revisar si no hay tokens
    //
    try{
       const cifrado = jwt.verify(token, process.env.SECRET)	
       req.usuario = cifrado.usuario
       next()
    }catch(e){
       res.status(401).json({msg:'token no valido'})	
    }
}
