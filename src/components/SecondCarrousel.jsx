import React from 'react';




import logob21 from '../img/b21.png';
import logob22 from '../img/b22.png';
import logob23 from '../img/b23.png';

function SecondCarrousel() {


    return(

        <div>
            

            

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner container">
                <div className="carousel-item active">
                  <img src={logob21} className="d-block w-100" alt="..." height="430" width="220"/>
                </div>
                <div className="carousel-item">
                  <img src={logob22} className="d-block w-100" alt="..." height="430" width="220"/>
                </div>
                <div className="carousel-item">
                  <img src={logob23} className="d-block w-100" alt="..." height="430" width="220"/>
                </div>
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>


        <hr className="featurette-divider" style= {{color: "#ECBE13"}}/>

        </div>

    )
    
};

export default SecondCarrousel;