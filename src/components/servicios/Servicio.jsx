import './Servicio.css';

export default function Servicio() {
  return (
    <>
       <div className="content-servicio sau" id="servicios">
        <h2>¿Por que elegirnos?</h2>
        
        <div className="caja-container">
            <div className="caja">
            <i className="bi bi-shield-fill-check"></i>
            <h3>Seguro</h3>
            <p>seguridad garantizada al momento de elegir tu proximo hogar</p>
            </div>
      
            <div className="caja">
            <i className="bi bi-award-fill"></i>
            <h3>calidad</h3>
            <p>ofrecemos los mejores alquileres disponibles</p>
            </div>
        
            <div className="caja">
            <i className="bi bi-mouse2-fill"></i>
            <h3>Facil alcance</h3>
            <p>tenemos opciones buenas, bonitas y baratas a un click</p>
            </div>
        </div>
    </div>

    </>
  )
}
