import { Route,Redirect } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";
import { useContext, useEffect,useState } from "react";


const RutaPrivada = ({component: Component,...props}) => {
    const authContext = useContext(AuthContext)
    const {autenticado, cargando, usuarioAutenticado} = authContext;

    useEffect(()=>{
	usuarioAutenticado();
    },[])

    return(
	
	<Route {...props} render={ props => !autenticado && !cargando ? (<Redirect to='/' />) : 
	(<Component {...props}/>) }   
	/>
          

    );
} 

export default RutaPrivada;
