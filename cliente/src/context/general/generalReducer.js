import { ACTUALIZAR_PRODUCTO, AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO, OBTENER_PRODUCTOS, PRODUCTO_ACTUAL, SWITCH_SIDEBAR, VALIDAR_FORMPRODUCTO } from "../../types";

export default (state,action)=>{

    switch(action.type){

    case SWITCH_SIDEBAR :
    return{
	...state,
	sidebar:!state.sidebar

    }
    case OBTENER_PRODUCTOS:
	    return{
		...state,
		productos:action.payload
	    }
    case AGREGAR_PRODUCTO:
	    return{
		...state,
		productos:[...state.productos,action.payload]
	    }
    case VALIDAR_FORMPRODUCTO:
	    return{
		...state,
		errorFormularioPro:true
	    }
    
    case PRODUCTO_ACTUAL:
	    return{
		...state,
		producto:state.productos.filter(producto => producto._id === action.payload)
	    }
    case ELIMINAR_PRODUCTO:
	    return{
		...state,
		productos:state.productos.filter(producto => producto._id !== action.payload)
	    }
    case ACTUALIZAR_PRODUCTO:
	    return{
		...state,
		productos:state.productos.map(producto => producto._id === action.payload._id ? action.payload : producto ),
	    }
    default:
         return state;
    }


}

