import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/autenticacion/authContext";
import AlertaContext from "../../context/alertas/alertaContext";

import cacerola from '../../assets/img/cacerola.png'

const NuevaCuenta = (props) => {
  
  const alertaContext = useContext(AlertaContext);
  const {alerta ,mostrarAlerta} = alertaContext;

  const authContext = useContext(AuthContext)
  const { mensaje,autenticado,registrarUsuario} = authContext;

  //En caso de que se ayan registrado con exito o aya un error
    //
    useEffect(()=>{
	if(autenticado){
	    props.history.push('/gr')
	}

	if(mensaje){
	    mostrarAlerta(mensaje.msg,mensaje.ctg)
	}
    },[mensaje,autenticado,props.history])

  const [usuario, guardarUsuario] = useState({
    nombre:"",
    email: "",
    contraseña:"",
    confirmar:"",
    telefono:"",
    direccion:"",
  });
  const { nombre,email, contraseña,confirmar,telefono,direccion} = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando el usuario quiere iniciar sesion
  const onsubmit = (e) => {
    e.preventDefault();

    //Validar que no aya campos vacios

      if(nombre.trim() === '' || email.trim() === '' || contraseña.trim() === '' || confirmar.trim() === '' ){
      mostrarAlerta('Todos los campos son obligatorios' , 'alerta-error')
	return; 
      }
    //Validar que la constraseña sea al menos de 6 caracteres
      if(contraseña.length < 6){
         mostrarAlerta('La contraseña debe de contener por lo menos 6 caracteres','alerta-error')
	 return;
      }

      if(contraseña !== confirmar){
	  mostrarAlerta('Las contraseñas no coinciden','alerta-error');
	  return;
      }



    //Pasarlo al action
      registrarUsuario({
	  nombre,
	  email,
	  contraseña

      })
      //
  };

    
  return (
    <div className="h-screen bg-yellow-50">
      <div className="flex justify-center space-x-7  bg-yellow-50 pt-24">
        <div>
          <img
            src={cacerola}
            alt="no encontrado"
            className="max-w-xs my-20 "
          ></img>
        </div>

        <div className="flex-row container max-w-sm bg-yellow-50 my-10">
          <h1 className="text-center py-5 text-4xl text-gray-600">
            Registrarse
          </h1>

          <form className="block space-y-4" onSubmit={onsubmit}>
            {alerta ? 
	         (<div className={`alerta ${alerta.ctg}`}>{alerta.msg}</div>)	
		:
		null

	    }
            <div className="flex mx-2  space-x-4 shadow-abajo my-1 py-1">
              <label htmlFor="email" className="text-yellow-500">
                Restaurante
              </label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ej. Chifa Pollería Maná"
                value={nombre}
                onChange={onChange}
                className="bg-transparent outline-none  w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-4 shadow-abajo my-1 py-1">
              <label htmlFor="email" className="text-yellow-500">
                Dirección
              </label>

              <input
                type="text"
                id="direccion"
                name="direccion"
                placeholder="Jr Carlos Mariategui 231"
                value={direccion}
                onChange={onChange}
                className="bg-transparent outline-none  w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-12 shadow-abajo my-3 py-1">
              <label htmlFor="email" className="text-yellow-500">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="ejemplo@gmail.com"
                value={email}
                onChange={onChange}
                className="bg-transparent outline-none  w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
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

            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Confirmar
              </label>
              <input
                type="password"
                id="confirmar"
                name="confirmar"
                placeholder="Confirmar password"
                value={confirmar}
                onChange={onChange}
                className="outline-none bg-transparent w-screen "
              />
            </div>

            <div className="flex mx-2  space-x-5 shadow-abajo my-4 py-1">
              <label htmlFor="password" className="text-yellow-500">
                Telefono
              </label>

              <input
                type="text"
                id="telefono"
                name="telefono"
                placeholder=" 962 000 000"
                value={telefono}
                onChange={onChange}
                className="outline-none bg-transparent w-screen "
              />
            </div>

            <div className="text-center py-4">
              <input
                type="submit"
                className=" shadow-lg px-3 py-2 rounded-full text-white
                     transition duration-500 ease-in-out bg-yellow-500 hover:bg-yellow-400 transform hover:-translate-y-1 hover:scale-110 ..."
                value="Registrarse"
              />
            </div>
          </form>

          <Link
            to={"/login"}
            className="block text-center py-2 text-gray-400
             
             "
          >
            Iniciar Sesion
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NuevaCuenta;
