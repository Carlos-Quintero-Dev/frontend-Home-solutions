import './SideBar.css'
import { NavLink, Outlet } from 'react-router-dom';

export default function SideBar() {



  return (
    <>
    
    <div className="body-SideBar">
        <nav className="logo-SideBar">
            <ul className='menu'>
                <li >
                  <NavLink to={'casas'}>
                  <i className="fa-solid fa-house" />
                  <span>Casas</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={'apartamentos'}>
                  <i className="fa-solid fa-building" />
                  <span>Apartamentos</span>
                  </NavLink>
                </li>
                <li>
                  <a href='#'>
                  <i className="fa-solid fa-user" />
                  <span>Perfil</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <i className="fa-solid fa-sliders" />
                  <span>Acerca de</span>
                  </a>
                </li>
                <li className='logOut'>
                    <NavLink to={'/'}>
                    <i className="fa-solid fa-right-from-bracket"></i>
                    <span>Cerrar Sesion</span>
                  </NavLink>
                </li>
            </ul>
            <Outlet></Outlet>
        </nav>
    </div>
    </>
  )
}