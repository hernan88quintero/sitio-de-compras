import React from 'react';


import albanil from '../img/albanil.png'

function Welcome() {


    return(      
    
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center" id="imagenfondo">
    <div className="col-md-6 p-lg-1 mx-auto my-1">
      <h1 className="display-1 fw-normal">Bienvenidos</h1>
      <div>
        <img src={albanil} width="400" height="400"/>
       </div>
      <p className="lead fw-normal">Lorem explora ipsum dolor sit amet consectetur adipisicing elit. Nemo optio magnam vitae, impedit harum molestias possimus quas necessitatibus facilis error eaque repellat ut sequi reprehenderit natus dolor, voluptatum architecto ad. lorem</p>
      <a className="btn btn-warning" href="/productos">Explorar</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>

  </div>

    )
    
};

export default Welcome;