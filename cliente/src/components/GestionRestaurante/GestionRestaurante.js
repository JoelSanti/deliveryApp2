import React, { Fragment, useContext, useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import AuthContext from '../../context/autenticacion/authContext';
import generalContext from "../../context/general/generalContext";


const GestionRestaurante = () => {

  const selectEstadoPedido = () => {
    let selectEP = document.querySelector(".selectEstado");
    if (selectEP.value.toString() === "Enviado") {
      selectEP.style.backgroundColor = "green";
    }
    if (selectEP.value.toString() === "Preparado") {
      selectEP.style.backgroundColor = "#FF8306";
    }
    if (selectEP.value.toString() === "Cancelado") {
      selectEP.style.backgroundColor = "black";
    }
    if (selectEP.value.toString() === "Entregado") {
      selectEP.style.backgroundColor = "red";
    }
  };

//extraer la informacion de autenticacion
const authContext = useContext(AuthContext)
const {usuario,usuarioAutenticado} = authContext; 

    useEffect(()=>{
      usuarioAutenticado()
    },[])

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
         'principal bg-secondary h-full ' 
	  :
	  'principal bg-secondary h-full activo '
      }

      >

            <div className="p-4 ">
             {usuario ?  <h1 className="text-gray-500 text-2xl font-serif">
		 Bienvenido a { usuario.nombre }</h1> : null	}

              <div className="flex gap-5 mt-5">
                <div className="w-4/12 bg-danger shadow-md">
                  <div className="flex justify-between font-serif shadow-abajo2 py-3 px-4 text-sm">
                    <h1>Órdenes enviadas</h1>
                    <button className="bg-primary text-white px-1.5 py-1 rounded-sm hover:bg-yellow-700 duration-500">
                      Ver más
                    </button>
                  </div>

                  <div className="p-4 gap-y-4 text-xs">
                    <div className="flex w-full gap-4  shadow-abajo2 font-semibold">
                      <div className="w-3/6 ">Comida</div>

                      <div className="w-1/6 text-center">Precio</div>

                      <div className="w-1/6 text-center">Unidades</div>

                      <div className="w-1/6 text-center">Total</div>
                    </div>
                    <div className="flex w-full gap-4 shadow-abajo2">
                      <div className="w-3/6 ">xx</div>

                      <div className="w-1/6 text-center">xx</div>

                      <div className="w-1/6 text-center">xx</div>

                      <div className="w-1/6 text-center">xx</div>
                    </div>
                  </div>
                </div>

                <div className="w-8/12 bg-danger shadow-md">
                  <div className="flex  font-serif shadow-abajo2 py-3 px-4 text-sm justify-between">
                    <h1>LISTA DE ÓRDENES</h1>
                    <button className="bg-primary text-white px-1.5 py-1 rounded-sm hover:bg-yellow-700 duration-500">
                      Ver más
                    </button>
                  </div>

                  <div className="p-4 gap-y-4 text-xs">
                    {/* Cabecera */}

                    <div className="flex w-full gap-4  shadow-abajo2  bg-primary text-white p-2 font-bold">
                      <div className="w-2/12 ">Producto</div>
                      <div className="w-2/12 ">Cliente</div>
                      <div className="w-2/12 ">Direccion</div>

                      <div className="w-2/12 ">Estado</div>
                      <div className="w-1/12 ">Hora</div>
                      <div className="w-1/12 ">Precio</div>
                      <div className="w-1/12 ">Unidades</div>
                      <div className="w-1/12 ">Total</div>
                    </div>

                    {/* --------------------Para colocar pedidos------------------------------ */}

                    <div className="flex w-full gap-4 shadow-abajo2 p-2">
                      <div className="w-2/12 ">Estado</div>
                      <div className="w-1/12 ">Hora</div>
                      <div className="w-1/12 ">Precio</div>
                      <div className="w-1/12 ">Unidades</div>
                      <div className="w-1/12 ">Total</div>
                    </div>

                    {/* --------------------Para colocar pedidos------------------------------ */}

                    <div className="flex w-full gap-4 shadow-abajo2 p-2">
                      <div className="w-2/12 ">Hamburguesas</div>
                      <div className="w-2/12 ">Santiago Martinez Joel</div>
                      <div className="w-2/12 ">
                        Jr.Jose Carlos Mariategrui 552
                      </div>
                      <div className="w-2/12 ">
                        <select
                          className="bg-yellow-300 selectEstado text-white"
                          onChange={() => selectEstadoPedido()}
                        >
                          <option value="" className="hidden">
                            Pendiente
                          </option>
                          <option className="preparado bg-danger text-gray-500">
                            Preparado
                          </option>
                          <option className="enviado bg-danger text-gray-500">
                            Enviado
                          </option>
                          <option className="cancelado bg-danger text-gray-500">
                            Cancelado
                          </option>
                          <option className="entregado bg-danger text-gray-500">
                            Entregado
                          </option>
                        </select>
                      </div>
                      <div className="w-1/12 ">18:30</div>

                      <div className="w-1/12 ">$ 4.5</div>
                      <div className="w-1/12 ">2</div>
                      <div className="w-1/12 ">$ 9</div>
                    </div>

                    <div className="flex w-full gap-4 shadow-abajo2 p-2">
                      <div className="w-2/12 ">Hamburguesas</div>
                      <div className="w-2/12 ">Santiago Martinez Joel</div>
                      <div className="w-2/12 ">
                        Jr.Jose Carlos Mariategrui 552
                      </div>
                      <div className="w-2/12 ">
                        <select
                          className="bg-yellow-300 selectEstado text-white"
                          onChange={() => selectEstadoPedido()}
                        >
                          <option value="" className="hidden">
                            Pendiente
                          </option>
                          <option className="preparado bg-danger text-gray-500">
                            Preparado
                          </option>
                          <option className="enviado bg-danger text-gray-500">
                            Enviado
                          </option>
                          <option className="cancelado bg-danger text-gray-500">
                            Cancelado
                          </option>
                          <option className="entregado bg-danger text-gray-500">
                            Entregado
                          </option>
                        </select>
                      </div>
                      <div className="w-1/12 ">18:30</div>

                      <div className="w-1/12 ">$ 4.5</div>
                      <div className="w-1/12 ">2</div>
                      <div className="w-1/12 ">$ 9</div>
                    </div>

                    <div className="flex w-full gap-4 shadow-abajo2 p-2">
                      <div className="w-2/12 ">Hamburguesas</div>
                      <div className="w-2/12 ">Santiago Martinez Joel</div>
                      <div className="w-2/12 ">
                        Jr.Jose Carlos Mariategrui 552
                      </div>
                      <div className="w-2/12 ">
                        <select
                          className="bg-yellow-300 selectEstado text-white"
                          onChange={() => selectEstadoPedido()}
                        >
                          <option value="" className="hidden">
                            Pendiente
                          </option>
                          <option className="preparado bg-danger text-gray-500">
                            Preparado
                          </option>
                          <option className="enviado bg-danger text-gray-500">
                            Enviado
                          </option>
                          <option className="cancelado bg-danger text-gray-500">
                            Cancelado
                          </option>
                          <option className="entregado bg-danger text-gray-500">
                            Entregado
                          </option>
                        </select>
                      </div>
                      <div className="w-1/12 ">18:30</div>

                      <div className="w-1/12 ">$ 4.5</div>
                      <div className="w-1/12 ">2</div>
                      <div className="w-1/12 ">$ 9</div>
                    </div>

                    <div className="flex w-full gap-4 shadow-abajo2 p-2">
                      <div className="w-2/12 ">Hamburguesas</div>
                      <div className="w-2/12 ">Santiago Martinez Joel</div>
                      <div className="w-2/12 ">
                        Jr.Jose Carlos Mariategrui 552
                      </div>
                      <div className="w-2/12 ">
                        <select
                          className="bg-yellow-300 selectEstado text-white"
                          onChange={() => selectEstadoPedido()}
                        >
                          <option value="" className="hidden">
                            Pendiente
                          </option>
                          <option className="preparado bg-danger text-gray-500">
                            Preparado
                          </option>
                          <option className="enviado bg-danger text-gray-500">
                            Enviado
                          </option>
                          <option className="cancelado bg-danger text-gray-500">
                            Cancelado
                          </option>
                          <option className="entregado bg-danger text-gray-500">
                            Entregado
                          </option>
                        </select>
                      </div>
                      <div className="w-1/12 ">18:30</div>

                      <div className="w-1/12 ">$ 4.5</div>
                      <div className="w-1/12 ">2</div>
                      <div className="w-1/12 ">$ 9</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-danger shadow-md mt-5">
                <div className="flex justify-between font-serif shadow-abajo2 py-3 px-4 text-sm">
                  <h1>Lo más vendido</h1>
                  <button className="bg-primary text-white px-1.5 py-1 rounded-sm hover:bg-yellow-700 duration-500">
                    Ver más
                  </button>
                </div>

                <div className="p-6  grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {/* Desde aquí    */}
                  <div className="group relative bg-danger shadow-lg">
                    <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-40 lg:aspect-none">
                      <img
                        src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
                        className="h-full w-full object-cover"
                        alt="imagen no encontrada"
                      />
                    </div>
                    <div className="mt-4 grid m-4 gap-y-4">
                      <div className="text-sm flex justify-between">
                        <span className="font-bold">Hamburguesas</span>
                        <span className="text-naranja px-2 py-0.5 font-semibold">
                          $ 4.69
                        </span>
                      </div>
                      <div className="text-xs flex justify-between">
                        <span className="font-light">Ordenes:116</span>
                        <span className="bg-green-500 text-white px-2 py-0.5">
                          En stock
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Aqui la primera */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GestionRestaurante;
