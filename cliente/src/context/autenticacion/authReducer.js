import {CERRAR_CESION, LOGIN_ERROR, LOGIN_EXITOSO, OBTENER_USUARIO, REGISTRO_ERROR, REGISTRO_EXITOSO} from "../../types";

export default (state,action) => {
    switch(action.type){
    
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
	    localStorage.setItem('token', action.payload.token);
	return{
		...state,
		autenticado:true,
		mensaje:null,
	        cargando:false
         };
	
    case CERRAR_CESION:
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
	    localStorage.removeItem('token')
	    return{
		...state,
		token:null,
		usuario:null,
		autenticado:null,
		mensaje: action.payload,
		cargando:false
	    };

	    
    case OBTENER_USUARIO:
	    return{
		...state,
		usuario:action.payload,
		autenticado:true,
		cargando:false
	    };
	    
    default:
         return state;
}
}
