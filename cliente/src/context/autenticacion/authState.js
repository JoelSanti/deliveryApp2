
import {useReducer} from "react";
import clienteAxios from "../../config/axios";
import {LOGIN_ERROR, REGISTRO_ERROR, REGISTRO_EXITOSO , OBTENER_USUARIO, LOGIN_EXITOSO, CERRAR_CESION} from "../../types";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import tokenAuth from '../../config/tokenAuth'

const AuthState = props => {

    const initialState = {
	token: localStorage.getItem('token'),
	autenticado:null,
	usuario:null,
	mensaje:null,
	cargando:true
    }

    const [ state,dispach ] = useReducer(AuthReducer, initialState)

    //Crear las funciones 

    const registrarUsuario = async datos => {
	try{

	    const respuesta = await clienteAxios.post('/api/restaurantes/registro',datos)
	    console.log(respuesta)

	    dispach({
		type:REGISTRO_EXITOSO,
		payload:respuesta.data
	    })

	    //Obtener el usuario

	    usuarioAutenticado();

	}catch(e)
	{
	    const alerta = {
		msg:e.response.data.msg,
                ctg:'alerta-error'
	    }
	    dispach({
		type:REGISTRO_ERROR,
		payload:alerta
	    })
	}
    }

    //Retornar el usuario autenticado
    //
    const usuarioAutenticado = async () => {
	const token = localStorage.getItem('token')
	if(token){
	    //funcion para enviar el token por headers
	    tokenAuth(token)
	}
	    try{
		const respuesta = await clienteAxios.get('/api/restaurantes/login')
		dispach({
		    type:OBTENER_USUARIO,
		    payload:respuesta.data.usuario
		})

	    }catch(e)
	    {
		dispach({
		    type:LOGIN_ERROR
		})

	    }

	}

    //Cuando el usuarui inicia sesion 
    
    const iniciarSesion = async datos =>{
	try{

	    const respuesta  = await clienteAxios.post('/api/restaurantes/login',datos)
	   
	    dispach({
		type:LOGIN_EXITOSO,
		payload:respuesta.data
	    })

	    //Obtener usuario
	    usuarioAutenticado();
	}catch(e){
	    const alerta = {
		msg:e.response.data.msg,
                ctg:'alerta-error'
	    }
		console.log(e.response.data.msg)
	    dispach({
		type:LOGIN_ERROR,
		payload:alerta
	    })

	}
    }

    //Cerrar la cesion del usuario 
    //
    const cerrarSesion = ()=>{
	dispach({
	    type:CERRAR_CESION
	}) 
    }
    

    return (
      <AuthContext.Provider
        value={{
          token: state.token,
          autenticado: state.autenticado,
          usuario: state.usuario,
          mensaje: state.mensaje,
	  cargando:state.cargando,

          registrarUsuario,
          iniciarSesion,
          usuarioAutenticado,
	  cerrarSesion
        }}
      >
        {props.children}
      </AuthContext.Provider>
    );

}

export default AuthState;
