import React from 'react';

const Tabla = ({registerCreate, register, setListUpdated}) => {


    var {Correo, Password, Direccion1, Direccion2, Ciudad, Postal} = registerCreate;

    const handleUpdate = id => {
        Password = parseInt(Password, 10)
        Postal = parseInt(Postal, 5)  

      // validación de los datos
      if (Correo === '' || Password <= 0 || Direccion1 === '' || Direccion2 === '' || Ciudad === '' || Postal <= 0 ) {

        alert('Todos los campos son obligatorios')
        return        
      }

      //consulta

        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(registerCreate)
        }
        fetch('http://localhost:5000/api/register/update/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setListUpdated(true)

    }

      // Función para Borrar registro

      const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:5000/api/register/delete/' + id, requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setListUpdated(true)
        
    }


    return (
        <div className="container">
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

                {register.map(register => (

                    <tr key={register.id} style={{color:"aliceBlue", textAlign:"center"}} >

                                <td>  {register.id} </td>
                                <td > {register.Correo} </td>
                                <td> {register.Direccion1} </td>
                                <td> {register.Ciudad}  </td>

                                <td>
                                    <div className="mb-2">
                                        <button onClick={() => handleDelete(register.id)} className="btn btn-danger">Borrar</button>

                                    </div>
                                    <div className="mb-2">
                                        <button onClick={() => handleUpdate(register.id)} className="btn btn-success">Editar</button>

                                    </div>
                                    
                                </td>

                    </tr>


                ))}
                              

                </tbody>
            </table>

            
        </div>
    );
};

export default Tabla;