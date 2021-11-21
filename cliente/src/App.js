import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import AgregarProducto from './components/GestionRestaurante/AgregarProducto';
import DetallesProducto from './components/GestionRestaurante/DetallesProducto';
import GestionFacturas from './components/GestionRestaurante/GestionFacturas';
import GestionMenus from './components/GestionRestaurante/GestionMenus';
import GestionPedidos from './components/GestionRestaurante/GestionPedidos';
import GestionRestaurante from './components/GestionRestaurante/GestionRestaurante';
import Perfil from './components/GestionRestaurante/Perfil';
import OnePg from './components/OnePage/OnePg';
import GeneralState from './context/general/generalState';
import AuthState from './context/autenticacion/authState';
import AlertaState from './context/alertas/alertaState';
import tokenAuth  from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';
//Revisar si tenemos un token 
//
const token = localStorage.getItem('token')
if(token){
   tokenAuth(token)
}

function App() {


  return (
    <GeneralState>
    <AuthState>
    <AlertaState>
    <Router>

    <Switch>

        <Route exact path="/" component={OnePg} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
        <RutaPrivada exact path="/gr" component={GestionRestaurante} />
        <Route exact path="/gm" component={GestionMenus} />
        <Route exact path="/gp" component={GestionPedidos} />
        <Route exact path="/gf" component={GestionFacturas} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/dp" component={DetallesProducto} />
        <Route exact path="/ap" component={AgregarProducto} />
    </Switch>
    
    </Router>
    </AlertaState>
      </AuthState>
    </GeneralState>
  );
}

export default App;
