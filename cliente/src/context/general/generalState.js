import {useReducer} from "react";
import generalContext from "./generalContext";
import generalReducer from "./generalReducer";
import { SWITCH_SIDEBAR , OBTENER_PRODUCTOS, AGREGAR_PRODUCTO, VALIDAR_FORMPRODUCTO,PRODUCTO_ACTUAL,ELIMINAR_PRODUCTO, ACTUALIZAR_PRODUCTO } from "../../types";

import clienteAxios from '../../config/axios'

const GeneralState = props => { 

    const initialState = {

        productos: [],
	sidebar : true,
	errorFormularioPro:false,
	producto:null
    }

    //dispach para las acciones 

    const [state , dispatch] = useReducer(generalReducer, initialState)

    //Serie de funciones para el CRUD
    //
    const mostrarSidebar = ()=>{
	dispatch({
        type:SWITCH_SIDEBAR
	})
    }

    //Obtener productos 
    //
    const obtenerProductos = async () => {
	try{
        
        const resultado = await clienteAxios.get('/api/restaurantes/productos');

	dispatch({
	    type:OBTENER_PRODUCTOS,
	    payload: resultado.data.productos
	})

	}catch(e){
	    console.log(e)
	}
    }

    const agregarProducto = async producto => {

	try{
	
	const resultado = await clienteAxios.post('/api/restaurantes/productos', producto)
	
	    dispatch({
		type:AGREGAR_PRODUCTO,
		payload:resultado.data
	    })

	}catch(e){
	    console.log(e)
	}


    };

    //validar formulario
    const mostrarError = ()=> {
     dispatch({
     type:VALIDAR_FORMPRODUCTO
     })
    }

    //Selecciona el producto en el que se dio click


    const productoActual = productoId => {
	dispatch({
	    type:PRODUCTO_ACTUAL,
	    payload:productoId
	})
    }

    //Eliminar producto 
    //
    const eliminarProducto = async productoId => {
	try{
	    await clienteAxios.delete(`/api/restaurantes/productos/${productoId}`);
	dispatch({
          type: ELIMINAR_PRODUCTO,
          payload: productoId,
         });
	    
	}catch(e){
         console.log(e);

	}
    }

    const actualizarProducto = async producto => {
	try{

	    
	    const resultado = await clienteAxios.put(`/api/restaurantes/productos/${producto._id}`,producto);

	    console.log(resultado)

	    dispatch({
		type:ACTUALIZAR_PRODUCTO,
		payload:resultado.data

	    })
	}catch(e){

	    console.log(e)

	}
    }

    return (
	<generalContext.Provider
	value = {{
	    sidebar : state.sidebar,
	    productos: state.productos,
	    errorFormularioPro: state.errorFormularioPro,
	    producto:state.producto,

	    obtenerProductos,
	    mostrarSidebar,
	    agregarProducto,
	    mostrarError,
	    productoActual,
	    eliminarProducto,
	    actualizarProducto
	}}
	>
	{props.children}
	</generalContext.Provider>
    )
}

export default GeneralState;
