import React from 'react';

const Navegador2 = () => {
    return (
        <div>
            <div class="Navegador container">

{/* <!-- Nav principal y expandible --> */}

  <div className="navbar navbar-expand-lg justify-content-center navbar-light">
    


      <div>

            <div>

                


                <ul className="navbar justify-content-center" id="inicio">

                        <a className="navbar-brand" style={{color: "#ECBE13"}} href="#" Target="_blank"></a>
             
                    <a className="navbar-brand ms-2" style={{color: "#ECBE13"}} href="/" Target="_blank">Marca.com</a>

                    <button className="navbar-toggler" type="button" style={{color: "#ECBE13"}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">


                          
                        <li className="navbar">
                          <a className="nav-link" style={{color: "#ECBE13"}} href="/nosotros" Target="_blank" aria-expanded="false">Sobre Nosotros</a>
                        </li>
                        <li className="navbar">
                          <a className="nav-link" style={{color: "#ECBE13" }} href="/productos" Target="_blank">Productos</a>
                        </li>
                        <li className="navbar">
                          <a className="nav-link" style={{color: "#ECBE13" }} href="/ofertas" Target="_blank">Ofertas</a>
                        </li>
                        
                        <li className="navbar dropdown">
                          
                                  
                            <a className="dropdown-toggle ms-3 me-auto" href="#" Target="_blank" role="button" id="dropdownMenuLink" style={{color: "#ECBE13", textDecoration:"none" }} data-bs-toggle="dropdown" >
                              Categorias
                            </a>
                          
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 1</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 2</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 3</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 4</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 5</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 6</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 7</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 8</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 9</a></li>
                                <li><a className="dropdown-item" href="/categorias" Target="_blank">TITULO 10</a></li>
                            </ul>
                        
                        </li>
                        
                        <li className="navbar">
                          <a className="nav-link" style={{color: "#ECBE13"}} href="/registro" Target="_blank">Registrarme</a>
                        </li>
                        <li className="navbar">
                          <a className="nav-link" style={{color: "#ECBE13"}} href="/session" Target="_blank">Iniciar sesión</a>
                        </li>

                    </div>
      
                </ul>


          </div>

       <div>

          <form className="d-flex">
            <input className="form-control my-2 me-2 m-md-3" type="search" placeholder="Buscar" aria-label="Search"></input>
            <button className="btn btn-outline-warning my-auto me-5" type="submit">Buscar</button>                     
          </form>

        </div>

        
      </div>


    </div>


    {/* <!-- // Redes Sociales y Usuario --> */}

      <div className="navbar navbar-light me-5">
          

              
                      <div className="navbar navbar-light m-md-3">

                          <a className="navbar-brand" style={{color: "#ECBE13" }} href="#" Target="_blank"> </a> 
                          
                         
                          <a className="navbar-brand" style={{color: "#ECBE13" }} href="#" Target="_blank"></a>
                         
                          
                          <a className="navbar-brand" style={{color: "#ECBE13" }} href="#" Target="_blank"></a>
                            
                          <a className="navbar-brand active" style={{color: "#ECBE13" }} href="#" Target="_blank"></a>
                            
                      </div>

                      

                      
                      

                      

                      <div className="navbar">

                            <a class="navbar-brand me-3" style={{color: "#ECBE13"}} href="#" Target="_blank">Carrito </a>
                      

                          <div className="dropdown">
                      
                              <a className="btn btn-outline-warning dropdown-toggle me-3" href="#" Target="_blank" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Mi Usuario
                              </a>
                            
                              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                  <li><a className="dropdown-item" href="/lista" Target="_blank">Perfil</a></li>
                                  <li><a className="dropdown-item" href="/lista" Target="_blank">Mis Órdenes</a></li>
                                  <li><a className="dropdown-item" href="/lista" Target="_blank">Mis Direcciones</a></li>
                                  <li><a className="dropdown-item" href="/lista" Target="_blank">Mi Billetera</a></li>
                                  <li><hr className="dropdown-divider"></hr></li>
                                  <li><a className="dropdown-item" href="#" Target="_blank">Cerrar Sesión</a></li>
                              </ul>
                          </div>

                          <div>       <a className="navbar-brand active" style={{color: "#ECBE13"}} href="#" Target="_blank"></a>

                          
                            
                          
                      </div>

                      </div>

                          


          
          


      </div>
      <hr class="featurette-divider" style={{color: "#ECBE13"}}/>

</div>

        </div>
    );
};

export default Navegador2;