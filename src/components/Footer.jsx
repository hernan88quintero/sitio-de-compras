import React from 'react';

function EndPage() {


    return( <div className="container">

<hr class="featurette-divider" style={{color: "#ECBE13"}}/>

    <div className="row" id="piePagina">

      <div className="col-12 col-md">
       <a style={{color : "#ECBE13"}}> Marca.com</a><br/><br/>
        <small className="d-block mb-3" style={{color: "white"}} >&copy; Hernan Quintero, Todos los Derechos Reservados. (2021)</small>
      </div>

      <div className="col-6 col-md">
        <h5 style={{color : "#ECBE13"}}>Nuestras Marcas</h5>
        <ul className="list-unstyled{{textsmall">
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Black And Decker</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Steel</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Otra Marca</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Dewalt</a></li>
          
        </ul>
      </div>

      <div className="col-6 col-md">
        <h5 style={{color : "#ECBE13"}} >Servicio al Consumidor</h5>
        <ul className="list-unstyled{{textsmall">
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Teléfono 800-000-000</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Correo@electronico.com</a></li>
          
        </ul>
      </div>

      <div className="col-6 col-md">
        <h5 style={{color : "#ECBE13"}}>Sobre Nosotros</h5>
        <ul className="list-unstyled{{textsmall">
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Historia</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Objetivos</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Trayectoria</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Fundación</a></li>
        </ul>
      </div>

      <div className="col-6 col-md">
        <h5 style={{color : "#ECBE13"}}>Contáctanos</h5>
        <ul className="list-unstyled{{textsmall">
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Teléfono 900-000-000</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">correo@electronico.com</a></li>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Av. De Mayo 2765, CABA.</a></li>
          <br/>
          <li><a className="link-warning" style={{textDecoration: "none"}} href="#" target="_blank">Nuestras Redes Sociales</a></li>

          <a className="navbar-brand" style={{color: "#ECBE13"}} href="https://www.facebook.com/" target="_blank"> </a>
          <a className="navbar-brand" style={{color: "#ECBE13"}} href="https://www.instagram.com/" target="_blank"></a>
          <a className="navbar-brand" style={{color: "#ECBE13"}} href="https://twitter.com/" target="_blank"></a>


        </ul>
      </div>

    </div>

</div>

    )
    
};

export default EndPage;