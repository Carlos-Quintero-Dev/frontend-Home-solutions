import { NavLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
import axios from "axios";
import { ShowAlert } from "../../hooks/functions";
import './Login.css'


export default function Login() {

  const url = 'http://localhost:3000/api/auth/login'
  const [operations, setOperation] = useState(1)

  const validar = () => {
    let parametros;
    let metodo;
    if (email.trim() === ''){
      ShowAlert('falta el email', 'warning')
    }else if (password.trim() === '') {
      ShowAlert('falta el password', 'warning')
    }else{
      if (operations === 1) {
        parametros = {email:email.trim(), password:password.trim()}
        metodo = 'POST'
      }
      enviarSolicitud(metodo, parametros)
    }
  }
  const enviarSolicitud = async(metodo, parametros) => {
    await axios({method:metodo, url:url, data:parametros}).then(function(respuesta){
      ShowAlert('sesion iniciada con exito')
      window.location.href = '/normalDashboard/casas'

    })
    .catch(function(error){
      ShowAlert('correo o contraseña incorrectos', 'error')
      console.log(error);
    })
  }



  const initialForm = {
    email:'',
    password:''
  }

const {formState, onInputChange} = useForm(initialForm)

const {email, password} = formState

  const onSubmit = (event) =>{
    event.preventDefault()
  }

  

  return (
    <>
        <div className="home">
          <div className="body">
            <div className="back">
              <i className="bi bi-arrow-left-square-fill"></i> 
              <NavLink to={'/'}>Volver a la pantalla principal</NavLink>
            </div>
            <div className="wrapper">
              <form onSubmit = {onSubmit}>
                <h1>login</h1>
                <div className="input-box">
                  <input type="text" name="email" placeholder="Email" value={email} required onChange={onInputChange} />
                  <i className="bi bi-person-fill"></i>
                </div>
                <div className="input-box">
                  <input type="password" name="password" placeholder="Password" value={password} required onChange={onInputChange}/>
                  <i className="bi bi-lock-fill"></i>
                </div>
                <div className="remember-forgot">
                  <label><input type="checkbox" />Remember me</label>
                  <a href="#">Forgot password</a>
                </div>
                <button type="submit" id="login" className="btn" onClick={() => validar()}>Login</button>
                <div className="register-link">
                  <p>Don't have account? <NavLink to={'/register'}>Register</NavLink></p>
                </div>
              </form>
            </div>
          </div>        

        </div>
    </>
  )
}
