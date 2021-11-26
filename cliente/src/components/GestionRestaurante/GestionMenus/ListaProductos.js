import {useContext, useEffect} from "react";
import generalContext from "../../../context/general/generalContext";
import Producto from "./Producto";
const ListaProductos = () => {
    
    const generalsContext = useContext(generalContext)
    const {productos,obtenerProductos} = generalsContext;


    useEffect(()=>{

    obtenerProductos()

    }, [productos]);


    if(productos.length === 0) return null;

    console.log(productos)
    return (
      <div className="p-5  grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/*------------------ Aqui para las tarjetas de comida ---------------------------------------*/}
        {productos.map((producto) => (
          <Producto

	    key={producto._id}
	    producto = {producto}/>
        ))}
        {/*------------------ ---------------------------------------*/}
      </div>
    );

}

export default ListaProductos;
