import React,{useContext, useState,useEffect} from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../../context/autenticacion/authContext';
import AlertaContext from '../../context/alertas/alertaContext';

import comida from '../../assets/img/comida1.png'

const Login = (props) => {

  const alertaContext = useContext(AlertaContext);
  const {alerta ,mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext)
  const { mensaje,autenticado,iniciarSesion} = authContext;

      useEffect(()=>{
	if(autenticado){
	    props.history.push('/gr')
	}

	if(mensaje){
	    mostrarAlerta(mensaje.msg,mensaje.ctg)
	}
    },[mensaje,autenticado,props.history])


     const [usuario,guardarUsuario]=useState({
          email:'',
          contraseña:''
      })
      const {email,contraseña} = usuario;
  
      const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]:e.target.value
        })
      }
  
      //Cuando el usuario quiere iniciar sesion 
      const onsubmit = e=>{
	  e.preventDefault();
  
	  //Validar que no aya campos vacion 

	  if(email.trim() === '' || contraseña.trim() === ''){
	      mostrarAlerta('Todos los campos son obligatorios','alerta-error')
	      
	  }
  
	  //Pasarlo al action 
	  //
	  iniciarSesion({email,contraseña});
      }


    return ( 
         
<div className="h-screen bg-yellow-50"> 



          <div className="flex justify-center  bg-yellow-50">
     
          <div className="flex-row container max-w-sm bg-yellow-50 my-1">
             <div className="justify-center flex">
                 
                 <img src={comida}
                 className=' w-56 lg:w-96  justify-center'
	         alt="imagen no encontrada"
                 ></img>
             </div>
             
             <h1 className="text-center py-5 text-4xl text-gray-600">Iniciar Sesion</h1>
     
             <form
             className="block space-y-4"
	     onSubmit={onsubmit}
             >
            {alerta ? 
	         (<div className={`alerta ${alerta.ctg}`}>{alerta.msg}</div>)	
		:
		null

	    }
                 <div className="flex mx-2  space-x-12 shadow-abajo my-3 py-1">
                     <label htmlFor="email"
                     className="text-yellow-500"
                     >
                         Email
                     </label>

                     <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="tu email"
                      value={email}
                      onChange={onChange}
                      className="bg-transparent outline-none  w-screen "
                     />

                 </div>
     
                 <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
                     <label htmlFor="password"
                     className="text-yellow-500"
                     >
                         Password
                     </label>
                     <input
	type="password"

	id="contraseña"

	name="contraseña"
                      placeholder="tu password"
                      value={contraseña}
                      onChange={onChange}
                      className="outline-none bg-transparent w-screen "
                     />

                 </div>
     
                 <div className="text-center py-4">
                     <input type="submit" 
                     className=" shadow-lg px-3 py-2 rounded-full text-white
                     transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-110 ..."
                      value="Iniciar sesion"
                     />
                 </div>
     
             </form>

             <Link to={'/nueva-cuenta'} 
             className="block text-center py-2 text-gray-400
             
             ">
                 Aún no tienes una cuenta? <label className="text-yellow-400">Consíguela ahora</label>
             </Link>
          </div>
      </div>
       
</div>   
     );
}
 
export default Login;
