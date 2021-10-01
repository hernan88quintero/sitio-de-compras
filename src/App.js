import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


//IMPORTACION DE COMPONENTES

import Navegador from "./components/Navegador";
import Jumbo from "./components/Jumbo";
import FirstCarrousel from "./components/FirstCarrousel";
import DinamicCartel from "./components/DinamicCartel";
import StaticCartel from "./components/StaticCartel";
import EndPage from "./components/Footer";
import Welcome from "./components/Welcome";
import SecondCarrousel from "./components/SecondCarrousel";
import Article1 from "./components/Article1";
import Article2 from "./components/Article2";
import Subheading from "./components/Subheading";
import Form from "./components/Form";
import Navegador2 from "./components/Navegador2";
import Card from "./components/Card";
import Casa from "./components/Casa"
import Tabla from "./components/Tabla";
import Form2 from "./components/Form2"

//  esto es JSX y un funcion nornmal

function App() {
  
  // Acá obtenemos el estado del registro y a su vez creamos uno nuevo agregando los parametros de inicio del estado 

    const [registerCreate, setRegisterCreate] = useState({ 
      Correo: '', 
      Password: 0, 
      Direccion1: '', 
      Direccion2: '',
      Ciudad: '', 
      Postal: 0
    })



    // Obtengo como estado la lista de registros, inicia con un array vacío

    // const [obtengo el estado, modififico el estado]

    const [register, setRegister] = useState([])

    // Actualicacion de la tabla al borrar

    const [listUpdated, setListUpdated] = useState(false)

    // Consulta ante modificación y actualización de registros, estos sustituyen aquellos métodos del ciclo de vida de los componentes cuando se usan con clases
  
  
    useEffect(() => {
      const getRegister = () => {
        fetch('http://localhost:5000/api/register')
        .then(res => res.json())
        .then(res => setRegister(res))
      }
      getRegister()
      setListUpdated(false)
    }, [listUpdated])




  return (



    <Router>
      <div className="App container">

        <Switch>

          <Route path="/lista">

          <Navegador />   

          <Form2 registerCreate={registerCreate} setRegisterCreate={setRegisterCreate} setListUpdated={setListUpdated} />         

          <Tabla registerCreate={registerCreate} register={register} setListUpdated={setListUpdated}/>

            <EndPage />

          </Route>

          <Route path="/nosotros">

          <Navegador />            

          <Article1 />

            <EndPage />
            
          </Route>

          <Route path="/ofertas">
            <Navegador />

            <SecondCarrousel />

            <StaticCartel />

            <EndPage />
          </Route>

          <Route path="/productos">
            <Navegador />

            <FirstCarrousel />

            <Article2 />

            <Subheading />
            <br />

            <Article2 />

            <Subheading />

            <EndPage />
          </Route>

          <Route path="/producto">
            <Navegador />

            <div className="container row">
            <div className="col-md-6"><Card /></div>
            <div className="col-md-6"><Article2 /></div>
            </div>

            <EndPage />
          </Route>

          <Route path="/categorias">
            <Navegador />
            <DinamicCartel />

            <EndPage />
          </Route>

          <Route path="/servicios">
            <Navegador />

            <Article1 />

            <SecondCarrousel />

            <EndPage />
          </Route>

          <Route path="/registro">
            <Navegador />

              <Form registerCreate={registerCreate} setRegisterCreate={setRegisterCreate}/>


            <EndPage />
           
          </Route>

          <Route path="/session">
            <Navegador2 />

            <Welcome />         

            <EndPage />
          </Route>

          <Route path="/">

            <Navegador />

            <Welcome />

            <EndPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
