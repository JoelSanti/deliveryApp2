import {useReducer} from "react";
import generalContext from "./generalContext";
import generalReducer from "./generalReducer";
import { SWITCH_SIDEBAR , OBTENER_PRODUCTOS, AGREGAR_PRODUCTO, VALIDAR_FORMPRODUCTO } from "../../types";
import { v4 as uuidv4 } from 'uuid';

const GeneralState = props => { 


const productos = [
      {
	id:1,
        nombre: "Hamburguesas",
        categoria: "Comida rápida",
        cantidadxdia: "20",
        precio: "5",
        imagen:
          "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
        descripcion:
          "Lorem dasdasdasdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssipsum jasjdjajsdhaksjhdkahskdjhasjhdkhaksjdhjahsjdhaksjhdkahskjdhkjahskdhkjashd",
      },
      {
	id:2,
        nombre: "Hamburguesas",
        categoria: "Comida rápida",
        cantidadxdia: "20",
        precio: "5",
        imagen:
          "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
        descripcion:
          "Lorem ipsum jasjdjajsdhaksjhdkahskdjhasjhdkhaksjdhjahsjdhaksjhdkahskjdhkjahskdhkjashd",
      },
      {
	id:3,
        nombre: "Hamburguesas",
        categoria: "Comida rápida",
        cantidadxdia: "20",
        precio: "5",
        imagen:
          "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
        descripcion:
          "Lorem ipsum jasjdjajsdhaksjhdkahskdjhasjhdkhaksjdhjahsjdhaksjhdkahskjdhkjahskdhkjashd",
      },
      {
	id:4,
        nombre: "Hamburguesas",
        categoria: "Comida rápida",
        cantidadxdia: "20",
        precio: "5",
        imagen:
          "https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2012/01/comida-rapida-casera.jpg",
        descripcion:
          "Lorem ipsum jasjdjajsdhaksjhdkahskdjhasjhdkhaksjdhjahsjdhaksjhdkahskjdhkjahskdhkjashd",
      }

]

    const initialState = {

        productos: [],
	sidebar : true,
	errorFormularioPro:false
    }

    //dispach para las acciones 

    const [state , dispatch] = useReducer(generalReducer, initialState)

    //Serie de funciones para el CRUD
    //
    const mostrarSidebar = ()=>{
	dispatch({
        type:SWITCH_SIDEBAR
	})
    }

    //Obtener productos 
    //
    const obtenerProductos = () => {
	dispatch({
	    type:OBTENER_PRODUCTOS,
	    payload:productos
	})
    }

    const agregarProducto = producto => {
	producto.id = uuidv4();

	//insertar a productos
	dispatch({
	    type:AGREGAR_PRODUCTO,
	    payload:producto
	})

    };

    //validar formulario
    const mostrarError = ()=> {
     dispatch({
     type:VALIDAR_FORMPRODUCTO
     })
    }

    return (
	<generalContext.Provider
	value = {{
	    sidebar : state.sidebar,
	    productos: state.productos,
	    errorFormularioPro: state.errorFormularioPro,

	    obtenerProductos,
	    mostrarSidebar,
	    agregarProducto,
	    mostrarError
	}}
	>
	{props.children}
	</generalContext.Provider>
    )
}

export default GeneralState;
