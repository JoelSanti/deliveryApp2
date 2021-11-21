import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import {useState} from "react/cjs/react.development";
import {useContext} from "react";
import generalContext from "../../context/general/generalContext";

const AgregarProducto = () => {
    const generalsContext = useContext(generalContext) 
    const {agregarProducto} = generalsContext;

    const [producto , guardarProducto ] = useState(
	{
	    nombre:'',
	    categoria:'',
	    cantidadxdia:'',
	    precio:'',
	    imagen:'',
	    descripcion:''

	}
    )

    const {nombre,categoria,cantidadxdia,precio,imagen,descripcion} = producto;

	const onchangeProducto = e => {
	    guardarProducto({
		...producto,
		[e.target.name]:e.target.value
	    })
	}
    const onSubmitProductos = e =>{
	e.preventDefault();
	//validar el proyecto
	if(nombre === ''){
          return;
	} 
	//agregar el state
	agregarProducto(producto)
	//reiniciar el form 
    }
  return (
    <div className="flex h-full bg-secondary">
      <Sidebar />

      <div className="block w-full h-screen">
        <CabeceraGestionR />

        <div className="principal bg-secondary ">
          <div className="grid m-6 gap-y-6 ">
            <div className="bg-danger p-5">
              <h1 className="font-semibold text-lg pb-2 mb-5 shadow-abajo2">
                AGREGAR PRODUCTO
              </h1>
            </div>

            <form className="flex gap-x-6"
             onSubmit={onSubmitProductos}
      >
              {/*Este es el lado izquierdo del form*/}

              <div className="bg-danger w-1/2  ">
                <div className="grid gap-y-2">
                  <div className="shadow-abajo2 p-6 ">
                    <h1 className="font-semibold  text-lg">
                      Informacion del producto
                    </h1>
                  </div>

                  <div className="grid gap-y-5 p-6">
                    <div className="grid gap-y-4">
                      <span className=" block">Nombre del Producto:</span>
                      <input
                        type="text"
                        className="text-gray-500 w-full border-2"
                        value={nombre}
                        name="nombre"
                        onChange={onchangeProducto}
                      />
                    </div>

                    <div className="grid gap-y-4">
                      <span className=" block">Categoria:</span>
                      <select
                        className="text-gray-500 w-full border-2"
                        name="categoria"
                        value={categoria}
                        onChange={onchangeProducto}
                      >
                        <option value="comida rapida">xxxxxxxxxxxxxx</option>
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
                          value={cantidadxdia}
                          onChange={onchangeProducto}
                        />
                      </div>

                      <div className="grid gap-y-4 w-1/2">
                        <span className=" block">Precio:</span>
                        <input
                          className="text-gray-500 w-full border-2"
                          name="precio"
                          value={precio}
                          onChange={onchangeProducto}
                        />
                      </div>
                    </div>

                    <div className="grid gap-y-4">
                      <span className=" block">Imagen del producto:</span>
                      <label
                        htmlFor="imagen"
                        className="border-2 flex justify-end"
                      >
                        <h1 className="p-4 bg-caja">Buscar</h1>
                      </label>
                      <input
                        className="text-gray-500 w-full border-2 hidden"
                        type="file"
                        id="imagen"
                        name="imagen"
                        value={imagen}
                        onChange={onchangeProducto}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/*Este es el lado derecho del form*/}

              <div className="bg-danger w-1/2 p-6">
                <div>
                  <div className="bg-gray-500  h-80 ">
                    <img
                      className="mix-blend-overlay w-full h-full object-cover"
                      src="https://i.pinimg.com/564x/41/67/7f/41677f6c5426da1c640648bc88282f99.jpg"
                      alt="imagen no encontrada"
                    ></img>

                    <h1 className="relative -top-10 text-center text-white font-semibold text-xl">
                      TALLARINES CON MARISCOS
                    </h1>
                  </div>
                </div>
                <textarea
                  className="shadow-md text-gray-500  p-4 my-4 w-full h-40 "
                  name="descripcion"
                  value={descripcion}
                  onChange={onchangeProducto}
                >
                  Descripcion
                </textarea>

                <div className="flex justify-between mt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-5 py-2 text-center rounded-md"
                  >
                    Guardar
                  </button>
                  <button
                    type="submit"
                    className="bg-naranja text-white px-5 py-2 text-center rounded-md"
                  >
                    Guardar y Agregar
                  </button>
                </div>
              </div>
              {/*   Aqui termina la wea */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarProducto;
