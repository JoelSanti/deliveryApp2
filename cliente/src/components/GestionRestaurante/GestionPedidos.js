import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import {useContext} from "react";
import generalContext from "../../context/general/generalContext";

const GestionPedidos = () => {
  
  const selectEstadoPedido = () =>{
    let selectEP=document.querySelector('.selectEstado');
    if (selectEP.value === "Enviado") {
      selectEP.style.backgroundColor = 'green'
    }
    if (selectEP.value === "Preparado") {
      selectEP.style.backgroundColor = '#FF8306'
    }
    if (selectEP.value === "Cancelado") {
      selectEP.style.backgroundColor = 'black'
    }
    if (selectEP.value === "Entregado") {
      selectEP.style.backgroundColor = 'red'
    }
   
  }

    const generalsContext = useContext(generalContext);
    const {sidebar} = generalsContext;
  return (
    <div className="flex h-full">
      <Sidebar />

      <div className="block w-full">
        <CabeceraGestionR />
        <div className="principal bg-secondary h-full "
      className={
	  sidebar ?
         'principal bg-secondary h-full ' 
	  :
	  'principal bg-secondary h-full activo '
      }
      >
          <div className="w-12/12 bg-danger m-6">
            <div className="flex  font-serif shadow-abajo2 py-3 px-4 text-sm">
              <h1>LISTA DE ÓRDENES</h1>
              
            </div>

            <div className="p-4 gap-y-4 text-xs">
              <div className="flex w-full gap-4  shadow-abajo2  bg-primary text-white p-2 font-bold">
                <div className="w-1/12 ">Id</div>
                <div className="w-2/12 ">Producto</div>
                <div className="w-2/12 ">Cliente</div>
                <div className="w-2/12 ">Direccion</div>
                <div className="w-1/12 ">Hora</div>
                <div className="w-1/12 ">Estado</div>
                <div className="w-1/12 ">Precio</div>
                <div className="w-1/12 ">Unidades</div>
                <div className="w-1/12 ">Total</div>
              </div>

              <div className="flex w-full gap-4 shadow-abajo2 p-2">
                <div className="w-1/12 ">1</div>
                <div className="w-2/12 ">Hamburguesas</div>
                <div className="w-2/12 ">Santiago Martinez Joel</div>
                <div className="w-2/12 ">Jr.Jose Carlos Mariategrui 552</div>
                <div className="w-1/12 ">18:30</div>
                <div className="w-1/12 ">
                  <select className="bg-yellow-300 selectEstado text-white" onChange={()=>selectEstadoPedido()}>
                    <option value="" className="hidden">Estado</option>
                    <option className="preparado bg-danger text-gray-500">Preparado</option>
                    <option className="enviado bg-danger text-gray-500">Enviado</option>
                    <option className="cancelado bg-danger text-gray-500">Cancelado</option>
                    <option className="entregado bg-danger text-gray-500">Entregado</option>
                  </select>
                </div>
                <div className="w-1/12 ">$ 4.5</div>
                <div className="w-1/12 ">2</div>
                <div className="w-1/12 ">$ 9</div>
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
};

export default GestionPedidos;
