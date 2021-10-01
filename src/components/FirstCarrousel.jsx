import React from 'react'
import logob4 from '../img/b4.png'
import logob2 from '../img/b2.png'
import logob3 from '../img/b3.png'

function FirstCarrousel() {


    return(
    
//     <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
// //     <div className="carousel-inner">
// //       <div className="carousel-item active">
// //         <img src={logob1} className="d-block w-100" alt="..."></img>
// //       </div>
// //       <div className="carousel-item">
// //         <img src={logob2} className="d-block w-100" alt="..."></img>
// //       </div>
// //       <div className="carousel-item">
// //         <img src={logob3} className="d-block w-100" alt="..."></img>
// //       </div>
// //     </div>
// //     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
// //       <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //       <span className="visually-hidden">Previous</span>
// //     </button>
// //     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
// //       <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //       <span className="visually-hidden">Next</span>
// //     </button>
// //   </div>


<div className="container">

    

    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner container">
        <div className="carousel-item active">
          <img src={logob4} alt="" height="400" width="1300"/>
          
  
          <div className="container">
            <div className="carousel-caption text-start">
              <h1 style={{color:"#ECBE13", fontSize: "50px"}}>Imperdible</h1>
              <p className="lead" style={{color:"aliceblue", fontSize: "50px"}}>2 X 1 en Productos</p>
              <p><a className="btn btn-lg btn-warning" href="#" >Imperdible</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={logob2} alt="" height="400" width="1300"/>
          
  
          <div className="container">
            <div className="carousel-caption">
              <h1 style={{color:"aliceblue"}}>Lo necesito</h1>
              <p className="lead" style={{color:"aliceblue"}}> 15% OFF en Productos</p>
              <p><a className="btn btn-lg btn-warning" href="#">Lo Necesito</a></p>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <img src={logob3} alt="" height="400" width="1300"/>
          
  
          <div className="container">
            <div className="carousel-caption text-end">
              <h1 style={{color:"#ECBE13", fontSize: "50px"}}>Lo quiero</h1>
              <p className="lead" style={{color:"aliceblue", fontSize: "50px"}}>50% Solo por Hoy</p>
              <p><a className="btn btn-lg btn-warning" href="#">Ofertón</a></p>
            </div>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    

</div>
)
    
};

export default FirstCarrousel;