import React, { Fragment, useContext } from "react";
import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import { Link } from "react-router-dom";
import ListaProductos from "./GestionMenus/ListaProductos";
import generalContext from "../../context/general/generalContext";

const GestionMenus = () => {

    const generalsContext = useContext(generalContext);
    const {sidebar} = generalsContext;

  return (
    <Fragment>
      <div className="flex h-full">
        <Sidebar />

        <div className="block w-full ">
          <CabeceraGestionR />

          <div 
      className={
	  sidebar ?
        'principal bg-secondary h-screen'
	  :
	  'principal bg-secondary h-screen activo'
      }
      >

            <div className="flex justify-between font-serif shadow-abajo2 py-4 mt-4 mx-5 text-sm bg-danger">
              <h1 className="ml-4">MENÚ</h1>
              <Link to={"/ap"}>
                {" "}
                <button className="bg-primary mr-4 text-white px-2 py-1 rounded-sm hover:bg-yellow-700 duration-500">
                  Agregar Producto
                </button>
              </Link>
            </div>
            {/*aqui para la lista de productos */}
            <ListaProductos  />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GestionMenus;
