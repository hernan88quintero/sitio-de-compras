import React from 'react'


import herra16 from '../img/herra16.png';
import herra17 from '../img/herra17.png'
import herra18 from '../img/herra18.png'

function StaticCartel() {


    return(<div className="container">

    

          <div className="row featurette">
              <div className="col-md-8">
                  <h2 className="featurette-heading">Título del Producto. <span className="fraseOferta">Frase u Oferta.</span></h2>
                  <p className="lead">Breve Descripción, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iure voluptatibus, aliquid nobis, fugiat placeat culpa porro voluptas, sunt dignissimos unde deserunt expedita ex. Omnis laboriosam soluta inventore iusto eaque.</p>
              </div>

              <div className="col-md-1">
                <img src={herra16} alt="" height="300" width="300"/>
        
              </div>
          </div>
      
          <hr className="featurette-divider" style={{color: "#ECBE13"}}/>
      
          <div className="row featurette">
            <div className="col-md-8 order-md-5">
              <h2 className="featurette-heading">Título del Producto. <span className="fraseOferta">Frase u Oferta.</span></h2>
              <p className="lead">Breve Descripción, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iure voluptatibus, aliquid nobis, fugiat placeat culpa porro voluptas, sunt dignissimos unde deserunt expedita ex. Omnis laboriosam soluta inventore iusto eaque</p>
            </div>

            <div className="col-md-4">
              <img src={herra17} alt="" height="300" width="300"/>
      
            </div>
          </div>
      
          <hr className="featurette-divider" style={{color: "#ECBE13"}}/>
      
          <div className="row featurette">
            <div className="col-md-8">
              <h2 className="featurette-heading">Título del Producto. <span className="fraseOferta">Frase u Oferta.</span></h2>
              <p className="lead"> Breve Descripción, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod iure voluptatibus, aliquid nobis, fugiat placeat culpa porro voluptas, sunt dignissimos unde deserunt expedita ex. Omnis laboriosam soluta inventore iusto eaque</p>
            </div>

            <div className="col-md-4">
              <img src={herra18} alt="" height="300" width="300"/>
              
      
            </div>
          </div>
      
         

  </div>


    )
    
};

export default StaticCartel;