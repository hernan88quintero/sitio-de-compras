import React from 'react';

const Form = ({registerCreate, setRegisterCreate}) => {

  // handle = encargado de...


    const handleChange = e => {
      setRegisterCreate({
        ...registerCreate,
        [e.target.name]: e.target.value
      })
    }

    var {Correo, Password, Direccion1, Direccion2, Ciudad, Postal} = registerCreate;

    const handleSubmit = () => {
      Password = parseInt(Password, 10)
      Postal = parseInt(Postal, 5)  

      // validación de los datos
      if (Correo === '' || Password <= 0 || Direccion1 === '' || Direccion2 === '' || Ciudad === '' || Postal <= 0 ) {

        alert('Todos los campos son obligatorios')
        return        
      }

      // Consulta
      const requestInit = {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(registerCreate)
      }
      fetch('http://localhost:5000/api/register/create', requestInit)
      .then(res => res.json())
      .then(res => console.log(res))

      // Reiniciando State (estado) de los registros

      setRegisterCreate({
        Correo: '', 
        Password: 0, 
        Direccion1: '', 
        Direccion2: '',
        Ciudad: '', 
        Postal: 0
      })



    }


    return (
        <div className="container">

<form onSubmit={handleSubmit} class="container row g-2 m-6">
  <div class="col-md-6">
    <label for="Correo" class="form-label">Correo Electrónico</label>
    <input value={Correo} name="Correo" onChange={handleChange} type="email" class="form-control" id="inputEmail4" placeholder="xxxxx@email.com"/>
  </div>
  <div class="col-md-6">
    <label for="Contrasena" class="form-label">Contraseña</label>
    <input name="Password" onChange={handleChange} type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="Direccion1" class="form-label">Dirección 1</label>
    <input value={Direccion1} name="Direccion1" onChange={handleChange} type="text" class="form-control" id="inputAddress" placeholder="Corrientes 0000"/>
  </div>
  <div class="col-12">
    <label for="Direccion2" class="form-label">Dirección 2</label>
    <input value={Direccion2} name="Direccion2" onChange={handleChange} type="text" class="form-control" id="inputAddress2" placeholder="Departamento, casa, piso."/>
  </div>
  <div class="col-md-6">
    <label for="Ciudad" class="form-label">Ciudad</label>
    <input value={Ciudad} name="Ciudad" onChange={handleChange} type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="Provincia" class="form-label">Provincia</label>
    <select id="inputState" class="form-select">
      <option selected>Seleccionar...</option>
      <option>Buenos Aires</option>
      <option>CABA</option>
      <option>Chubut</option>
      <option>Córdoba</option>
      <option>Corrientes</option>
      <option>Río Negro</option>
      
      
    </select>
  </div>
  <div class="col-md-2">
    <label for="Postal" class="form-label">Código Postal</label>
    <input value={Postal} name="Postal" onChange={handleChange} type="number" class="form-control" id="inputZip"/>
  </div>

  <div class="col-12 btn"><br />
    <button type="submit" class="btn btn-warning">Registrarme</button>
  </div>
</form>
            
        </div>
    );
};

export default Form;