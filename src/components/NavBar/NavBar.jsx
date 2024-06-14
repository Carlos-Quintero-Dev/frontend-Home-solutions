import { NavLink } from "react-router-dom";
import './NavBar.css';
import { useState } from "react";


export default function NavBar() {

  return (
    <>

      <div className="header">

        <nav className='bar-nav'>
            <img className="logo" src="/src/assets/images/logo.png" alt="logo" />
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#beneficios">Beneficios</a></li>
            </ul>      
            <NavLink to={"/login"}><button type="button" onClick={() => handleClick()}>Iniciar sesion</button></NavLink>
        </nav>

      </div>

    </>
  )
}
