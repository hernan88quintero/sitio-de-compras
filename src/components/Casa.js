import React, {useState, useEffect} from 'react';

import Navegador from './Navegador';

import { getRegister } from '../services/apiRegister';

const Casa = () => {
    const [register, setRegister] = useState([]);

    useEffect( () => {
        fetchRegister();
    },[]);


    const fetchRegister = () => {
        getRegister().then(json => {
            if (json.error) {
                console.log("error");
            } else {
                setRegister(json.data);
            }
        })
    }


    return (
        <div className="container">


            <Navegador/>

            <h1 style={{color:"yellow", textAlign:"center"}}> Home</h1>


            { register && register.map((register, i) => (



            <table className="table" style={{color:"yellow", textAlign:"center"}}>
                <thead>
                    
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Dirección 1</th>
                        <th scope="col">Ciudad</th>
                    </tr>
                </thead>
                <tbody>

                <div key={i} style={{color:"aliceBlue"}}/>


                    <tr style={{color:"aliceBlue", textAlign:"center"}} >

                        <th scope="row"> {register.id} </th>
                        <td > {register.Correo} </td>
                        <td> {register.Direccion1} </td>
                        <td> {register.Ciudad} </td>
                    </tr>
                
                    

                    

                </tbody>
            </table>



            ))

            }         
        </div>
    );
};

export default Casa;