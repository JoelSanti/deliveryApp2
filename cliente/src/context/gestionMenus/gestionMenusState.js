import {useReducer} from "react";
import gestionMenusContext from "./gestionMenusContext";
import gestionMenusReducer from "./gestionMenusReducer";

const gestionMenusState = props =>{
    const initialState = {
     
    }

    const [state , dispatch] = useReducer(gestionMenusReducer,initialState);

    //Serie de funciones para el CRUD
    
    return (
      <gestionMenusContext.Provider
	value={
	    {}
	}
	>
        {props.children}
      </gestionMenusContext.Provider>
    );
}
