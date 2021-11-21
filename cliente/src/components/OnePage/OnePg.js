import React,{Fragment} from 'react';
import InfoPrincipal from './InfoPrincipal';
import CabeceraOnePage from '../layout/CabeceraOnePage';

const OnePg = () => {
    return ( 
        <Fragment>
        <div className="contenedor-OnePage h-screen bg-yellow-50">
               <CabeceraOnePage/>
               <InfoPrincipal/>
        </div>
        
        </Fragment>

     );
}
 
export default OnePg;