import axios from "axios";
import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import { ShowAlert } from "../../hooks/functions";
import './Register.css'


export default function Register() {  

  const url = 'http://localhost:3000/api/auth/register'
  const [operations, setOperation] = useState(1)

  const validar = () => {
    let parametros;
    let metodo;
    if(name.trim() === ''){
      ShowAlert('falta el nombre', 'warning')
      return;
    }

    if (email.trim() === ''){
      ShowAlert('falta el email', 'warning')
      return;
    }
    if (password.trim() === '') {
      ShowAlert('falta el password', 'warning')
      return;
    }
    if (operations === 1) {
        parametros = {name:name.trim(), email:email.trim(), password:password.trim()}
        metodo = 'POST'
      }
      
    enviarSolicitud(metodo, parametros)
  }
  const enviarSolicitud = async(metodo, parametros) => {
    await axios({method:metodo, url:url, data:parametros}).then(function(respuesta){
      ShowAlert('Usuario normal registrado con exito')
      window.location.href = '/normalDashboard/casas'
    })
    .catch(function(error){
      ShowAlert('error en la solicitud', 'error')
      console.log(error);
    })
  }

  const validar2 = () => {
    let parametros;
    let metodo;
    if(name.trim() === ''){
      ShowAlert('falta el nombre', 'warning')
    }else if (email.trim() === ''){
      ShowAlert('falta el email', 'warning')
    }else if (password.trim() === '') {
      ShowAlert('falta el password', 'warning')
    }else{
      if (operations === 1) {
        parametros = {name:name.trim(), email:email.trim(), password:password.trim()}
        metodo = 'POST'
      }
      enviarSolicitud2(metodo, parametros)
    }
  }
  const enviarSolicitud2 = async(metodo, parametros) => {
    await axios({method:metodo, url:url, data:parametros}).then(function(respuesta){
      ShowAlert('Usuario administrador registrado con exito')
    })
    .catch(function(error){
      ShowAlert('error en la solicitud', 'error')
      console.log(error);
    })
  }



    const initialForm = {
        name:'',
        email:'',
        password:''
      }

    const {formState, onInputChange} = useForm(initialForm)

    const {name, email, password} = formState
    
      const onSubmit = (event) =>{
        event.preventDefault()
      }

    {/*=====================toggle button======================*/}
      const [btnState, setBtnState] = useState(false)

      function handleClick(){
          setBtnState(btnState => !btnState)
      }
    
      let toggleClassCheck = btnState ? 'active' : '';

    

  return (
    <>
        <div className="home">
          <div className="body-register">
          <div className="back">
              <i class="bi bi-arrow-left-square-fill"></i>
              <NavLink to={'/'}> Volver a la pantalla principal</NavLink>
            </div>
            
          {/*========================normal register============================*/}
            <div className={`container-register ${toggleClassCheck}`} id="container">
              <div className="from-container sign-in-normal">
                <form onSubmit = {onSubmit}>
                  <h1>Crea una cuenta normal</h1>
                  <div className="social-icons">
                    <a href="https://mail.google.com/mail/u/0/" className="icons"><i class="bi bi-google"></i></a>
                    <a href="#" className="icons"><i class="bi bi-facebook"></i></a>
                  </div>
                  <span>O use su correo para registrarse</span>
                  <input type="text" name="name" placeholder="nombre" value={name} onChange={onInputChange}/>
                  <input type="text" name="email" placeholder="correo electronico" value={email} onChange={onInputChange}/>
                  <input type="password" name="password" placeholder="contraseña" value={password} onChange={onInputChange}/>
                  <button onClick={() => validar()}>Registrate</button>
                </form>
              </div>

         {/*========================admin register============================*/}
              <div className="from-container sign-in-admin">
                <form onSubmit = {onSubmit}>
                  <h1>Crea una cuenta de administrador</h1>
                  <div className="social-icons">
                    <a href="#" className="icons"><i class="bi bi-google"></i></a>
                    <a href="#" className="icons"><i class="bi bi-facebook"></i></a>
                  </div>
                  <span>O use su correo para registrarse</span>
                  <input type="text" name="name" placeholder="nombre" value={name} onChange={onInputChange}/>
                  <input type="text" name="email" placeholder="correo electronico" value={email} onChange={onInputChange}/>
                  <input type="password" name="password" placeholder="contraseña" value={password} onChange={onInputChange}/>
                  <button onClick={() => validar2()}>Registrate</button>
                </form>
              </div>

          {/*========================toggle panel============================= */}
              <div className="toggle-container">
                <div className="toggle">
                  <div className="toggle-panel toggle-left">
                    <h1>Hola! bienvenido</h1>
                    <p>si solo quieres disfrutar de nuestros sevicio, crea una cuenta normal</p>
                    <button className="hidden" id="normal" onClick={handleClick} >Registrarse</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                    <h1>Hola! bienvenido</h1>
                    <p>si quieres dar a conocer tu casa, aparatamento o habitacion para poner en alquiler, crea una cuenta de administracion</p>
                    <button className="hidden" id="admin" onClick={handleClick}>Registrarse</button>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}
