import './Casa.css'
import { useState, useEffect } from 'react'
import {Card} from '../../hooks/card'

export default function Casas() {

  const [casas, setcasas] = useState([])

  const fetchCasas = async () => {
    const response = await fetch('http://localhost:3000/api/house/')
    const data = await response.json()
    console.log(data.houses);
    setcasas(data.houses)

  }

  useEffect(() => {
    fetchCasas()

  },[])

  return (
    <>
        <div className="main-content">
          <div className="header-wrapper">
            <div className="header-title">
              <span>Casas</span>
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
          <h4 className="header-title">Casas en alquiler</h4>
          <div className="table-container">
              {casas.map(casa => (
                  <Card
                  imagen={casa.img}
                  name={casa.name}
                  price={casa.price}
                  address={casa.address}
                  services={casa.services}
                  description={casa.description}>
                  </Card>
                ))}
          </div>
         </div>
        </div>
			
    </>
  )
}
