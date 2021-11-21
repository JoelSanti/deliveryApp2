

import {useReducer} from "react";
import AlertaReducer from "./alertaReducer";
import AlertaContext from "./alertaContext";
import {MOSTRAR_ALERTA, OCULTAR_ALERTA} from "../../types";

const AlertaState = props => {

    const initialState = {
	alerta:null
    }

    const [ state,dispach ] = useReducer(AlertaReducer, initialState)

    //Crear las funciones 

    const mostrarAlerta = (msg, ctg) =>{
	dispach({
	    type:MOSTRAR_ALERTA,
	    payload:{
		msg,
		ctg
	    }
	});

	setTimeout(()=>{
	    dispach({
		type:OCULTAR_ALERTA,
	    })},5000);


    }

    return(
    <AlertaContext.Provider
	value={{
	    alerta:state.alerta,

	    mostrarAlerta

	}}
	>
	{props.children}
    </AlertaContext.Provider>
    )

}

export default AlertaState;
