//Rutas para crear Usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../../controllers/restaurantes/usuarioController')
const {check}= require('express-validator')


//crea un usuario
// api/usuarios
router.post('/',
    [
	check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','Agrega un Email valido').isEmail(),
	check('contraseña','La contraseña debe de ser minima de 6 caracteres').isLength({min: 6})
    ],
    usuarioController.crearUsuario
)

module.exports = router;


