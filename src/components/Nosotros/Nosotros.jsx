import './Nosotros.css';

export default function Nosotros() {
  return (
    <>

    <div className="content-about" id="nosotros">
        <h2 className="title">Nosotros</h2>
        <p>Home Solutions es una plataforma que conecta a propietarios de viviendas 
          con inquilinos potenciales para facilitar el alquiler de habitaciones en Coro, 
          estado Falcón. La empresa ofrece una amplia gama de servicios para ayudar a los 
          usuarios a encontrar el alojamiento perfecto
        </p>

       <div className="caja-container2">
       <div className="caja">
            <img src="/src/assets/images/carnet.jpg" alt="" />
            <h3>Carlos Quintero</h3>
            <p>Desarrollador</p>
        </div>
        <div className="caja">
            <img src="/src/assets/images/carnet.jpg" alt="" />
            <h3>Mariana Acosta</h3>
            <p>Desarrolladora</p>
        </div>
        <div className="caja">
            <img src="/src/assets/images/carnet.jpg" alt="" />
            <h3>Jose Romero</h3>
            <p>Atencion al cliente</p>
        </div>
        <div className="caja">
            <img src="/src/assets/images/carnet.jpg" alt="" />
            <h3>Gilharyth Lugo</h3>
            <p>Atencion al cliente</p>
        </div>
       </div>
    </div>
    
    </>
  )
}
