import { useState, useEffect } from 'react'
import { Card } from '../../hooks/card'

export default function Apartamentos() {

  const [apartamentos, setapartamentos] = useState([])

  const fetchApartamentos = async () => {
    const response = await fetch('http://localhost:3000/api/departament/')
    const data = await response.json()
    console.log(data.departaments);
    setapartamentos(data.departaments)

  }

  useEffect(() => {
    fetchApartamentos()

  },[])

  return (
    <>
        <div className="main-content">
          <div className="header-wrapper">
            <div className="header-title">
              <span>Apartamentos</span>
              <h2>DashBoard</h2>
            </div>
            <div className="user-info">
              <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='Busque por ciudad' />
              </div>
              <img src="/src//assets//images/carnet.jpg" alt="" />
            </div>
          </div>
         <div className="tabular-wrapper">
          <h4 className="header-title">Apartamentos en alquiler</h4>
          <div className="table-container">

              {apartamentos.map(apartamento => (
                  <Card
                  imagen={apartamento.img}
                  name={apartamento.name}
                  price={apartamento.price}
                  address={apartamento.address}
                  services={apartamento.services}
                  description={apartamento.description}>
                  </Card>
                ))}

          </div>
         </div>
        </div>
			
    </>
  )
}
