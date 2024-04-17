import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between p-4 shadow-md bg-slate-400">
      <Link to="/" className="logo"><h1>Suplemengod</h1></Link>
      <ul className="menu">
        <li><Link className="menu-link" to="/">Inicio</Link></li>
        <li><Link className="menu-link" to="/productos">Productos</Link></li>
        <li><Link className="menu-link" to="/productos/proteina">Proteinas</Link></li>
        <li><Link className="menu-link" to="/productos/creatina">Creatinas</Link></li>
        <li><Link className="menu-link" to="/contacto">Contacto</Link></li>

      </ul>
    </nav>
  )
}

export default Navbar