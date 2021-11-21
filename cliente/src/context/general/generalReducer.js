import { AGREGAR_PRODUCTO, OBTENER_PRODUCTOS, SWITCH_SIDEBAR, VALIDAR_FORMPRODUCTO } from "../../types";

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
    default:
         return state;
    }


}

