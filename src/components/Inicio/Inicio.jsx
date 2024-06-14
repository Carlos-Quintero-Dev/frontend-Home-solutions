import { NavLink } from "react-router-dom";
import './inicio.css';

export default function Inicio() {
  return (
    <>
    <div className="home" id="inicio">

      <div className="home-container">
        <h3>Hola!, Bienvenido a </h3>
        <h1>Home <b>Solutions</b> </h1>
        <h3>Las mejores opciones al alcance de un click!</h3>
        <NavLink to={'/register'}><button type="button">Registrate</button></NavLink>
      </div>

    </div>
    </>
  )
}
