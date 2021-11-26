
import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import generalContext from "../../context/general/generalContext";
import {useContext, useEffect, useState} from "react";

const DetallesProducto = (props) => {

    const generalsContext = useContext(generalContext) 
    const {producto,eliminarProducto,actualizarProducto,productoActual} = generalsContext;
 
    const [productoSeleccionado] = producto;
    const {nombre,categoria,cantidadxdia,precio,imagen,descripcion} = productoSeleccionado

    const [modal,switchMondal] = useState(false) 

    const [modal2,switchMondal2] = useState(false) 

    const eliminarProductoSeleccionado = () => {
          eliminarProducto(productoSeleccionado._id)
	  props.history.push('/gm')
    }



    const [productom,actualizarProductom]=useState(
     productoSeleccionado
    )
 

    console.log(productom)
      const productoOnchange = e => {
	actualizarProductom({
	    ...productom,
	    [e.target.name]:e.target.value
	})
      }
  


    const modificarProducto = e => {
	  e.preventDefault();
          actualizarProducto(productom);
	  switchMondal(false)
	  switchMondal2(false)
    }
    
    useEffect(()=>{
	if(producto){
	  productoActual(productom._id)
	    }
    },[producto])

    return (
      <div className="flex h-full bg-secondary">
        <Sidebar />

        <div className="block w-full h-screen">
          <CabeceraGestionR />
          <div className="principal bg-secondary ">
            <div className="grid m-6 gap-y-6 ">
              <div className="bg-danger p-5">
                <h1 className="font-semibold text-lg pb-2 mb-5 shadow-abajo2">
                  Detalles del Producto
                </h1>
                <div className="bg-gray-500  h-80 ">
                  <img
                    className="mix-blend-overlay w-full h-full object-cover"
                    src="https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg"
                    alt="imagen no encontrada"
                  ></img>

                  <h1 className="relative -top-10 text-center text-white font-semibold text-xl">
                    TALLARINES CON MARISCOS
                  </h1>
                </div>
              </div>

              <div className="flex gap-x-6">
                <div className="bg-danger w-1/2 p-6 grid gap-y-5">
                  <div className="grid gap-y-4">
                    <div className=" shadow-abajo2 pb-4">
                      <h1 className="font-semibold text-lg my-auto">
                        Informacion del producto
                      </h1>
                    </div>

                    <div className="flex justify-between shadow-abajo2">
                      <span className="font-semibold">
                        Nombre del Producto:
                      </span>
                      <span className="text-gray-500">{nombre}</span>
                    </div>

                    <div className="flex justify-between shadow-abajo2">
                      <span className="font-semibold">Cantidad por día:</span>
                      <span className="text-gray-500">{cantidadxdia}</span>
                    </div>

                    <div className="flex justify-between shadow-abajo2">
                      <span className="font-semibold">Categoria:</span>
                      <span className="text-gray-500">{categoria}</span>
                    </div>

                    <div className="flex justify-between shadow-abajo2">
                      <span className="font-semibold">
                        Precio del producto:
                      </span>
                      <span className="text-gray-500">{precio}</span>
                    </div>

                    <div className="flex justify-between mt-4">
                      <button
                        className="bg-naranja text-white px-5 py-2 text-center rounded-md"
                        onClick={() => switchMondal2(true)}
                      >
                        Editar{" "}
                      </button>
                      <button
                        className="bg-black text-white px-5 py-2 text-center rounded-md"
                        onClick={() => eliminarProductoSeleccionado()}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-danger w-1/2 p-6">
                  <div>
                    <div className="flex justify-between ">
                      <h1 className="my-auto text-lg font-semibold">
                        Descripcion del producto
                      </h1>
                      <button
                        className="text-naranja my-auto "
                        onClick={() => switchMondal(true)}
                      >
                        Editar <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </div>

                    <p className="text-gray-500  py-4">{descripcion}</p>
                  </div>
                  <div className="flex text-center py-2">
                    <div className="w-1/2 block shadow-izquierdo">
                      <span className="block text-2xl font-semibold">
                        18000
                      </span>
                      <span>Ventas</span>
                    </div>

                    <div className="w-1/2 ">
                      <span className="block text-2xl font-semibold">
                        $ 1800000
                      </span>
                      <span>Ganacias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* *************************************Aqui las ventanas modales************************ */}

        {/* Modal 1----------------------------------------------------------------------------------- */}
        <div
          className={
            modal
              ? "z-40 fixed w-screen justify-center h-screen flex"
              : "z-40 fixed w-screen justify-center h-screen hidden"
          }
        >
          <div className="bg-gray-500 opacity-25 w-screen h-screen"></div>

          <form className="z-50 fixed bg-white w-1/2 h-80 mt-52 p-6">
            <div className="flex justify-between">
              <h1>Descripcion del producto</h1>{" "}
              <button
                type="button"
                className=" text-naranja text-xl font-semibold"
                onClick={() => switchMondal(false)}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>

            <textarea
              className="border-2 border-gray-200 bg-danger shadow-md w-full h-40 mt-6"
              placeholder={productom.descripcion}
              name="descripcion"
              onChange={productoOnchange}
            />

            <div className="flex justify-end gap-x-4 mt-4">
              <button
                type="button"
                className="px-4 py-2 rounded-md bg-black text-white font-semibold"
                onClick={() => switchMondal(false)}
              >
                Salir
              </button>
              <button
                type="submit"
                className="px-4 py-2  rounded-md bg-naranja text-white  font-semibold"
                onClick={modificarProducto}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
        {/* Modal 2----------------------------------------------------------------------------------- */}

        <div
          className={
            modal2
              ? "z-40 fixed w-screen justify-center  h-screen ModalInfoProducto flex"
              : "z-40 fixed w-screen justify-center  h-screen ModalInfoProducto hidden"
          }
        >
          <div className="bg-gray-500 opacity-25 w-screen h-screen"></div>

          <form className="z-50 fixed bg-danger w-1/2 h-90 mt-16 p-6">
            <div className="flex justify-between">
              <h1>Informacion del producto</h1>{" "}
              <button
	        type='button'
                className=" text-naranja text-xl font-semibold"
                onClick={() => switchMondal2()}
              >
                <FontAwesomeIcon icon={faTimesCircle} />
              </button>
            </div>

            <div className="grid gap-y-5 p-6">
              <div className="grid gap-y-4">
                <span className=" block">Nombre del Producto:</span>
                <input className="text-gray-500 w-full border-2" />
              </div>

              <div className="grid gap-y-4">
                <span className=" block">Categoria:</span>
                <select className="text-gray-500 w-full border-2">
                  <option>xxxxxxxxxxxxxx</option>
                  <option>xxxxxxxxxxxxxx</option>
                  <option>xxxxxxxxxxxxxx</option>
                </select>
              </div>
              <div className="flex gap-x-6">
                <div className="grid gap-y-4 w-1/2">
                  <span className=" block">Cantidad por día:</span>
                  <input
                    className="text-gray-500 w-full border-2"
                    name="cantidadxdia"
                    placeholder={cantidadxdia}
	            onChange={productoOnchange}
                  />
                </div>

                <div className="grid gap-y-4 w-1/2">
                  <span className=" block">Precio:</span>
                  <input
                    className="text-gray-500 w-full border-2"
	            name='precio'
                    placeholder={precio}
	            onChange={productoOnchange}
                  />
                </div>
              </div>

              <div className="grid gap-y-4">
                <span className=" block">Imagen del producto:</span>
                <label htmlFor="imagen" className="border-2 flex justify-end">
                  <h1 className="p-4 bg-caja">Buscar</h1>
                </label>
                <input
                  className="text-gray-500 w-full border-2 hidden"
                  type="file"
                  id="imagen"
                />
              </div>

            </div>

            <div className="flex justify-end gap-x-4 mt-4">
              <button
	        type='button'
                className="px-4 py-2 rounded-md bg-black text-white font-semibold"
                onClick={() => switchMondal2(false)}
              >
                Salir
              </button>
              <button
                className="px-4 py-2  rounded-md bg-naranja text-white  font-semibold"
                onClick={modificarProducto}
              >
                Guardar
              </button>
            </div>

          </form>
        </div>


      </div>
    );
}
 
export default DetallesProducto;
