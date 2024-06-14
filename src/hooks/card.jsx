import './card.css'

export const Card = ({ imagen, name, price, address, services, description }) => {
  
  
    return (
      <> 
        <div className="tarjeta">
          <img src={imagen} alt="Imagen del producto" className="tarjeta-imagen" />
          <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{name}</h3>
            <p className="tarjeta-descripcion">{price}</p>
            <p className="tarjeta-descripcion">{address}</p>
            <p className="tarjeta-precio">{services}</p>
            <p className="tarjeta-descripcion">{description}</p>
          </div>
        </div>
      </>
    )
  }