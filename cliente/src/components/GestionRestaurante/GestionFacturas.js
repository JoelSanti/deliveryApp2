import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import {  faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {useContext} from "react";
import generalContext from "../../context/general/generalContext";

const GestionFacturas = () => {

    

    const generalsContext = useContext(generalContext);
    const {sidebar} = generalsContext;

    return ( 
        <div className="flex h-full">
      <Sidebar />

      <div className="block w-full">
        <CabeceraGestionR />
        <div 
      className={
	  sidebar ?
        'principal bg-secondary h-full'
	  :
	  'principal bg-secondary h-full activo'
      }


	>
          <div className="w-12/12 bg-danger m-6">
            <div className="flex  font-serif shadow-abajo2 py-3 px-4 text-sm">
              <h1>LISTA DE FACTURAS</h1>
              
            </div>

            <div className="p-4 gap-y-4 text-xs">
              <div className="flex w-full gap-4  shadow-abajo2  bg-primary text-white p-2 font-bold">
                <div className="w-1/12 ">Id</div>
                <div className="w-2/12 ">Producto</div>
                <div className="w-2/12 ">Cliente</div>
                <div className="w-2/12 ">Direccion</div>
                <div className="w-1/12 ">Fecha</div>
                <div className="w-1/12 ">Precio</div>
                <div className="w-1/12 ">Unidades</div>
                <div className="w-1/12 ">Total</div> 
                <div className="w-1/12 ">Enviar Factura</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-1/12 ">1</div>
                <div className="w-2/12 ">Hamburguesas</div>
                <div className="w-2/12 ">Santiago Martinez Joel</div>
                <div className="w-2/12 ">Jr.Jose Carlos Mariategrui 552</div>
                <div className="w-1/12 ">15/10/2021</div>
                <div className="w-1/12 ">
                  $ 50
                </div>
                <div className="w-1/12 ">$ 4.5</div>
                <div className="w-1/12 ">2</div>
                <div className="w-1/12 flex gap-4 text-center pl-4">
                    <button> <FontAwesomeIcon className="text-green-400 text-xl" icon={faTelegramPlane}/></button>
                    
                    <button> <FontAwesomeIcon className="text-red-400 text-xl" icon={faTrashAlt}/></button>
                    
                </div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-3/6 ">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>

                <div className="w-1/6 text-center">xx</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default GestionFacturas;
