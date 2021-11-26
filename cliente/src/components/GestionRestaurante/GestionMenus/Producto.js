import {useContext} from "react";
import { Link } from "react-router-dom";
import generalContext from "../../../context/general/generalContext";
const Producto = ({producto}) => {
   
    const {
	    nombre,	    
            precio,
	    imagen,
	    descripcion
   } = producto;

   
    const generalsContext = useContext(generalContext) 
    const {productoActual,eliminarProducto} = generalsContext;

  return (
    <div className="group relative bg-danger shadow-lg">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-40 lg:aspect-none">
        <img
          src={imagen}
          className="h-full w-full object-cover"
          alt="imagen no encontrada"
        />
      </div>
      <div className="mt-4 grid m-4 gap-y-4">
        <div className="text-sm flex justify-between">
          <span className="font-bold">{nombre}</span>
          <span className="text-naranja px-2 py-0.5 font-semibold">
            $ {precio}
          </span>
        </div>
        <div className="text-xs flex justify-between">
          <span className="font-light">Id:19</span>
          <span className="bg-green-500 text-white px-2 py-0.5">En stock</span>
        </div>

        <p className="text-xs text-gray-500 descripcionPedido text-justify">
          {descripcion}
        </p>
        <div className="flex justify-between">
          <button className="bg-primary text-white text-sm px-1.5 py-1 rounded-sm"
          onClick={() => eliminarProducto(producto._id)}
      >
            Eliminar
          </button>
          <Link to={"/dp"}>
            {" "}
            <button
              className="bg-black text-white text-sm px-1.5 py-1 rounded-sm"
              onClick={() => productoActual(producto._id)}
            >
              Ver mas
            </button>
          </Link>
        </div>
      </div>
    </div>
  );}

export default Producto; 
