const express = require('express');
const productoController = require('../../controllers/restaurantes/productoController')
const router = express.Router();
const auth = require('../../middleware/auth')
const {check} = require('express-validator')

//Agregar los productos 

router.post('/',
   auth,
    [
	check('nombre','El nombre del producto es obligatorio').not().isEmpty()
    ],
   productoController.crearProducto
);


//Obtener los productos 

router.get('/',
    auth,
    productoController.obtenerProductos
)

//Actualizar productos

router.put('/:id',
   auth,
    [
	check('nombre','El nombre del producto es obligatorio').not().isEmpty()
    ],
    productoController.actualizarProducto
)

//eliminar un proyecto
//
router.delete('/:id',
   auth,
   productoController.eliminarProducto
)

module.exports = router;
