import React,{Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard, faConciergeBell, faFileInvoice, faHome} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import {useContext, useState} from 'react/cjs/react.development';
import generalContext from '../../context/general/generalContext';

const Sidebar = () => {
    //Obtener el state del formulario

    const generalsContext = useContext(generalContext);
    const {sidebar, mostrarSidebar} = generalsContext;

    const [mostrarBtn , showMostrarBtn] = useState(true)

    const xx = ()=>{
      mostrarSidebar();
      showMostrarBtn(!mostrarBtn);
    }


    return (
<Fragment>
   
       <div className={sidebar ? 'bg-danger w-64  Sidebar h-full'
       :'bg-danger w-64  Sidebar h-full activo'}>
        
        <div className=" flex justify-between px-8 py-5 items-center bg-caja w-full">
             <Link className="w-full h-full" to={'/gr'}>
            <h1 className="text-naranja ">LUNCH TIME</h1>   
            </Link>
            <button
            className='absolute left-64 pl-5 text-red-300 '
            onClick={() => xx()}
            >
               {/* <FontAwesomeIcon icon={faBars} className="text-2xl"/>  */}
               <div className={mostrarBtn ? 'btnSidebar'
	       :'btnSidebar mostrar'}>
               <div className="uno"></div>
               <div className="dos"></div>
               <div className="tres"></div>

               </div>
    
              
             </button>   

        </div>

        <ul className="text-start h-full ">
            <li className="w-full"> 
            <Link to={"/gr"} className="w-full py-3 flex gap-2 transition duration-500 hover:bg-yellow-200"><FontAwesomeIcon className="my-auto ml-8" icon={faHome}/> Inicio</Link>
            </li>
            
            <li className="w-full">
            <Link to={"/gm"} className="w-full py-3 flex gap-2 transition duration-500 hover:bg-yellow-200"><FontAwesomeIcon className="my-auto ml-8" icon={faConciergeBell}/> Menú</Link>
            </li>
            
            <li className="w-full">
            <Link to={"/gp"} className="w-full py-3 flex gap-2 transition duration-500 hover:bg-yellow-200"><FontAwesomeIcon className="my-auto ml-8" icon={faClipboard}/> Lista de Pedidos</Link>
            </li>

            <li className="w-full">
            <Link to={"/gf"} className="w-full py-3 flex gap-2 transition duration-500 hover:bg-yellow-200"><FontAwesomeIcon className="my-auto ml-8" icon={faFileInvoice}/> Facturas</Link>
            </li>
           
        </ul>

</div> 
</Fragment>
);
    };
export default Sidebar;
