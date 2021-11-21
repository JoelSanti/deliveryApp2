 
//Rutas para autenticar Usuarios
const express = require('express');
const router = express.Router();
const {check}= require('express-validator')
const authController = require('../../controllers/restaurantes/authController');
const auth = require('../../middleware/auth')



//crea un usuario
// api/usuarios
router.post('/',
    [
        check('email','Agrega un Email valido').isEmail(),
	check('contraseña','La contraseña debe de ser minima de 6 caracteres').isLength({min: 6})
    ],
    authController.autenticarUsuario
)

router.get('/',auth,
    authController.usuarioAutenticado)
module.exports = router;


