// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons'

import {useContext} from 'react';
import { Link } from 'react-router-dom';
import {useState} from "react/cjs/react.development";
import AuthContext from '../../context/autenticacion/authContext';
const CabeceraGestionR = () => {
    
const authContext = useContext(AuthContext)
const {cerrarSesion} = authContext; 

    const [optPerfil , showOpePerfil] = useState(true)
    
    const switchGR = ()=>{
	showOpePerfil(!optPerfil)
    }

      return (
    <div className=" bg-danger h-16 flex pr-10 justify-end cabeceraG ">
      <div className="my-auto">
        <nav
          onClick={() => switchGR()}
          className="border-solid hover:border-yellow-300"
        >
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </nav>

        <div
          className={
            optPerfil
              ? "z-50 optPerfil hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none "
              : "z-50 optPerfil origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          }
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <Link
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-yellow-300"
              role="menuitem"
              id="menu-item-0"
              to={"/perfil"}
            >
              Perfil
            </Link>

              <button
                className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-yellow-300"
                role="menuitem"
                id="menu-item-3"
	        onClick={() => cerrarSesion()}
              >
                Salir
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabeceraGestionR;
